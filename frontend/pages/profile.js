import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import DogInfo from "@/components/Profile/DogInfo"
import NewPostModal from "@/components/Profile/NewPostModal"
import ImagePicker from "@/components/Profile/ImagePicker"

import Updates from "@/components/Profile/Updates"
import TakenQuiz from "@/components/Quiz/TakenQuiz"


export async function getServerSideProps({ req, res }) {
    let user = null;
    if (req.user)
        user = req.user

    return { props: { data: user } }
}

const Profile = ({ data }) => {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)
    const [image, setImage] = useState(null)

    const [dog, setDog] = useState(null)
    const [dogData, setDogData] = useState(null)

    //Update
    const [showPostForm, setShowPostForm] = useState(false)

    const getData = async () => {
        try {
            let res = await axios.get("/user")
            console.log(res.data)

            if (res.data && res.data.user) {
                setLoading(false)

                const { user, dog, dogData } = res.data
                console.log(res.data.user)
                setUser(user)
                setDog(dog)
                setDogData(dogData)

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
            <NewPostModal visible={showPostForm} setVisible={setShowPostForm} updateDog={setDog} />
            <div className="container mx-auto p-5">
                <div className="md:flex no-wrap md:-mx-2">
                    <div className="w-full md:w-4/12 md:mx-2">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="block lg:flex mb-4">
                                <ImagePicker image={image} />

                                <div className="lg:ml-4 grid content-center">
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.username ? user.username : "Namn saknas"}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">{user.email}</h3>
                                </div>
                            </div>
                            {user.bio && <div className="mt-3 mb-3">
                                <label>Bio</label>
                                <p className="text-sm text-gray-500 hover:text-gray-600  ">{user.bio}</p>

                            </div>}
                            <Link href={"/settings"} className={"mt-4"}>Redigera din profil →</Link>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Medlem sedan</span>
                                    <span className="ml-auto">{new Date(user.created).toLocaleDateString()}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white  mt-4 p-3 rounded-lg shadow-sm">
                            <div className="flex mb-3">
                                <h1 className="text-gray-900 font-bold text-lg leading-8 my-1">Quiz</h1>
                                <Link href="/quiz"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gör quiz</button></Link>
                            </div>
                            {!user.quizTaken || user.quizTaken.length === 0 && <div>
                                <p className="text-gray-700">Inga quiz tagna</p>
                            </div>}
                            {
                                user.quizTaken && <div>
                                    <div className="grid gap-3">
                                        {user.quizTaken.map((quiz => {
                                            return <TakenQuiz key={quiz.quiz._id} title={quiz.quiz.title} completed={quiz.timesTaken} score={quiz.bestScore} />
                                        }))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full  mt-4 md:w-8/12 md:mx-2 md:mt-0">
                        <DogInfo dog={dog} dogData={dogData} />

                        <div className="my-4"></div>

                        {dog && <div className="bg-white p-3 shadow-sm rounded-lg">
                            <div className="w-full">
                                <div className="flex">
                                    <div className="text-gray-900 font-bold text-lg leading-8 my-1">
                                        Uppdateringar
                                    </div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => setShowPostForm(true)}>Skapa ny</button>
                                </div>
                                <div className="mt-2 w-full">
                                    {false && <ul className="list-inside space-y-2">
                                        <li className="text-gray-600">Inga uppdateringar gjorda</li>
                                    </ul>}
                                    <Updates user={user} updates={dog.updates} updateDog={setDog} image={image} />
                                </div>

                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Profile