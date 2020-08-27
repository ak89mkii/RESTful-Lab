const Hero = require('../../models/hero');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

function index(req, res) {
    Hero.find({})
    .then(function(hero) {
        res.status(200).json(hero)
    })
}

function show(req, res) {
    Hero.findById(req.params.id)
    .then(function(hero) {
        res.status(200).json(hero)
    })
}

function create(req, res) {
    Hero.create(req.body)
    .then(function(hero) {
        res.status(201).json(hero)
    })
}

function deleteOne(req, res) {
    Hero.findByIdAndRemove(req.params.id)
    .then(function(hero) {
        res.status(200).json(hero)
    })
}

function update(req, res) {
    hero.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(hero){
        res.status(200).json(hero)
    })
}