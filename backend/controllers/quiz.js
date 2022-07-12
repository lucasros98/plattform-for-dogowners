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

    User.findById(userId).then(async function(user) {
        if(user.quizTaken && user.quizTaken.length > 0) {
            console.log("in if")
            for(let i=0; i<user.quizTaken.length; i++) {
                console.log(user.quizTaken[i])
                if(user.quizTaken[i].quiz.equals(id)) {
                    console.log("equals")
                    try {
                        user.quizTaken[i].timesTaken = user.quizTaken[i].timesTaken + 1;
                        if(user.quizTaken[i].bestScore < points) user.quizTaken[i].bestScore = points;
                        user.save()
                        
                        return res.send({success:true,user:user})
                      }
                      catch(err) {
                        return res.status(500).send(err)
                    }
                }
            } 
        }
        const quizTaken = {quiz:id,bestScore:points,timesTaken:1}

        const _user = await User.findOneAndUpdate({_id:userId}, { $addToSet: { quizTaken: quizTaken } },{new: true});
        return res.send({success:true,user:_user})
        
        //sent respnse to client
      }).catch(err => {
        console.log(err)
        console.log('Oh! Dark')
      })
};
