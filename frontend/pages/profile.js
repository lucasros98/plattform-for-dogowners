import axios from "axios"


const Profile = ({ data }) => {
    console.log(data)

    // Show the user. No loading state is required
    return (
        <div className="bg-gray-100 h-full min-h-screen	">
            <div className="container mx-auto p-5">
                <div className="md:flex no-wrap md:-mx-2">
                    <div className="w-full md:w-4/12 md:mx-2">
                        <div className="bg-white p-4 rounded-lg">
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Kalle Karlsson</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">kalle@gmail.com</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Detta är en bio. Där man kan skriva om sin profil</p>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Medlem sedan</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white  mt-4 p-4 rounded-lg">
                            <h1 className="text-gray-900 font-bold text-lg leading-8 my-1">Tagna quiz</h1>
                            <p className="text-gray-700">Inga quiz tagna</p>
                        </div>
                    </div>
                    <div className="w-full  mt-4 md:w-8/12 md:mx-2 md:mt-0">
                        <div className="bg-white p-3 shadow-sm rounded-lg">
                            <div className="ml-4  text-gray-900 font-bold text-lg leading-8 my-1">
                                Min hund
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Namn</div>
                                        <div className="px-4 py-2">Gizmo</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Ras</div>
                                        <div className="px-4 py-2">Golden retriever</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Föddes</div>
                                        <div className="px-4 py-2">2022-03-23</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Ålder</div>
                                        <div className="px-4 py-2">3 månader</div>
                                    </div>

                                </div>
                            </div>

                        </div>

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

export const getServerSideProps = async (ctx) => {

    try {            
        const res = await axios.get(`http://localhost:3000/getUser`).then((res) => {
            console.log(res)
        })
        const userData = res.data;

        if (!userData) {
            return {
                 props: { notFound: true } ,
            }
        }

        return {
            props: {
                userData

            }
        }

    } catch (error) {
        return { props: {hello:"hel"} }
    }



}

export default Profile