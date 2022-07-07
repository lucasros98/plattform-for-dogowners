import React, { useState, useEffect } from "react";
import QuizOption from "@/components/Quiz/QuizOption";

export default function QuizComponent ({quiz, mode}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    // if all questions are answered then submit quiz
    useEffect(() => {
      if (currentIndex === quiz.questions.length) submitQuiz();
    }, [currentIndex]);
  
    const handleOptionSelect = (optionIndex) => {
      var _answers = answers;
  
      _answers.push(optionIndex);
      if (quiz.questions[currentIndex].answer === optionIndex) setPoints(points + 1);
    
      setAnswers(_answers);
      setCurrentIndex(currentIndex + 1);
    };
  
    const submitQuiz = () => {
      setQuizCompleted(true);
    };

    if(!quiz || !quiz.questions ) return <></>;

    return (
        <div className="container">
          <h1 className={"text-4xl font-bold leading-normal mt-0 mb-4"}>Quiz: {quiz.title}</h1>
          {quizCompleted && (
            <div className={"quiz-completed"}>
              <h5>
                Du fick {points} /{" "}
                {quiz.questions.length} rätt{" "} 🎉
              </h5>
              <br />
              <div className={"bg-white w-100"}>
                {quiz.questions?.map((q, i) => {
                  return (
                    <div key={i} className={"answer"}>
                      {i + 1}. {q.text}{" "}
                      <div className="option-answer-wrap">
                        {quiz.questions[i]?.options.map((o, j) => {
                          return (
                            <div key={j} className={`option-answer ${answers[i] === j ? "chosen-answer" : ""}`}>
                              <div>{o}</div>
                              <div>
                                  {j === q.answer ? "✅" : ""}
                                  {answers[i] === j && j !== q.answer ? "❌" : ""}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="reset-btn" onClick={() => location.reload()}>Gör quizet igen ↻</button>
            </div>
          )}

          {!quizCompleted && (
            <div className={"bg-white w-100 p-4 rounded-xl"}>
              <div className={"text-xl font-medium leading-normal mb-5"}>
                {currentIndex + 1} / {quiz.questions.length}.{" "}
                {quiz.questions[currentIndex]?.text}
              </div>
              <div className={""}>
                {quiz.questions[currentIndex]?.options.map((o, i) => {
                  return (
                      <QuizOption i={i} handleOptionSelect={handleOptionSelect} o={o}/>
                  );
                })}
              </div>
            </div>
          )}
        </div>
    )
}