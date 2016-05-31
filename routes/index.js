var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('One', {});
})

router.get('/game', function(req, res){
	res.render('Game', {});
})

router.get('/rules', function(req, res){
	res.render('Rules', {});
})

router.get('/theme', function(req, res){
	res.render('Theme', {});
})

router.get('/comments', function(req, res){
	res.render('Comments', {});
})

router.get('/login', function(req, res){
	res.render('Login', {});
})

module.exports = router;
