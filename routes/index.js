var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://nshtech:Hufflepuff7@ds161029.mlab.com:61029/heroku_g6z2gmwv';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DesignWorks :: Specs Form' });
});

router.get('/flyerposter', function(req, res){
  res.render('flyerposter', { title: 'Specs :: Flyer/Poster' });
});

router.get('/website', function(req, res){
  res.render('website', { title: 'Specs :: Website' });
});

router.get('/socialmedia', function(req, res){
  res.render('socialmedia', { title: 'Specs :: Social Media' });
});

router.get('/logo', function(req, res){
  res.render('logo', { title: 'Specs :: Logo' });
});

router.get('/brochure', function(req, res){
  res.render('brochure', { title: 'Specs :: Brochure' });
});

router.get('/apparel', function(req, res){
  res.render('apparel', { title: 'Specs :: Apparel' });
});

router.get('/other', function(req, res){
  res.render('other', { title: 'Specs :: Other Design' });
});

router.get('/success', function(req, res){
  res.render('success', { title: 'DesignWorks :: Success!' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST to mongoDB */
router.post('/insert', function(req, res, next) {
  var item = {
    "foo": req.body.title,
  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('mynewcollection').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

module.exports = router;
