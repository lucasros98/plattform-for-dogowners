const {insertGymWorkout,removeGymWorkoutById,insertOneRepMax} = require('./controllers/gymworkout')
const {insertRunningWorkout} = require('./controllers/runningworkout')

const express = require('express');
const router = express.Router();


//Gym workouts
router.post('/insertGymWorkout', insertGymWorkout);
router.post('/removeGymWorkoutById', removeGymWorkoutById);
router.post('/insertOneRepMax',insertOneRepMax)

//Running workouts
router.post('/insertRunningWorkout', insertRunningWorkout);


module.exports = router;