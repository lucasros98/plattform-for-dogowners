const { createUser, loginUser,getUserInfo,logoutUser,updateUser} = require('./backend/controllers/user')
const { createDog,getDogsByOwner,createNewUpdate,removeDogUpdate,getDogBreeds,getDogMotion,editDog} = require('./backend/controllers/dog')
const { getPosts, getSpecificPost,createPost,addComment } = require('./backend/controllers/forum')

const { getImage,uploadProfileImage} = require('./backend/controllers/image')
const { getQuizes,getQuiz,checkQuizScore,submitQuiz} = require('./backend/controllers/quiz')
const verifyAuth = require('./backend/authentication/auth')
const upload = require('./backend/utils/upload')
const express = require('express');
const router = express.Router();


/**  These routes need no auth */
router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

//USER
router.get('/user',verifyAuth, getUserInfo);
router.put('/user',verifyAuth, updateUser);

//DOG
router.get('/dog',verifyAuth, getDogsByOwner);
router.post('/dog/create',verifyAuth, createDog);
router.post('/dog/edit/:id',verifyAuth, editDog);

//DOG UPDATES
router.post('/dog/update',verifyAuth, createNewUpdate);
router.delete('/dog/update/:updateId',verifyAuth, removeDogUpdate);

//DOG DATA
router.get('/dog/data/breeds', getDogBreeds);
router.get('/dog/data/motion', getDogMotion);

//IMAGE
router.get('/image/:id',verifyAuth, getImage);
router.post('/image/uploadProfile',verifyAuth, upload.single('image'), uploadProfileImage);

//QUIZES
router.get('/quizzes', getQuizes); //NO AUTH
router.get('/quizzes/:id', getQuiz); //NO AUTH
router.post('/quiz/score/:id', checkQuizScore); //NO AUTH
router.post('/quiz/submit/:id',verifyAuth, submitQuiz);

//FORUM
router.get('/posts', getPosts); //NO AUTH
router.get('/post/:id', getSpecificPost); //NO AUTH
router.post('/post',verifyAuth, createPost);
router.post('/comment/:id',verifyAuth, addComment);


//Next pages with auth
router.get('/profile',verifyAuth, (req,res,next) => next());
router.get('/stats',verifyAuth, (req,res,next) => next());
router.get('/ny-hund',verifyAuth, (req,res,next) => next());
router.get('/dog/edit',verifyAuth, (req,res,next) => next());
router.get('/settings',verifyAuth, (req,res,next) => next());


module.exports = router;