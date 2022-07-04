import "moment"
import axios from "axios"
import Dropdown from "../Buttons/Dropdown"

export default function DogUpdate({ user, data,updateDog }) {

    function removeUpdate() {
        axios.delete(("/dog/update/"+data._id)).then((res)=> {
            if(res.data.success) {
                updateDog(res.data.dog)
            }
        })
    }

    return (
            <div className="px-5 py-4 bg-white  shadow rounded-lg  w-full">
                <div className="flex mb-4">
                    {false &&<img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />}
                    <div className="ml-2 mt-0.5">
                        <span className="block font-medium text-base leading-snug text-black ">{user.name}</span>
                        <span className="block text-sm text-gray-500 font-light leading-snug">{new Date(data.date).toLocaleDateString()}</span>
                    </div>
                    <Dropdown dropDownClass="ml-auto" id={"drop"+data._id}>
                        <button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100" onClick={(e)=> removeUpdate()}>Ta bort</button>
                    </Dropdown>
                </div>
                <p className="text-gray-800 leading-snug md:leading-normal">{data.text}</p>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex ">
                        {data.weight && <span className="bg-green-500 ml-1 text-white font-medium py-1 px-3 rounded-full">{data.weight} kg</span>}
                        {data.activityTime && <span className="bg-red-500 ml-1 text-white font-medium py-1 px-3 rounded-full">{data.activityTime} min</span>}

                    </div>
                </div>
            </div>
    );
}
