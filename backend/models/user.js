var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    created: {
        type: Date,
    },
    lastLogin: {
        type: Date,
    },
    city: {
        type: String
    },
    bio: {
        type: String
    },
    quizTaken: [{
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        },
        score: {
            type:Number
        }
    }]
});

userSchema.pre('save', function(next) {
    // do stuff
    next();
});

module.exports = mongoose.model('User', userSchema);
