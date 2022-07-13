import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"


export async function getServerSideProps({ req, res }) {
    let user = null;
    if (req.user)
        user = req.user
    console.log(user)

    return { props: { data: user } }
}

const Stats = ({ data }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [image, setImage] = useState(null)

    const [dog, setDog] = useState(null)
    const [showPostForm, setShowPostForm] = useState(false)

    const getData = async () => {
        try {
            let res = await axios.get("/stats")
            console.log(res.data)

            if (res.data && res.data.user) {
                const user = res.data.user
                const dog = res.data.dog
                setUser(user)
                setDog(dog)
                setLoading(false)

                if (user.profileImage) {
                    getProfileImage(user.profileImage)
                }
            }
            else {
                //error
                throw Error("Error")
            }

        }
        catch (err) {

        }
    };

    const getProfileImage = async (imageId) => {
        let res = await axios.get("http://localhost:3000/image/" + imageId)
        if (res.data.img) setImage(res.data.img)
    }

    useEffect(() => {
        getData()
    }, []);

    if (loading) return <div>Loading..</div>

    // Show the user. No loading state is required
    return (
        <div className="bg-gray-100 h-full min-h-screen	">
         
        </div>

    )
}


export default Stats