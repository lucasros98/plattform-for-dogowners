import axios from "axios"
import { useEffect, useState } from "react"


export default function Settings({ data }) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [bio,setBio] = useState("")
    const [image,setImage] = useState("")

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/user")
            console.log(res.data)

            if (res.data && res.data.user) {
                setUser(res.data.user)
                setDog(res.data.dog)
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

    const getProfileImage = async () => {
        let res = await axios.get("http://localhost:3000/image")
        if(res.data.img) setImage(res.data.img)
    }

    useEffect(() => {
        getData()
        getProfileImage()
    },[]);

    function saveUser(e) {
        e.preventDefault()

        //save user
    }


    return (
        <>
            <div className="min-h-screen pt-2">
                <div className="container mx-auto mt-6 max-w-4xl">
                    <h1 className="text-xl font-bold  capitalize dark:">Inställningar</h1>
                    <form onSubmit={(e) => saveUser(e)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className=" dark:text-gray-200" for="username">Namn</label>
                                <input id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className=" dark:text-gray-200" for="emailAddress">Email</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                            </div>

                            <div className="mt-4">
                                <label className=" dark:text-gray-200" for="passwordConfirmation">Bio</label>
                                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      
                            <div>
                                <label className="">
                                    Profilbild
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className="">Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1 ">or drag and drop</p>
                                        </div>
                                        <p className="text-xs ">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Spara</button>

                        </div>
                    </form>

                </div>
            </div>

        </>
    );
}