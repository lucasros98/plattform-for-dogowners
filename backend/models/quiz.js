var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema
const quizSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    questions: [{
        type: String
    }],
    alternatives: [{
        type: String
    }],
    answers: [{
        type: String
    }],
});


module.exports = mongoose.model('Quiz', quizSchema);

