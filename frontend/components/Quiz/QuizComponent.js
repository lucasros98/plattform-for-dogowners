import React, { useState, useEffect } from "react";
import "@/components/Quiz/Quiz.scss";
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

    return (
        <div className="quiz-wrapper">
          <h1 className={"quiz-title"}>Quiz: {quiz.title}</h1>
          {quizCompleted && (
            <div className={"quiz-completed"}>
              <h5>
                Du fick {points} /{" "}
                {quiz.questions.length} rätt{" "} 🎉
              </h5>
              <br />
              <div className={"answers"}>
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
            <div className={"question"}>
              <div className={"question-text"}>
                {currentIndex + 1} / {quiz.questions.length}.{" "}
                {quiz.questions[currentIndex]?.text}
              </div>
              <div className={"options"}>
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