const { createUser, loginUser,getUserInfo,logoutUser,updateUser} = require('./backend/controllers/user')
const { createDog,getDogsByOwner,createNewUpdate,removeDogUpdate} = require('./backend/controllers/dog')
const { getImage,uploadProfileImage} = require('./backend/controllers/image')
const { getQuizes,getQuiz} = require('./backend/controllers/quiz')
const verifyAuth = require('./backend/authentication/auth')
const upload = require('./backend/utils/upload')
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

//IMAGE
router.get('/image/:id',verifyAuth, getImage);
router.post('/image/uploadProfile',verifyAuth, upload.single('image'), uploadProfileImage);

//QUIZES
router.get('/quizzes', getQuizes); //NO AUTH
router.get('/quizzes/:id', getQuiz); //NO AUTH


//Next pages with auth
router.get('/profile',verifyAuth, (req,res,next) => next());
router.get('/ny-hund',verifyAuth, (req,res,next) => next());
router.get('/settings',verifyAuth, (req,res,next) => next());


module.exports = router;