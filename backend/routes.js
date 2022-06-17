const {createUser,loginUser,getUser} = require('./controllers/user')
const {isAuthenticated} = require('./authentication/middleware')


const express = require('express');
const router = express.Router();

/**  These routes need no auth */

router.post('/user/create', createUser);

router.post('/user/login', loginUser);

router.get('/user', getUser);


/**  These routes need auth */
router.use(isAuthenticated)


module.exports = router;