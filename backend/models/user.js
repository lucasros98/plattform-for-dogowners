var mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true
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
        default: Date.now
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

userSchema.plugin(passportLocalMongoose);

//hash password
userSchema.pre('save', function(next) {
    console.log(this)
    // do stuff
    next();
});

module.exports = mongoose.model('User', userSchema);
