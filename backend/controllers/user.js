const User = require('../models/user');
const Dog = require('../models/dog');
const passport = require('passport')
const jwt = require('jsonwebtoken');
const {validateEmail} = require('../utils/validation')


exports.createUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).send("Missing email or password");

  }
  if (!validateEmail(email)) {
    return res.status(200).send("Invalid email");
  }
  try {
    const user = await User.create({ email, password });
    res.json({
      success: true,
      message: 'Signup successful',
      user: user
    });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
}

exports.loginUser = (req, res, next) => {
  console.log("login")
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).send("Missing email or password");
  }
  if (!validateEmail(email)) {
    return res.status(200).send("Invalid email");
  }

  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (err || !user) {
          console.log(err, user)
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

            //set cookie
            res.cookie('token', token, { maxAge: 4 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 4 hours
            console.log(token)
            return res.json({ token, user, success: true });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
}

exports.logoutUser = (req,res, next) => {
  const token = req.cookies.token;

  if(!token) return res.send({success:false,message:"Already logout"})

  res.clearCookie("token");
  return res.send({success:true,message:"Logout"})
}

exports.getUserInfo = async(req, res, next) => {
  const userId = req.user.user._id;

  try {
    const user = await User.findById(userId);
    const dog = await Dog.findOne({owner:userId}).sort({ "updates.date": "asc" })
    return res.send({user,dog})
  }
  catch(err) {
    res.status(500).send(err)
  }
}

exports.updateUser = async(req, res, next) => {
  const userId = req.user.user._id;

  const {username,city,bio} = req.body;

  const updateFields = {username,city,bio}

  try {
    const user = await User.findOneAndUpdate({_id:userId}, updateFields,{new: true});
    return res.send({user})
  }
  catch(err) {
    res.status(500).send(err)
  }
}