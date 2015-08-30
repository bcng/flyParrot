'use strict';

var User = require('../models/user.js');

var create = function(req, res) {
    User.findOne({
            email: req.body.email
        })
        .exec(function(err, user) {
            //If we found a user, it's a duplicate:
            if (user) {
                return res.status(400).json({
                    message: 'User with this email already exists!'
                });
            }
            //If the user's password is too short
            if (req.body.password.length <= 5) {
                return res.status(400).json({
                    message: 'Your password must be longer than five characters!'
                });
            }
            //Otherwise, create user
            User.create(req.body, function(err, newUser) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(newUser);
                }
            });
        });
};

var login = function(req, res) {
    res.status(200).json(req.user);
};

var loggedin = function(req, res) {
    res.json(req.isAuthenticated() ? req.user : '0');
};

var logout = function(req, res) {
    req.logOut();
    res.redirect('/');
};

var read = function(req, res) {
    User.find()
        .populate('products')
        .exec(function(err, users) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(users);
            }
        });
};

var update = function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

var remove = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

module.exports = {
    create: create,
    login: login,
    loggedin: loggedin,
    logout: logout,
    read: read,
    update: update,
    remove: remove
};
