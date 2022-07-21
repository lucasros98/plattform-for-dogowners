import { useEffect, useState } from "react";
import axios from "axios"
import Swal from 'sweetalert2'

export default function CommentModal({ visible, setVisible, updatePost,id}) {
    const [show, setShow] = useState(false)
    const [text,setText] = useState("")


    useEffect(() => {
        if (visible) setShow(true)
    }, [visible])

    function close() {
        setShow(false)
        setVisible(false)
    }

    function publishComment(e) {
        e.preventDefault()

        const bodyData = {body:text}

        axios.post("/comment/"+id,bodyData).then((res)=> {
            if(res.data.success) {
                close()
            }
            else {
              throw Error("error")
            }
          }).catch((err) => {
              Swal.fire({
                  title: 'Misslyckades!',
                  text: 'Det gick inte att skapa kommentaren.',
                  icon: 'error',
                  confirmButtonText: 'Stäng'
              })
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
                        <h3 className="mb-4 text-xl font-medium text-gray-900 ">Skapa kommentar</h3>
                        <form className="space-y-4" onSubmit={(e) => publishComment(e)}>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-90">Text</label>
                                <textarea
                                rows="4"
                                name="text"
                                id="text"
                                value={text}
                                onChange={(e)=> setText(e.target.value)}
                                placeholder="Skriv din kommentar"
                                className="w-full resize-none rounded-lg border border-[#e0e0e0] bg-gray-50 py-3 px-3 text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
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

