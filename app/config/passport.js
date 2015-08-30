'use strict';

//#####################################################
//Dependencies:
//#####################################################
var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user.js');

//#####################################################
//Passport session setup:
//#####################################################
module.exports = function(passport) {

    passport.use(new LocalStrategy({
      usernameField: 'email'
    }, function(email, password, done) {
      //define how we match user credentials to db values
      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, new Error('This user does not exist!'));
        }

        user.verifyPassword(password).then(function(doesMatch) {
          if (doesMatch) {
              delete user.password; 
            return done(null, user);
          }
          else {
            done(null, false, new Error('Please verify your password and try again!)'));
          }
        });
      });
    }));

    passport.serializeUser(function(user, done) {
      done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
          delete user.password;
        done(err, user);
      });
    });

};