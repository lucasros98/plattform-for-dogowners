import "moment"
import axios from "axios"
import Dropdown from "../Buttons/Dropdown"
import Swal from 'sweetalert2'

export default function DogUpdate({ user, data,updateDog,image }) {

    function removeUpdate() {
        Swal.fire({
            title: 'Vill du ta bort uppdateringen?',
            text: 'Är du säker på att du vill ta bort denna uppdateringen för din hund?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33', 
            cancelButtonText:'Stäng',
            confirmButtonText: 'Ja'
         }).then((result) => {
            if(result.value){
                axios.delete(("/dog/update/"+data._id)).then((res)=> {
                    if(res.data.success) {
                        updateDog(res.data.dog)
                    }
                })
           }
         })
    }

    return (
            <div className="px-5 py-4 bg-white  shadow rounded-lg  w-full">
                <div className="flex mb-4">

                    {image &&<img className="w-12 h-12 rounded-full" src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} />}
                    <div className="ml-2 mt-0.5">
                        <span className="block font-medium text-base leading-snug text-black ">{user.username}</span>
                        <span className="block text-sm text-gray-500 font-light leading-snug">{new Date(data.date).toLocaleDateString()}</span>
                    </div>
                    <Dropdown dropDownClass="ml-auto" id={"drop"+data._id}>
                        <button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100" onClick={(e)=> removeUpdate()}>Ta bort</button>
                    </Dropdown>
                </div>
                <p className="text-gray-800 leading-snug md:leading-normal">{data.text}</p>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex ">
                        {data.weight && <span className="bg-emerald-500 ml-1 text-white font-medium py-1 px-3 rounded-full">{data.weight} kg</span>}
                        {data.activityTime && <span className="bg-orange-500 ml-1 text-white font-medium py-1 px-3 rounded-full">{data.activityTime} min</span>}

                    </div>
                </div>
            </div>
    );
}
