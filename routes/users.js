var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
console.log('users rooot work fine');
console.log('test rooot work fine');

module.exports = router;
