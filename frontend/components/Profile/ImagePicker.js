import axios from "axios"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import userEndpoints from "../../data/userEndpoints"

export default function ImagePicker({ image }) {
    const [upload, setUpload] = useState(false)
    const [preview, setPreview] = useState(false)



    function updateUserImage(image) {

        const data = new FormData();
        data.append("image", image)

        axios.post(userEndpoints.image+"/uploadProfile", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        }).then((res) => {
            Swal.fire({
                title: 'Lyckades!',
                text: 'Du har ändrat profilbilden för ditt konto.',
                icon: 'success',
                confirmButtonText: 'Stäng'
              })
        })
    }


    function validateFile(file) {
        //Only allow images
        const whitelist = [
            'image/png',
            'image/jpeg',
            'image/jpg',
        ]
        if (whitelist.includes(file.type)) {
            const img = URL.createObjectURL(file)
            setPreview(img)
            setUpload(file)
            updateUserImage(file)
        }
        else {
            Swal.fire({
                title: 'Ett fel uppstod',
                text: 'Filtypen som du laddade upp är inte accepterad!',
                icon: 'error',
                confirmButtonText: 'Stäng'
              })
        }
    }
    if (!image) return <Image image={"/static/profilePicture.png"} validateFile={validateFile} />
    else if (preview)
        return (
            <Image image={preview} validateFile={validateFile} />
        );
    else if (image.contentType) {
        return <Image image={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} validateFile={validateFile} />
    }

}

function Image({ image, validateFile }) {
    return <div className="relative">

        <img src={image} className="rounded-full w-24 h-24 border object-cover" />
        <div className="absolute bottom-0 left-16 p-2 bg-gray-50 rounded-full border-gray-200 border">
            <label htmlFor="file-upload" className="hover:cursor-pointer">

                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => validateFile(e.target.files[0])} />

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" w-4 h-4" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />

                </svg>

            </label>
        </div>
    </div>
}
