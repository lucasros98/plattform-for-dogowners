const Quiz = require('../models/quiz');
const User = require('../models/user');

exports.getQuizes = async (req, res, next) => {
    Quiz.find({}, (err, quizzes) => {
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

exports.checkQuizScore = async (req, res, next) => {
    const id = req.params.id;
    const answers = req.body.answers;

    if(!id || !answers) return res.send({success:false,message:"Missing parameters"})

    Quiz.findById(id, (err, quiz) => {
        if (err) {
            console.log(err);
            res.status(500).send({success:false,message:'An error occurred',error:err});
        }
        else {
            const questions = quiz.questions
            let correctAns = 0;
            
            if(answers instanceof Array && ! questions.length === answers.length) res.send({success:false,message:"Answers length don't match"})
            
            questions.forEach((_q,index) => {
                if(q_.correctAnswerIndex === answers[index]) correctAns++;
            })

            return res.send({success:true,correctAnswers:correctAns})
        }
    });
};

exports.submitQuiz = async (req, res, next) => {
    const id = req.params.id;
    const userId = req.user.user._id;
    const points = req.body.points;

    if(!id || points === null) return res.send({success:false,message:"Missing parameters"})

    const quizTaken = {quiz:id,points:points}

    try {
        const user = await User.findOneAndUpdate({_id:userId}, { $addToSet: { quizTaken: quizTaken } },{new: true});
        return res.send({success:true,user:user})
      }
      catch(err) {
        res.status(500).send(err)
    }
};
