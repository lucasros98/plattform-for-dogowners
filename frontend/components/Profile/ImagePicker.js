import axios from "axios"
import { useEffect, useState } from "react"

export default function Image({ image }) {
    const [upload, setUpload] = useState(false)


    function updateUserImage(e) {
        e.preventDefault()

        const data = new FormData();
        data.append("image", image)

        axios.post("/image/uploadProfile", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
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

    return <div className="relative">
        <img src="/static/profilePicture.png" className="rounded-full w-24 h-24 border " />
        <div className="absolute bottom-0 left-16 p-2 bg-white rounded-full border-gray-100 border-1">
        <label htmlFor="file-upload" className="hover:cursor-pointer">

            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => validateFile(e.target.files[0])}/>

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" w-4 h-4" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />

                </svg>

                </label>
        </div>


    </div>
    if (image.contentType) {
        return <div>
            <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} />
        </div>
    }
    else
        return (
            <div>
                <img src={image} />
            </div>
        );
}
