import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import QuizOption from "@/components/Quiz/QuizOption";
import "./Quiz.module.scss"
import endpoints from "../../data/userEndpoints"


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
      if (quiz.questions[currentIndex].correctAnswerIndex === optionIndex) setPoints(points + 1);
    
      setAnswers(_answers);
      setCurrentIndex(currentIndex + 1);
    };
  
    const submitQuiz = () => {
      setQuizCompleted(true);
      const body = {points}
      axios.post(endpoints.quiz+"/submit/"+quiz._id,body,{ withCredentials: true }).then((res) => {
        console.log("Quiz submitted")
      })
    };

    if(!quiz || !quiz.questions ) return <></>;

    return (
        <div className="container">
          <h1 className={"text-4xl font-bold leading-normal mt-0 mb-4"}>Quiz: {quiz.title}</h1>
          {quizCompleted && (
            <div className={"bg-white w-100 p-4 rounded-xl border border-gray-100 shadow-sm"}>
              <h5 className="font-bold"> 
                Du fick {points} /{" "}
                {quiz.questions.length} rätt{" "} 🎉
              </h5>
              <br />
              <div className={""}>
                {quiz.questions?.map((q, i) => {
                  return (
                    <div key={i} className={"p-3 bg-gray-50 shadow-sm mb-4 rounded-lg border border-gray-100"}>
                      <h5 className="italic">{i + 1}. {q.text}{" "}</h5>
                      <div className="option-answer-wrap my-4">
                        {quiz.questions[i]?.options.map((o, j) => {
                          return (
                            <div key={j} className={`bg-white p-2 my-3 rounded-lg border border-gray-200 shadow-sm flex ${answers[i] === j ? "bg-orange-300" : ""}`}>
                              <div>{o}</div>
                              <div className="ml-auto">
                                  {j === q.correctAnswerIndex ? "✅" : ""}
                                  {answers[i] === j && j !== q.correctAnswerIndex ? "❌" : ""}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button type="button" onClick={() => location.reload()} className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-sm px-5 py-2.5 mt-5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900">Gör quizet igen ↻</button>
              <Link href={"/quiz"}><button className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-sm px-5 py-2.5 mt-5 mb-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Visa andra quiz</button></Link>
            </div>
          )}

          {!quizCompleted && (
            <div className={"bg-white w-100 p-4 rounded-xl  border border-gray-100 shadow-sm"}>
              <div className={"text-xl font-medium leading-normal mb-5"}>
                {currentIndex + 1} / {quiz.questions.length}.{" "}
                {quiz.questions[currentIndex]?.text}
              </div>
              <div className={""}>
                {quiz.questions[currentIndex]?.options.map((o, i) => {
                  return (
                      <QuizOption key={i+"indexw"} i={i} handleOptionSelect={handleOptionSelect} o={o}/>
                  );
                })}
              </div>
            </div>
          )}
        </div>
    )
}