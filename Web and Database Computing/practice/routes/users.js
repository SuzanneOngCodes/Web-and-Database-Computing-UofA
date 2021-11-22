var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Middleware
router.use(function(req, res, next){
    if ('user' in req.session){
        next();
    }else{
        res.sendStatus(400);
    }
});

module.exports = router;
