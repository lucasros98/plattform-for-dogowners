import {useEffect,useState} from "react"
import axios from "axios"
import PostCard from "@/components/Forum/PostCard"
import Link from "@/components/Link"
import { useAppContext } from '../../contexts/AppContext';

export default function Forum() {
    const [posts,setPosts] = useState([])
    const [loggedIn,setLoggedIn] = useState(false)

    const context = useAppContext();

    useEffect(() => {
        getPosts()
    },[])


	useEffect(()=> {
		if(context.user) setLoggedIn(true)
	},[context])

    const getPosts = async () => {
        let res = await axios.get("/posts")
        console.log(res.data)
        if(res.data) setPosts(res.data.posts)
    }


    return (<>
    <div className="bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto p-5">
            <div className="flex">
            <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 ">Forum</h1>
            <Link href="/forum/create" className="ml-auto mt-4"><button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Skapa ny</button></Link>
            </div>
            <div>
                {posts && posts.map((p) => {
                    return <PostCard key={p._id} id={p._id} title={p.title} body={p.body} date={p.created} />
                })}
            </div>
        </div>
    </div>
    
    </>)
}