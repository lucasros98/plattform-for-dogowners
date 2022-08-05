import { useEffect, useState } from "react";
import axios from "axios"
import userEndpoints from "../../data/userEndpoints"

export default function NewPostModal({ visible, setVisible,updateDog}) {
    const [show, setShow] = useState(false)
    const [text,setText] = useState("")
    const [weight,setWeight] = useState("")
    const [activityTime,setActivity] = useState("")


    useEffect(() => {
        if (visible) setShow(true)
    }, [visible])

    function close() {
        setShow(false)
        setVisible(false)
    }

    function createPost(e) {
       e.preventDefault()

       const body = {
        text,
        weight,
        activityTime
       }

       axios.post(userEndpoints.dog+"/update",body,{ withCredentials: true }).then((res)=> {
        if(res.data.success) {
            close()
            updateDog(res.data.dog)
        }
       })
    }

    return (
        <>{show ? <div id="top-right-modal" className="backdrop flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative p-4 w-full max-w-md  md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " onClick={() => close()}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 ">Skapa en ny uppdatering</h3>
                        <form className="space-y-4" onSubmit={(e) => createPost(e)}>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-90">Text</label>
                                <textarea
                                rows="4"
                                name="text"
                                id="text"
                                value={text}
                                onChange={(e)=> setText(e.target.value)}
                                placeholder="Skriv något roligt om din hund"
                                className="w-full resize-none rounded-lg border border-[#e0e0e0] bg-gray-50 py-3 px-3 text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 ">Vikt</label>
                                <input type="number" name="weight" id="weight" placeholder="5 kg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="activityTime" className="block mb-2 text-sm font-medium text-gray-900 ">Aktivitet</label>
                                <input type="number" name="activityTime" id="activityTime" placeholder="23 min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " value={activityTime} onChange={(e) => setActivity(e.target.value)} />
                            </div>
                           
                           
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Publicera</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            : null}
        </>
    )
}

