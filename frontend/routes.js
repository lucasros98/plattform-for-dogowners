const { test, createUser, loginUser,getUser } = require('./backend/controllers/user')
const passport = require('passport')
const verifyAuth = require('./backend/authentication/auth')
const express = require('express');
const router = express.Router();


/**  These routes need no auth */
router.post('/signup', createUser);
router.post('/login', loginUser);


router.get('/getUser',verifyAuth, getUser);



router.get('/test',verifyAuth,test)


module.exports = router;