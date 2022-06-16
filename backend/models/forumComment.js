var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    meta: {
        votes: Number,
        favs:  Number
    },
    hidden: {
        type: Boolean,
        default:false
    }
});


module.exports = mongoose.model('ForumComment', commentSchema);

