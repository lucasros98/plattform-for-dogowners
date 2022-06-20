const { test, createUser, loginUser } = require('./controllers/user')
const passport = require('passport')

const express = require('express');
const router = express.Router();

/**  These routes need no auth */
router.post('/signup', passport.authenticate('signup', { session: false }),createUser);
router.post('/login', loginUser);


router.use('/', passport.authenticate('jwt', { session: false }));
/** Routes below require auth */

router.get('/user',test)


module.exports = router;