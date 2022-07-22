import {useEffect,useState} from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import Swal from 'sweetalert2'
import { useAppContext } from '../../contexts/AppContext';
import Comment from "@/components/Forum/Comment"
import CommentModal from "@/components/Forum/CommentModal"



export default function post() {
    const [commentModal, setCommentModal] = useState(false)
    const [post,setPost] = useState(null)
    const router = useRouter()
    const { id } = router.query

    const [loggedIn,setLoggedIn] = useState(false)
    const context = useAppContext();

    useEffect(() => {
        if(id) getPost()
    },[id])

    useEffect(()=> {
		if(context.user) setLoggedIn(true)
	},[context])


    const getPost = async () => {
        let res = await axios.get("/post/"+id)
        if(res.data) setPost(res.data.post)
    }

    return (<>
        {post && <div className="bg-gray-100 h-full min-h-screen">
        <CommentModal visible={commentModal} setVisible={setCommentModal} updatePost={setPost} id={id} />

            <div className="container mx-auto p-5 mb-3">
                <div className="bg-white width-full p-6 rounded-lg shadow-sm">
                    <h1 className="mb-2 text-3xl font-extrabold text-gray-700 rounded-lg">{post.title}</h1>
                    <small className="mb-4">Publicerad av  {post.author.username},  {new Date(post.created).toLocaleString()}</small>
                    <div className="bg-gray-50 p-4 mt-4 shadow-sm rounded-lg border border-gray-100">{post.body}</div>
                </div>
               
                <div className="bg-white width-full p-6 rounded-lg mt-3 shadow-sm">
                    <div className="flex mb-6 ">    
                     <h1 className="text-xl font-extrabold text-gray-700 rounded-lg">Kommentarer ({post.comments.length} st)</h1>
                      {loggedIn && <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setCommentModal(true)}>Skriv en kommentar</button>}
                    </div>
                    <div className="grid gap-4">
                    {post.comments.map((c) => {
                        return <Comment key={c._id} body={c.body} date={c.date} author={c.author ? c.author.username: "Saknas"}/>
                    })}
                    </div>
                </div>
            </div>
        </div>}
    
    </>)
}