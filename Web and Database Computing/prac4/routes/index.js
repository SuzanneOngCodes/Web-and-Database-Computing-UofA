var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 3.1 and 4,1
var temp = '';
router.get('/last.txt', function(req, res, next) {
  res.set('Content-Type', 'text/plain', 'charset=UTF-8');
  res.send(temp);
  temp = new Date().toString();
});

//3.2
var counter = 1;
router.get('/color.html', function(req,res,next){
  var number = counter%4;
  var html = "";
  if (number === 0){
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1 style="color: blue">Blue</h1>
  </body>

</html>
  `;

  }else if (number === 3){
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1 style="color: green">Green</h1>
  </body>

</html>
  `;
  }else if (number === 2){
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1 style="color: yellow">Yellow</h1>
  </body>

</html>
  `;
  }else{
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1 style="color: red">Red</h1>
  </body>

</html>
  `;
  }

res.send(html);
counter++;
});

//3.3
var d1="";
router.get('/log.html', function(req,res,next){
  // Take note!!
  d1 += '<li>' + new Date().toString() + '</li>';
  var html = "";
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>
  <body>
  <ul>
  ${d1}
  </ul>
  </body>
</html>
  `;
  res.send(html);
});

// 3.4
let pageCount = 0;
router.get('/first.html', function(req,res,next){
  var html = "";
    html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1>Welcome</h1>
  <a href="/main.html">Click on this link!</a>
  </body>

  </html>
  `;
  if (pageCount===0){
    res.send(html);
    pageCount++;
  }else{
    res.redirect('/main.html');
  }
});

router.get('/main.html', function(req,res,next){
  var html = "";
  html=  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset ="UTF-8">
  <title>Express</title>
  </head>

  <body>
  <h1>My main site</h1>
  <p>Me love Me-Me. MEME!!</p>
  </body>

  </html>
  `;
  if (pageCount===0){
    res.redirect('/first.html');
  }else{
    res.send(html);
    pageCount++;
  }
});

// 4.2
var num = 0;
router.get('/color.txt', function(req, res, next) {
  var color = "";
  res.set('Content-Type', 'text/plain', 'charset=UTF-8');
  if (num%4 === 0){
    color="red";

  }else if (num%4 === 3){
    color= "blue";

  }else if(num%4 === 2){
    color = "green";

  }else{
    color = "yellow";
  }
  res.send(String(color));
  num++;
});

// 4.3
var dates = [];

router.get('/log.json', function(req, res, next) {
  let d = { date: new Date().toString() };
  dates.push(d);
  res.json(dates);
});

router.get('/log-ro.json', function(req, res, next) {
    res.json(dates);
});

// 4.4


//4.5
var acceptCount = 0;
router.get('/accept', function(req, res, next) {
  res.sendStatus(200);
  acceptCount++;
});

router.get('/content.ajax', function(req, res, next) {
  if(acceptCount===0){
    res.sendStatus(403);
  }else{
    var html = '';
    html = `
    <p>Terms and conditions supplied</p>
    <p>Terms and conditions supplied</p>
    `;
    res.send(html);
  }
});

//4.6
var images = [
    { uri:'photo-1539154444419-e31272d30a31.jpg', description:'medium-coated black-and-white dog near grass during daytime' },
    { uri:'photo-1553882809-a4f57e59501d.jpg',    description:'black and tan Belgian dog' },
    { uri:'photo-1554196721-b507d7e86ee9.jpg',    description:'gray dog standing on grass' },
    { uri:'photo-1555661059-7e755c1c3c1d.jpg',    description:'black dog behind plants' },
    { uri:'photo-1555991415-1b04a71f18c5.jpg',    description:'adult white Samoyed beside man and woman' },
    { uri:'photo-1558121591-b684092bb548.jpg',    description:'white and black dog lying on sofa' },
    { uri:'photo-1559440165-065646588e9a.jpg',    description:'person holding dog leash short-coat black and white dog' },
    { uri:'photo-1560160643-7c9c6cb07a8b.jpg',    description:'short-coated brown and white dog' },
    { uri:'photo-1562220058-1a0a019ab606.jpg',    description:'pet dog laying on sofa' },
    { uri:'photo-1565194481104-39d1ee1b8bcc.jpg', description:'short-coated gray dog' }
];

var dogCount = 0 ;
router.get('/images.json', function(req, res, next) {
  var i = dogCount%10;
  res.json(images[i]);
  dogCount++;
});

module.exports = router;
