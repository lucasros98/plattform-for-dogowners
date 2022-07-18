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
            ref: 'Comment',
        }
    ],
    edited: {
        type:Boolean,
        default:false
    }
});

postSchema.pre('remove', function(callback) {
    // Remove all the comments here
   // this.model('comments').remove({ _id: this._id }, callback);
});


module.exports = mongoose.model('ForumPost', postSchema);

