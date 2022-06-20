const { test, createUser, loginUser } = require('./controllers/user')
const passport = require('passport')

const express = require('express');
const router = express.Router();

/**  These routes need no auth */
router.post('/signup', passport.authenticate('signup', { session: false }),createUser);
router.post('/login', loginUser);

router.get('/user',passport.authenticate('jwt', { session: false }),test)


module.exports = router;