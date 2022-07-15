var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const userSchema = new Schema({
    username: {
        type: String,
        unique:true
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
    profileImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
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
        bestScore: {
            type:Number
        },
        timesTaken: {
            type:Number
        }
    }]
});


//hash password
userSchema.pre('save', async function(next) {
    console.log("pre safe")
    const user = this;
    const salt = await bcrypt.genSalt(10)
    user.salt = salt;

    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();   
});

userSchema.methods.isValidPassword = async function(password) {
    console.log("checking passwords")
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}



module.exports = mongoose.model('User', userSchema);
