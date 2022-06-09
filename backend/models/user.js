var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema for running workouts
const userSchema = new Schema({
    name: String,
    created: Date,
    email: String,
    password: String,
    city: String,
});

const UserModel = mongoose.model('UserModel', userSchema, 'Users');

module.exports = {
    UserModel
}


