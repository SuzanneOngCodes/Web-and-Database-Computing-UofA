var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/show', function(req, res, next) {
    //Connect to the database
    req.pool.getConnection(function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query;

        if (req.body.name!=""){
            if (req.body.price==="DESC"){
                query = `SELECT Books.Name AS name,Books.Author AS author, Books.Price AS price, Books.Hard_cover AS hard,Books.Soft_cover AS soft,Genre.Romance AS romance,Genre.Gaming AS gaming, Genre.History AS hist, Books.Image AS image FROM Books INNER JOIN Genre ON Books.Id=Genre.Book WHERE Books.Author=? AND (Genre.Gaming=? OR Genre.History=? OR Genre.Romance=? ) AND (Books.Hard_cover=? OR Books.Soft_cover=?) ORDER BY Price DESC;`;
            }else{
                query = `SELECT Books.Name AS name,Books.Author AS author, Books.Price AS price, Books.Hard_cover AS hard,Books.Soft_cover AS soft,Genre.Romance AS romance,Genre.Gaming AS gaming, Genre.History AS hist, Books.Image AS image FROM Books INNER JOIN Genre ON Books.Id=Genre.Book WHERE Books.Author=? AND (Genre.Gaming=? OR Genre.History=? OR Genre.Romance=? ) AND (Books.Hard_cover=? OR Books.Soft_cover=?) ORDER BY Price ASC;`;
            }
            connection.query(query,[ req.body.name, req.body.gaming, req.body.hist, req.body.romance, req.body.hard, req.body.soft], function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                console.log("FEI");
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
        }else{
            if (req.body.price==="DESC"){
                query = `SELECT Books.Name AS name,Books.Author AS author, Books.Price AS price, Books.Hard_cover AS hard,Books.Soft_cover AS soft,Genre.Romance AS romance,Genre.Gaming AS gaming, Genre.History AS hist, Books.Image AS image FROM Books INNER JOIN Genre ON Books.Id=Genre.Book WHERE (Genre.Gaming=? OR Genre.History=? OR Genre.Romance=? ) AND (Books.Hard_cover=? OR Books.Soft_cover=?) ORDER BY Price DESC;`;
            }else{
                query = `SELECT Books.Name AS name,Books.Author AS author, Books.Price AS price, Books.Hard_cover AS hard,Books.Soft_cover AS soft,Genre.Romance AS romance,Genre.Gaming AS gaming, Genre.History AS hist, Books.Image AS image FROM Books INNER JOIN Genre ON Books.Id=Genre.Book WHERE (Genre.Gaming=? OR Genre.History=? OR Genre.Romance=? ) AND (Books.Hard_cover=? OR Books.Soft_cover=?) ORDER BY Price ASC;`;
            }
            connection.query(query,[ req.body.gaming, req.body.hist, req.body.romance, req.body.hard, req.body.soft], function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                console.log("FEI");
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
        }

    });
});

module.exports = router;
