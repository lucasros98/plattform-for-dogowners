//requests
const {insert,remove} = require('../model/mongo')
const {RunningModel} = require('../model/schemas')

exports.insertRunningWorkout = (req,res) => {
    const workout = req.body.workout;
    if (!workout) {
        res.json({"success":false, "message":"Workout is null"});
    }
    else {
        insert(workout,RunningModel)
        .then(res.send({"success":true, "message":"Workout has been added to database"}))
    }
}
//does not work
exports.removeRunningWorkout = (req,res) => {
    const id = req.body.id;
    if (!id) {
        res.json({"success":false, "message":"id is null"});
    }
    else {
        remove({"_id":ObjectId(id)},GymModel)
        .then(res.send({"success":true, "message":"Workout has been removed from database"}))
    }
}
