import React from "react";
import Link from "@/components/Link"

export default function QuizCard({id,title,description}) {

  return (
    <Link href={"/quiz/"+id} className="linkCard">
      <div className="blogCard">
        <div className="blogCardTextSection">
          <h4>{title}</h4>
          <p>{description}</p>
          <button className="btnStyle">Testa Quizet →</button>
        </div>
      </div>
    </Link>
  );
}
