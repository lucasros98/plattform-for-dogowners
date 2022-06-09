var mongoose = require('mongoose');

//Define schemas
var Schema = mongoose.Schema;

//Schema for running workouts
const quizSchema = new Schema({
    title: String,
    description: String,
    questions: Array 
});

const UserModel = mongoose.model('QuizModel', quizSchema, 'Quizes');

module.exports = {
    QuizModel
}


