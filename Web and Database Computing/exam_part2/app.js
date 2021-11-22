var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var dbConnectionPool = mysql.createPool({
    host: 'localhost',
    multipleStatements: true
});

app.use(function(req, res, next) {
    req.pool = dbConnectionPool;
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'b706835de79a2b4e80506f582af3676ac8361638',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

function initialise_db(){
    dbConnectionPool.getConnection( function(err,connection) {
        if (err) {
          console.error("Unable to configure database. Is your database running and has the correct permissions?");
          return;
        }
        var setup = `
        DROP DATABASE IF EXISTS wdc_exam_part2;
        CREATE DATABASE wdc_exam_part2;
        USE wdc_exam_part2;

        CREATE TABLE users (
            u_id INT AUTO_INCREMENT,
            given_name VARCHAR(50),
            family_name VARCHAR(50),
            username VARCHAR(50) UNIQUE NOT NULL,
            password_hash VARCHAR(256),
            email VARCHAR(128),
            PRIMARY KEY (u_id)
        );

        CREATE TABLE questions (
            q_id INT AUTO_INCREMENT,
            author INT,
            title TEXT,
            content LONGTEXT,
            timestamp DATETIME,
            PRIMARY KEY (q_id),
            FOREIGN KEY (author) REFERENCES users(u_id) ON DELETE SET NULL
        );

        CREATE TABLE upvotes (
            user INT,
            question INT,
            value INT,
            PRIMARY KEY (user,question),
            FOREIGN KEY (user) REFERENCES users(u_id) ON DELETE CASCADE,
            FOREIGN KEY (question) REFERENCES questions(q_id) ON DELETE CASCADE
        );

        CREATE TABLE question_tags (
            tagname VARCHAR(255),
            question INT,
            PRIMARY KEY (tagname,question),
            FOREIGN KEY (question) REFERENCES questions(q_id) ON DELETE CASCADE
        );

        CREATE VIEW q_tags AS
        SELECT GROUP_CONCAT(question_tags.tagname) AS tags,question
        FROM question_tags
        GROUP BY question_tags.question;

        CREATE VIEW q_up AS
        SELECT question, SUM(value) AS tally
        FROM upvotes
        GROUP BY question;

        INSERT INTO users VALUES (1,'Alice','User','alice','$argon2i$v=19$m=16,t=2,p=1$cUprcmRXbDRWNmN6TkNWcQ$zlP8PdnyumlH9h074C6D6w','alice@example.example'),(2,'Bob','User','bob','$argon2i$v=19$m=16,t=2,p=1$cUprcmRXbDRWNmN6TkNWcQ$zlP8PdnyumlH9h074C6D6w','bob@example.example');
        INSERT INTO questions VALUES (1,1,'First Question','This is a question','2021-05-28 06:23:28');
        INSERT INTO question_tags VALUES ('hello',1),('hi',1);

        `;
        connection.query(setup, function(err, rows, fields) {
          connection.release(); // release connection
          if (err) {
            console.error("Unable to configure database. Is your database running and has the correct permissions?");
            return;
          }
        });
    });
}

initialise_db();

module.exports = app;