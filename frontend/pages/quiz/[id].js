import {useEffect,useState} from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import QuizComponent from "@/components/Quiz/QuizComponent"
import userEndpoints from "@/data/userEndpoints"

export default function Quiz() {
    const [quiz,setQuiz] = useState(null)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if(id) getQuiz()
    },[id])

    const getQuiz = async () => {
        let res = await axios.get(userEndpoints.quizzes+"/"+id,{ withCredentials: true })
        if(res.data) setQuiz(res.data)
    }


    return (<>
    <div className="bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto p-5">
            <div>
                {quiz && <QuizComponent quiz={quiz}/>}
            </div>
        </div>
    </div>
    
    </>)
}