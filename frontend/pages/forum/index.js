import { useEffect, useState } from "react"
import axios from "axios"
import PostCard from "@/components/Forum/PostCard"
import Link from "@/components/Link"
import { useAppContext } from '../../contexts/AppContext';
import CategoryButton from "@/components/Forum/CategoryButton";
import CategoryFilter from "@/components/Forum/CategoryFilter";

export default function Forum() {
    const [posts, setPosts] = useState([])

    const [loggedIn, setLoggedIn] = useState(false)

    //Category
    const [chosenCategory, setChosenGategory] = useState("Alla")


    const context = useAppContext();

    useEffect(() => {
        getPosts()
    }, [])


    useEffect(() => {
        if (context.user) setLoggedIn(true)
    }, [context])

    const getPosts = async () => {
        let res = await axios.get("/posts")
        if (res.data && res.data.posts) {
            setPosts(res.data.posts)

            //Get categories
            const categories = res.data.posts.map((post) => { return post.category })
            console.log(categories)
        }
    }

    //Filter posts by category
    let filtered = []
    if (!chosenCategory || chosenCategory === "Alla") filtered = posts
    else filtered = posts.filter((_post) => { return _post.category === chosenCategory })

    return (<>
        <div className="bg-white border-y border-gray-100 shadow-md">
        <div className="container mx-auto px-5 py-4">
        <div className="flex">
            <h1 className="text-xl text-gray-800 font-bold leading-normal my-auto ">Forum - <span className="font-medium  italic">Frågor och svar</span></h1>
            {loggedIn && <Link href="/forum/create" className="ml-auto my-auto"><button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto my-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Skapa ny</button></Link>}
        </div>
        <div id="filters" className="mt-5 mb-5">
                    <CategoryFilter setChosenGategory={setChosenGategory} />
                </div>
        </div>
        </div>
  
        <div className="bg-gray-100 h-full min-h-screen">
            <div className="container mx-auto p-5">

                <div className="mt-5">
                    {filtered && filtered.map((p) => {
                        return <PostCard key={p._id} category={p.category} nrOfComments={p.comments.length} id={p._id} title={p.title} body={p.body} date={p.created} />
                    })}
                    {!filtered ||filtered.length === 0 && <div>Hittade inga inlägg som matchade kategorien.</div>}
                </div>
            </div>
        </div>

    </>)
}