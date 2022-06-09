//requests
const {insert,removeById} = require('../model/mongo')
const {GymModel,OneRepMax} = require('../model/schemas')
const mongoose = require('mongoose');


exports.insertGymWorkout = (req,res) => {
    const workout = req.body.workout;
    if (!workout) {
        res.json({"success":false, "message":"Workout is null"});
    }
    else {
        insert(workout,GymModel)
        .then(res.send({"success":true, "message":"Workout has been added to database"}))
    }
}
//does not work
exports.removeGymWorkoutById = (req,res) => {
    const id = req.body.id;
    if (!id) {
        res.json({"success":false, "message":"id is null"});
    }
    else {
        removeById({"_id":mongoose.Types.ObjectId(id)},GymModel)
        .then(res.send({"success":true, "message":"Workout has been removed from database"}))
    }
}

exports.insertOneRepMax = (req,res) => {
    const oneRM = req.body.OneRM
    if (!oneRM) {
        res.json({"success":false, "message":"Workout is null"});
    }
    else {
        insert(oneRM,OneRepMax)
        .then(res.send({"success":true, "message":"Workout has been added to database"}))
    }
}