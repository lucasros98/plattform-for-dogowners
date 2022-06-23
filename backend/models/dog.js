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
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    updates: [
        {
            date: {
                type: Date,
            },
            text: {
                type:String
            },
            weight: {
                type:Number 
            }
        }
    ]
});

module.exports = mongoose.model('Dog', dogSchema);
