/* Copyright 2018, University of Adelaide */

var express = require('express');
var router = express.Router();

var sanitizeHtml = require('sanitize-html');

const argon2 = require('argon2');
const uuid = require('uuid/v1');

/* GET Blog Posts. */
router.get('/posts.json', function(req, res, next) {
    
    //Connect to the database 
    req.pool.getConnection( function(err,connection) { 
        if (err) { res.status(500).send(); } 
        
        // Query to retrieve Blog Posts
        var query = "SELECT name AS author, image AS authorImg, date AS date, title AS title, content AS body "+
                    "FROM users INNER JOIN blogposts on blogposts.userid = users.id "+
                    "ORDER BY date DESC LIMIT "+req.query.num; 
        connection.query(query, function(err, posts){ 
            if (err) { console.log(err); posts=[];}
            
            let user = null;
            if('user' in req.session){
                user = req.session.user;
            }
                
            // JSON reply with blog posts and user status
            res.json({user:user,posts:posts});
            
            
            
        }); 
    });
    
});


/* GET User Info. */
router.get('/users.json', function(req, res, next) {

    if(!('user' in req.session)){
        res.status(401).send();
        return;
    } else if (req.session.user.admin != 1){
        // Not an admin user
        res.status(403).send();
        return;
    }
    
    //Connect to the database 
    req.pool.getConnection( function(err,connection) { 
        if (err) { res.status(500).send(); } 
 
        // Query to retrieve all user info
        var query = "SELECT id,admin,username,name,image FROM users"; 
        connection.query(query, function(err,users){ 
            if (err) { 
                // Query failed
                res.status(405).send();
            } else {
                // Success!
                res.json(users);
            }
        });   

            
    });
    
});


/* Login. */
router.post('/login', function(req, res, next) {
    
    //Get username and password from POST request
    var password = req.body.password;
    var username = req.body.username;
    
    //Connect to the database 
    req.pool.getConnection( function(err,connection) { 
        if (err) { res.status(500).send(); } 
        
        // Query to get user info
        var query = "SELECT * FROM users WHERE username=?"; 
        connection.query(query, [username], async function(err, users){ 
            if (err || users.length <= 0) { 
                // No valid user found
                res.status(401).send();
                return;
            }
            
            // Check if salted hashes match
            if(await argon2.verify(users[0].pwordhash, password)){
                // Correct password, store session
                delete users[0].pwordhash;
                req.session.user = users[0];
                res.end();
            } else {
                // Wrong password
                res.status(401).send();
            }
        }); 
    });
    
});


/* Logout. */
router.post('/logout', function(req, res, next) {
  
    if('user' in req.session){
        delete req.session.user;
    }
    res.end();
    
});

/* Add Post. */
router.post('/newPost', function(req, res, next) {

    if(!('user' in req.session)){
        res.status(401).send();
        return;
    }
    
    //Connect to the database 
    req.pool.getConnection( function(err,connection) { 
        if (err) { res.status(500).send(); } 

            // Prepare new post
            var id = uuid();
            var author = req.session.user.id;
            var title = req.body.title;
            var content = sanitizeHtml(req.body.body);
            
            // Check for empty content
            if(title=="" || content == ""){
                res.status(405).send();
                return;
            }
            
            // Add post to DB
            var query = "INSERT INTO blogposts (id,userid,title,content) VALUES (?,?,?,?)";
            connection.query(query, [id, author, title, content], function(err){ 
                if (err) { 
                    // Error
                    console.log(err);
                    res.status(405).send();
                } else {
                    // OK
                    res.send();
                }
            });  
            
    });
});


module.exports = router;
