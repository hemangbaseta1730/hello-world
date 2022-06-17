var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 //  app.get('/hello', (req, res) => {
//   res.send('hello word')
//   });

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Express' });
});


//router.get('/form', function(req, res, next) {
  //Form Name
  //res.render('form', { title: 'Express' });
 // });

  router.post('/formprocess', function(req, res, next) {
    //File Upload Code
    console.log(req.files.file123); //Print all File Information
    var myfile = req.files.file123; //File Object
    var myfilename = req.files.file123.name; //Get File Name
    //File Upload Code
    myfile.mv('public/upload/'+myfilename, function(err) {
    if (err)
    return res.status(500).send(err);
    //res.send('File uploaded!');
    });
    });
////////////////////////////////////////////
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});  




module.exports = router;
      