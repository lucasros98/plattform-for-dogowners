var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    salt: {
        type: String
    },
    created:  {
        type: Date,
    },
    lastLogin:  {
        type: Date,
    },
    city: {
        type: String
    },
    dog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dog'
    },
    bio: {
        type: String
    },
    quizTaken: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz' 
    }]
});

module.exports = mongoose.model('User', userSchema);
