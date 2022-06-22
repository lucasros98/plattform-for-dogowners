var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const dogSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    breed: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    birth: {
        type: String
    },
    weight: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updates: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            text: {
                type:String,
                required:true
            },
            weight: {
                type:Number 
            }
        }
    ]
});

module.exports = mongoose.model('Dog', dogSchema);
