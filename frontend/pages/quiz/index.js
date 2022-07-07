import {useEffect,useState} from "react"
import axios from "axios"
import QuizCard from "@/components/Quiz/QuizCard"

export default function Quiz() {
    const [quizes,setQuizes] = useState([])

    useEffect(() => {
        getQuizes()
    },[])

    const getQuizes = async () => {
        let res = await axios.get("http://localhost:3000/quizzes")
        if(res.data) setQuizes(res.data)
    }


    return (<>
    <div className="bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto p-5">
            <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 ">Quiz</h1>
            <div>
                {quizes.map((quiz) => {
                    return <QuizCard id={quiz._id} key={quiz._id} title={quiz.title} description={quiz.description}/>
                })}
            </div>
        </div>
    </div>
    
    </>)
}