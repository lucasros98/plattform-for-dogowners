import {useEffect,useState} from "react"
import axios from "axios"
import QuizComponent from "@/components/Quiz/QuizComponent"

export default function Quiz({id}) {
    const [quiz,setQuiz] = useState([])

    useEffect(() => {
        getQuiz()
    },[])

    const getQuiz = async () => {
        let res = await axios.get("http://localhost:3000/quiz/"+id)
        if(res.data) setQuiz(res.data)
    }


    return (<>
    <div className="bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto p-5">
            <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 ">Quiz</h1>
            <div>
                <QuizComponent quiz={quiz}/>

            </div>
        </div>
    </div>
    
    </>)
}