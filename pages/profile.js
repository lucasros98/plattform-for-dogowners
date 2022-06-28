import axios from "axios"
import { useEffect, useState } from "react"
import DogInfo from "@/components/Profile/DogInfo"
import DogUpdate from "@/components/Profile/DogUpdate"
import NewPostModal from "@/components/Profile/NewPostModal"


export async function getServerSideProps({ req, res }) {
    let user = null;
    if (req.user)
        user = req.user

    return { props: { data: user } }
}

const Profile = ({ data }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [dogs, setDogs] = useState(null)
    const [showPostForm, setShowPostForm] = useState(false)

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/user")
            console.log(res.data)

            if (res.data && res.data.user) {
                setUser(res.data.user)
                setDogs(res.data.dogs)
                setLoading(false)
            }
            else {
                //error
                throw Error("Error")
            }

        }
        catch (err) {

        }
    };


    useEffect(() => {
        getData()
    },[]);

    if (loading) return <div>Loading..</div>

    // Show the user. No loading state is required
    return (
        <div className="bg-gray-100 h-full min-h-screen	">
            <NewPostModal visible={showPostForm} setVisible={setShowPostForm} />
            <div className="container mx-auto p-5">
                <div className="md:flex no-wrap md:-mx-2">
                    <div className="w-full md:w-4/12 md:mx-2">
                        <div className="bg-white p-4 rounded-lg">
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Kalle Karlsson</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">{user.email}</h3>
                            {user.bio & <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{user.bio}</p>}
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Medlem sedan</span>
                                    <span className="ml-auto">{new Date(user.created).toLocaleDateString()}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white  mt-4 p-4 rounded-lg">
                            <h1 className="text-gray-900 font-bold text-lg leading-8 my-1">Tagna quiz</h1>
                            <p className="text-gray-700">Inga quiz tagna</p>
                        </div>
                    </div>
                    <div className="w-full  mt-4 md:w-8/12 md:mx-2 md:mt-0">
                        <DogInfo dogs={dogs}/>

                        <div className="my-4"></div>

                        <div className="bg-white p-3 shadow-sm rounded-lg">
                                <div className="w-full">
                                    <div className="flex">
                                        <div className="text-gray-900 font-bold text-lg leading-8 my-1">
                                            Uppdateringar
                                        </div>
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => setShowPostForm(true)}>Skapa ny</button>
                                    </div>
                                    <div className="mt-2 w-full">
                                    {false &&<ul className="list-inside space-y-2">
                                        <li className="text-gray-600">Inga uppdateringar gjorda</li>
                                    </ul>}
                                    <DogUpdate/>
                                    </div>
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Profile