import React from "react";

export default function TakenQuiz({ title, score, completed }) {

  return (
    <div className="block p-3 w-full bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-gray-700 "><b>Gjort</b>: {completed} gånger, <b>Bästa resultatet</b>: {score} poäng</p>
    </div>
  );
}
