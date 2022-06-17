const User = require('../models/user');
const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

//does not work
exports.createUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        const user = await User.create({
            email, password
        })

        return res.send(user)
    }
    else {
        return res.send("res")
    }
}


exports.loginUser = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                return res.redirect('/login?info=' + info);
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                return res.redirect('/');
            });

        })
        (req, res, next);
};

exports.loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    res.send("not finished")
}

exports.getUser = (req, res) => {

    res.send("not finished")
}

function auth(email,password) {
    passport.use(new LocalStrategy(
        (email, password, done) => {
           User.findUser(email, (err, user) => {
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
}