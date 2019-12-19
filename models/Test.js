var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = require('../models/Test.js');

/*

var TestSchema = new mongoose.Schema({
    importance: String,
    milestone: Double,
    description: String
  });

*/

/* GET ALL */
router.get('/', function(req, res, next) {
  Test.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Test BY ID */
router.get('/:id', function(req, res, next) {
  Test.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Test */
router.post('/', function(req, res, next) {
  Test.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Test */
router.put('/:id', function(req, res, next) {
  Test.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Test */
router.delete('/:id', function(req, res, next) {
  Test.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

