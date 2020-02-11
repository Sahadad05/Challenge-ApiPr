const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const Driver = mongoose.model('drivers')


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) => {
  new Driver({ googleId: profile.id }).save();
  console.log('access token', accessToken);
  console.log('refresh token', refreshToken);
  console.log('profile', profile);
}));