const Quiz = require('../models/quiz');
const User = require('../models/user');

exports.getQuizes = async (req, res, next) => {
    Quiz.find({},'-questions.correctAnswerIndex', (err, quizzes) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send( quizzes );
        }
    });
};

exports.getQuiz = async (req, res, next) => {
    const id = req.params.id;

    Quiz.findById(id, (err, quiz) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send( quiz );
        }
    });
};

exports.submitResults = async (req, res, next) => {
    const id = req.params.id;
    res.send("Not done")
};

