var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema for running workouts
const runningSchema = new Schema({
    name: String,
    date: Date,
    weather: String,
    distance: Number,
    time: Number,
    averagePace: Number
});

//Schema for gym workouts
const gymSchema = new Schema ({
    name:String,
    date: Date,
    bodyParts:String,
    time:Number
});

//Schema for user/person
const userSchema = new Schema({
    weight:Number,
    length:Number,
    date:Date,
    bicepsMeasurement:Number,
    waistMeasurement:Number,
    thighMeasurement:Number
});

//Schema for one rep max's
const oneRepMax = new Schema({
    benchPress:Number,
    squats:Number,
    deadlift:Number,
    militaryPress:Number,
    bicepsCurls:Number,
    date:Date
})

const RunningModel = mongoose.model('RunningModel', runningSchema, 'RunningWorkouts');
const GymModel = mongoose.model('GymModel', gymSchema, 'GymWorkouts');
const UserModel = mongoose.model('UserModel', userSchema, 'User');
const OneRepMax = mongoose.model('OneRepMax', oneRepMax, 'OneRepMax');

module.exports = {
    RunningModel,
    GymModel,
    UserModel,
    OneRepMax
}
