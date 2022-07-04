import axios from "axios"
import { useEffect, useState } from "react"
import ProfileImage from "@/components/Profile/Image"

export default function Settings({ data }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [image, setImage] = useState(false)
    const [preview,setPreview] = useState(false)

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/user")

            if (res.data && res.data.user) {
                const user = res.data.user;
                setName(user.name)
                setEmail(user.email)
                setBio(user.bio)

                if(user.profileImage) {
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
        let res = await axios.get("http://localhost:3000/image/"+imageId)
        if (res.data.img) setPreview(res.data.img)
    }

    useEffect(() => {
        getData()
    }, []);


    function saveUser(e) {
        e.preventDefault()

        const body = {
            name,
            email,
            bio
        }
        axios.put("/user",body).then((res) => {
            console.log(res)
        }) 
    }

    function updateUserImage(e) {
        e.preventDefault()

        const data = new FormData();
        data.append("image", image)

        axios.post("/image/uploadProfile",data,{headers: {
            'Content-Type': 'multipart/form-data'
          }}).then((res)=> {
            console.log(res)
          })
    }


    function validateFile(file) {
        //Only allow images
        const whitelist = [
            'image/png',
            'image/jpeg',
            'image/jpg',
        ]
        if(whitelist.includes(file.type)) {
            const img = URL.createObjectURL(file)
            setPreview(img)
            setImage(file)
        }
        else {
            alert("File type not allowed")
        }

        //save user
    }


    return (
        <>
            <div className="min-h-screen pt-2">
                <div className="container mx-auto mt-6 max-w-4xl">
                    <h1 className="text-xl font-bold  capitalize ">Inställningar</h1>
                    <form onSubmit={(e) => saveUser(e)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className=" " htmlFor="username">Namn</label>
                                <input id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                                <label className="" htmlFor="emailAddress">Email</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md 0 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                        </div>

                        <div className="mt-4">
                            <label className="" htmlFor="passwordConfirmation">Bio</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">


                        </div>

                        <div className="mt-4">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Spara</button>

                        </div>
                    </form>
                    <h1 className="text-xl font-bold  capitalize mt-4">Profilbild</h1>
                    <form onSubmit={(e) => updateUserImage(e)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className="">Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only"  onChange={(e) => validateFile(e.target.files[0])} />
                                            </label>
                                            <p className="pl-1 ">or drag and drop</p>
                                        </div>
                                        <p className="text-xs ">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1">
                                {!preview && <div>Ingen profilbild har blivit vald</div>}
                                {preview && <ProfileImage image={preview}/>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit" disabled={!image} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-75">Spara bild</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );
}