const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email: email });
                if (!user) return done(null, false);
                const isMatch = await user.isValidPassword(password);
                if (!isMatch)
                    return done(null, false);
                // if passwords match return user
                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        }
    )
);




module.exports = passport;