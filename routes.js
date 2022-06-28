const { createUser, loginUser,getUserInfo,logoutUser,updateUser} = require('./backend/controllers/user')
const { createDog,getDogsByOwner,createNewUpdate,removeDogUpdate} = require('./backend/controllers/dog')

const verifyAuth = require('./backend/authentication/auth')
const express = require('express');
const router = express.Router();


/**  These routes need no auth */
router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

//USER
router.get('/user',verifyAuth, getUserInfo);
router.put('/user',verifyAuth, updateUser);

//DOG
router.get('/dog',verifyAuth, getDogsByOwner);
router.post('/dog/create',verifyAuth, createDog);
router.post('/dog/update',verifyAuth, createNewUpdate);
router.delete('/dog/update/:updateId',verifyAuth, removeDogUpdate);



//Next pages with auth
router.get('/profile',verifyAuth, (req,res,next) => next());
router.get('/ny-hund',verifyAuth, (req,res,next) => next());


module.exports = router;