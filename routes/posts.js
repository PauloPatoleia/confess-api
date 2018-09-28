var express = require('express');
var router = express.Router()
var db = require("../models");
var cors = require("cors")



router.get('/', function(req, res){
    db.Post.find()
        .then(function(posts) {
            res.json(posts)
        })
        .catch(function(err) {
            res.send(err);
        })
})

router.post('/', function(req, res) {
    
    db.Post.create(req.body)
        .then(function(post) {
            res.status(201).send(post)
        })
        .catch(function(err) {
            res.send(err);
        })
});

router.get('/:id', function(req, res){
    db.Post.findById(req.params.id)
        .then(function(foundTodo) {
            res.json(foundTodo)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.put('/:id', function(req, res){
    db.Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(function(todo) {
            res.json(todo)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.delete('/:id', function(req, res){
    db.Post.remove({_id: req.params.id})
        .then(function() {
            res.json({message: 'That shit is gone'})
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = router