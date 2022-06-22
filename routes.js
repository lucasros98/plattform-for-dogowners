const { createUser, loginUser,getUser,logoutUser} = require('./backend/controllers/user')
const passport = require('passport')
const verifyAuth = require('./backend/authentication/auth')
const express = require('express');
const router = express.Router();


/**  These routes need no auth */
router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


router.get('/getUser',verifyAuth, getUser);

//Next pages with auth
router.get('/profile',verifyAuth, (req,res,next) => next());


module.exports = router;