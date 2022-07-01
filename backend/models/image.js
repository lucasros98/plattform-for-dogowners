
var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    name: String,
    desc: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Image', imageSchema);