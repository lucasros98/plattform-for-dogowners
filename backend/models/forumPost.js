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
        required:true,
        default: Date.now
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
            ref: 'ForumComment',
        }
    ],
    edited: {
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('ForumPost', postSchema);

