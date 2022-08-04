import React from "react";

export default function TakenQuiz({ title, score, completed }) {

  return (
    <div className="block p-3 w-full bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
      <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-sm text-gray-700 mb-1"><b>Genomfört</b>: {completed} gånger</p>
      <p className="font-normal text-sm text-gray-700 "><b>Bästa resultatet</b>: {score} poäng</p>
    </div>
  );
}
