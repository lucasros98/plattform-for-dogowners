import React, {useState, useEffect} from "react";
import "@/components/Quiz/Quiz.module.scss";


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
    <div key={i} onTouchStart={() => {return null}} className={`p-3 bg-gray-50 shadow-sm mb-2 hover:cursor-pointer hover:bg-emerald-300 rounded-lg ${animate && "option-animate"}`} onClick={() => handleOptionSelect(i)}>
      {value}
    </div>
  );
}
