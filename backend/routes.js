const {createUser,loginUser,getUser} = require('./controllers/user')


const express = require('express');
const router = express.Router();

/**  These routes need no auth */
router.post('/user/create', createUser);
router.post('/user/login', loginUser);
router.get('/user', getUser);


/**  These routes need auth */


module.exports = router;