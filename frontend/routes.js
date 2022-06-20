const { test, createUser, loginUser } = require('./backend/controllers/user')
const passport = require('passport')
const verifyAuth = require('./backend/authentication/auth')
const express = require('express');
const router = express.Router();


/**  These routes need no auth */
router.post('/signup', passport.authenticate('signup', { session: false }),createUser);
router.post('/login', loginUser);


router.get('/test',verifyAuth,test)


module.exports = router;