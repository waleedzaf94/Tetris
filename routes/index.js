var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('One', {});
})

router.get('/One.html', function(req, res){
	res.render('One', {});
})

router.get('/Two.html', function(req, res){
	res.render('Two', {});
})

router.get('/Three.html', function(req, res){
	res.render('Three', {});
})

module.exports = router;
