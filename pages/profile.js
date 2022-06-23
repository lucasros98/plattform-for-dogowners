import axios from "axios"
import { useEffect, useState } from "react"
import DogInfo from "../components/Profile/DogInfo"


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
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="text-gray-900 font-bold text-lg leading-8 my-1">
                                        Uppdateringar
                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li className="text-gray-600">Inga uppdateringar gjorda</li>
                                    </ul>
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