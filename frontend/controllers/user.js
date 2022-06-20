const User = require('../models/user');
const passport = require('passport')
const jwt = require('jsonwebtoken');

//does not work
exports.createUser = async (req, res, next) => {
  res.json({
    success: true,
    message: 'Signup successful',
    user: req.user
  });
}

exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("Missing email or password");
    return;
  }

  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (err || !user) {
          console.log(err,user)
          const error = new Error('An error occurred.');

          return next(error);
        }

        req.login(
          user,
          { session: false },
          async (error) => {
            if (error) return next(error);
            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, process.env.JWT_TOP_SECRET);

            return res.json({ token, user, success: true, });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
}
 
//test route auth
exports.test = async (req, res, next) => {
  res.json({
    message: 'successful'
  });
}

