var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/test/hello', function(req, res, next) {
  res.send({
    msgFromBack: 'HelloWorld From Backend!!'
  });
});

module.exports = router;
