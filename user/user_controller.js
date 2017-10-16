// user_controller.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var user = require('./user');


//Creates a new user
router.post('/', function(req, res) {

    user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    function (err, user) {
        if (err) return res.status(500).send("There was an error adding the information to the database.");
        res.status(200).send(user);
    });
});

// Returns all users in a database
router.get('/', function(req, res){
    user.find({}, function(err, users){
        if(err) return res.status(500).send("There was an error finding the users");
        res.status(200).send(users);
    });
});

// Gets a single user from the database
router.get('/:id', function(req, res){
    user.findById(req.params.id, function (err, user){
        if (err) res.status(500).send("There was a problem finding the user");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// Deletes a single user from the database
router.delete('/:id', function(req, res){
    user.findByIdAndRemove(req.params.id, function (err, user){
        if (err) res.status(500).send("There was a problem deleting the user");
        if (!user) return res.status(404).send("No user was found.");
        res.status(200).send("User " + user.name + " was deleted successfully.");
    });
});

// Creates a sigle user in the databse
router.put('/:id', function(req, res){  
    user.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
        if (err) res.status(500).send("There was an error adding the user to the databse.");
        res.status(200).send(user); 
    });
});
module.exports = router;