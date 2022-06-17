const passport = require('passport')
const bcrypt = require('bcrypt')
import User from '../models/user'
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
 (username, password, done) => {
    User.find(username, (err, user) => {
      if (err) {
        return done(err)
      }

      // User not found
      if (!user) {
        return done(null, false)
      }

      // Always use hashed passwords and fixed time comparison
      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err)
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }
))