'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var q = require('q');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pictures: [{
        type: String
    }]
});

module.exports = mongoose.model('User', userSchema);
