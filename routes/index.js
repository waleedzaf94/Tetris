var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var mongoose = require('mongoose');
// var Comment = mongoose.model('Comment');
var Comment = require('../models/comment');
var Score = require('../models/score');
var router = express.Router();

router.get('/register', function(req, res){
	res.render('Register', {});
});

router.post('/register', function(req, res){
	Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account){
	// Account.register(new Account({ username: req.body.username , password: req.body.password }), function(err, account){
		if (err){
			console.log("Error in registration");
			console.log(err);
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
	res.redirect('Game')
});

router.get('/game', function(req, res){
	if (req.user){
		Score.find({ "username": req.user.username }, 
			function(err, score){
				// console.log(score[0]);
				res.render('Game', {user: req.user, score: score[0]});
			});
	}
	else {
		res.render('Game', {user: req.user});
	}
});

router.post('/game', function(req, res){
	if (req.user){
		Score.find({ "username": req.user.username },
			function(err, score){
				var s = score[0];
				if (s != undefined){
					var w = s.wins;
					var l = s.losses;
				}
				else{
					var w = 0;
					var l = 0;
				}
				var ww = +w + +req.body.wins;
				var ll = +l + +req.body.losses;
				// if (s == undefined){
				if (s != undefined){
					Score.remove({ "username": req.user.username }, function(err){
						console.log("removed");
						new Score({ username: req.user.username, wins: ww, losses: ll })
							.save(function(err, score){
								console.log("Username: " + req.user.username);
								console.log("Wins: " + ww);
								console.log("Losses: " + ll);
								res.redirect('Game');
						});
						// res.redirect('Game');
					});
					// console.log("removed");
					// res.redirect('Game');
				}
				else{
					new Score({ username: req.user.username, wins: ww, losses: ll })
						.save(function(err, score){
							
							console.log("Username: " + req.user.username);
							console.log("Wins: " + ww);
							console.log("Losses: " + ll);
							res.redirect('Game');
						});
				}
				// else{
				// 	console.log("Updating");
				// 	console.log("Wins: " + +w + +req.body.wins);
				// 	console.log("Losses: " + +l + +req.body.losses);
				// 	Score.update({ username: req.user.username }, {$set: {wins: +w + +req.body.wins, losses: +l + +req.body.losses}})
				// }
			});
		// new Score({ username: req.user.username, wins: req.body.wins, losses: req.body.losses })
		// 	.save(function(err, score){
		// 		res.redirect('Game');
		// 	})
	}
	else{
		console.log("No user");
	}
})

router.get('/rules', function(req, res){
	res.render('Rules', { user: req.user });
});

router.get('/theme', function(req, res){
	res.render('Theme', { user: req.user });
});

router.get('/comments', function(req, res){
	Comment.find(function(err, comments){
		console.log(comments);
		res.render(
			'Comments',
			{ comments: comments, user: req.user }
		);	
	});
	// res.render('Comments', { user: req.user });
});

router.post('/comments', function(req, res){
	new Comment({ comment: req.body.comment, username: req.user.username })
		.save(function(err, comment){
			console.log(comment);
			console.log(req.body.comment);
			console.log(req.user);
			res.redirect('Comments');
		});
	// console.log(req.body.comment);
	// res.redirect('Comments');
});

router.get('/scoreboard', function(req, res){
	Score.find(function(err, scores){
		res.render('Scoreboard', { scores: scores });
	});
});

router.get('/architecture', function(req, res){
	res.render('Architecture', { user: req.user });
});

module.exports = router;
