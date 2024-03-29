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
    let user = this;

    //Hashing password
    const salt = await bcrypt.genSalt(10)
    user.salt = salt;

    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    //setting basic username
    if(!user.username) user.username = user.email.substr(0, user.email.indexOf('@')); 

    next();   
});

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    
   // const hash = await bcrypt.hash(password,user.salt)

    const compare = await bcrypt.compare(password, user.password);
    return compare;
}



module.exports = mongoose.model('User', userSchema);
