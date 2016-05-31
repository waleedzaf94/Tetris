var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/register', function(req, res){
	res.render('Register', {});
});

router.post('/register', function(req, res){
	Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account){
		if (err){
			return res.render('Register', { account: account });
		}

		passport.authenticate('local')(req, res, function(){
			res.redirect('/');
		});
	});
});

router.get('/login', function(req, res){
	res.render('Login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res){
	res.redirect('/');
});

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

router.get('/ping', function(req, res){
	res.status(200).send("pong!");
});

router.get('/loginLanding', function(req, res){
	res.render('loginLanding', { user: req.user });
});

router.get('/', function(req, res){
	res.render('Game', { user: req.user });
});

router.get('/game', function(req, res){
	res.render('Game', {});
});

router.get('/rules', function(req, res){
	res.render('Rules', {});
});

router.get('/theme', function(req, res){
	res.render('Theme', {});
});

router.get('/comments', function(req, res){
	res.render('Comments', {});
});

module.exports = router;
