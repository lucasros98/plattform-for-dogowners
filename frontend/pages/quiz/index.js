import {useEffect,useState} from "react"
import axios from "axios"
import QuizCard from "@/components/Quiz/QuizCard"
import userEndpoints from "@/data/userEndpoints"



export default function Quiz() {
    const [quizes,setQuizes] = useState([])

    useEffect(() => {
        getQuizes()
    },[])

    const getQuizes = async () => {
        let res = await axios.get(userEndpoints.quizzesURL)
        if(res.data) setQuizes(res.data)
    }


    return (<>
            <div className="bg-white border-y border-gray-100 shadow-md">
        <div className="container mx-auto px-5 py-6">
        <div className="flex">
            <h1 className="text-xl text-gray-800 font-bold leading-normal my-auto ">Quiz - <span className="font-medium  italic">Lär dig mer om hundar</span></h1>
        </div>
        </div>
        </div>
    <div className="bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto p-5 pt-8">
            <div>
                {quizes.map((quiz) => {
                    return <QuizCard id={quiz._id} key={quiz._id} title={quiz.title} description={quiz.description}/>
                })}
            </div>
        </div>
    </div>
    
    </>)
}