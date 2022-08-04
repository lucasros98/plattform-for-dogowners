import React from "react";
import Link from "@/components/Link"

export default function QuizCard({ id, title, description }) {

  return (
    <Link href={"/quiz/" + id} className="mb-6 block p-4 w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
      <p className="font-normal text-gray-700 ">{description}</p>
      <button type="button" className="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Gör Quizet →</button>
    </Link>
  );
}
