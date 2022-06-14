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
    birth: {
        type: String
    },
    created: {
        type: String
    },
});

module.exports = mongoose.model('Dog', dogSchema);
