import React, {useState, useEffect} from "react";
import "./Quiz.scss";

export default function QuizOption({ i, o, handleOptionSelect }) {
  const [animate, setAnimate] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    setAnimate(true);
    changeValue();
  }, [o])
  
  useEffect(() => {
      if(animate) sleep();
  }, [animate])

  async function sleep() {
    await new Promise(r => setTimeout(r, 700));
    setAnimate(false)
  }

  async function changeValue() {
    await new Promise(r => setTimeout(r, 80));
    setValue(o)
  }

  return (
    <div key={i} onTouchStart={() => {return null}} className={`option ${animate && "option-animate"}`} onClick={() => handleOptionSelect(i)}>
      {value}
    </div>
  );
}
