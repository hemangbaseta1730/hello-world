var express = require('express');
var router = express.Router();
// db connection
  
  
// db connection end
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
