/**
 * Forum post
 */

var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const postSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    body: {
        type: String,
        required:true
    },
    created: {
        type:Date,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
});


module.exports = mongoose.model('ForumPost', postSchema);

