const Quiz = require('../models/quiz');
const quizzes = require('../data/quizzes')

exports.quizData = async() => {

    const _q = await Quiz.find({})
    if(!_q || _q.length == 0) {
        quizzes.forEach(async(quiz) => {
           const res = await Quiz.create(quiz)
           if(res) console.log("New quiz created")
        })
    }
    else {
        console.log("Quizzes has already been added to DB")
    }
}

