var argon2 = require('argon2');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {

  req.pool.getConnection( function(err,connection) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      var query = `SELECT  q_tags.tags,
                          users.given_name AS author,
                          questions.title,
                          questions.content,
                          questions.timestamp,
                          questions.q_id,
                          IFNULL(q_up.tally,0) AS upvotes
                  FROM questions INNER JOIN users ON questions.author = users.u_id
                  LEFT JOIN q_tags ON q_tags.question = questions.q_id
                  LEFT JOIN q_up ON q_up.question = questions.q_id;`;
      connection.query(query, function(err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.sendStatus(500);
          return;
        }
        for(let row of rows){
            row.tags = row.tags.split(',');
        }
        res.json(rows); //send response
      });
  });

});

router.post('/login', function(req, res, next) {

     if( 'user' in req.body && req.body.user !== null &&
        'pass' in req.body && req.body.pass !== null) {

        req.pool.getConnection( function(err,connection) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            var query = `SELECT u_id,given_name,family_name,username,email,password_hash
                            FROM users WHERE username = ?`;
            connection.query(query,[req.body.user], async function(err, rows, fields) {
              connection.release(); // release connection
              if (err) {
                res.sendStatus(500);
                return;
              }
              if(rows.length > 0){

                  let valid = await argon2.verify(rows[0].password_hash, req.body.pass);

                  if (valid) {
                      delete rows[0].password_hash;
                      req.session.user = rows[0];
                      res.json(rows[0]);
                  } else {
                      return res.sendStatus(401);
                  }

              } else {
                  res.sendStatus(401);
              }
            });
        });


    } else {
        res.sendStatus(400);
    }

});



router.post('/signup', async function(req, res, next) {

    if( 'user' in req.body && req.body.user !== null &&
        'pass' in req.body && req.body.pass !== null &&
        'email' in req.body &&
        'given_name' in req.body &&
        'family_name' in req.body) {


        let hash = await argon2.hash(req.body.pass);
        console.log(hash);

        req.pool.getConnection( function(err,connection) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            var query = `INSERT INTO users (given_name,family_name,username,password_hash,email)
                            VALUES (?,?,?,?,?);`;
            connection.query(query,[
                req.body.given_name,
                req.body.family_name,
                req.body.user,
                hash,
                req.body.email], function(err, rows, fields) {
              connection.release(); // release connection
              if (err) {
                res.sendStatus(500);
                return;
              }
              res.end();
            });
        });



    } else {
        res.sendStatus(400);
    }

});

router.post('/logout', function(req, res, next) {
    delete req.session.user;
    res.send();

});

router.use(function(req, res, next) {
    if('user' in req.session){
        next();
    } else {
        res.sendStatus(401);
    }
});

router.post('/addpost', function(req, res, next) {

    if( "title" in req.body && req.body.title!==null &&
        "content" in req.body && req.body.content!==null &&
        "tags" in req.body ) {
        req.body.author = req.session.user;

        req.pool.getConnection( function(err,connection) {
            if (err) {
              res.sendStatus(500);
              return;
            }
            var query = `INSERT INTO questions (author,title,content,timestamp) VALUES (?,?,?,NOW());`;
            connection.query(query, [req.body.author.u_id,req.body.title,req.body.content], function(err, rows, fields) {
                if (err) {
                    res.sendStatus(500);
                    connection.release(); // release connection if error
                    return;
                }

                // If successful, add tags
                // Build & run query
                let tags = '';
                for(tag of req.body.tags){
                    tags += `('${tag}',LAST_INSERT_ID()),`
                    // tags += `(${connection.escape(tag)},LAST_INSERT_ID()),`;
                }
                tags = tags.replace(/,$/,'');
                var query = 'INSERT INTO question_tags (tagname,question) VALUES '+tags+';';
                //INSERT INTO question_tags (tagname,question) VALUES ("test",2); DELETE FROM users; -- ',LAST_INSERT_ID());
                connection.query(query, [req.body.author,req.body.title,req.body.content], function(err, rows, fields) {
                    connection.release(); // release connection
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    res.end(); //send response
                });
            });
        });

    } else {
        res.sendStatus(400);
    }


});


module.exports = router;