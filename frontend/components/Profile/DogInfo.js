import "moment"
import Link from "next/link"
import moment from "moment"
import Dropdown from "../Buttons/Dropdown";
import Motion from "../Tips/Motion";

export default function DogInfo({ dog,dogData }) {

    //get first dog in array


    return (
        <div className="bg-white p-3 shadow-sm rounded-lg">
            <div className="flex">
                <div className="ml-4 text-gray-900 font-bold text-lg leading-8 my-1">
                    Min hund
                </div>
                <div className="ml-auto mr-4 my-1">

                    <Dropdown>
                        <Link href={"/dog/edit"}>
                            <button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100">Ändra</button>
                        </Link>
                        <Link href={"/stats"}>
                            <button className="w-full text-gray-700 block px-4 py-2 text-sm text-start hover:bg-gray-100">Se utvecklingen</button>
                        </Link>
                    </Dropdown>
                </div>
            </div>
            <div className="text-gray-700">
                {dog ? <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Namn</div>
                        <div className="px-4 py-2">{dog.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Ras</div>
                        <div className="px-4 py-2">{dog.breed}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Föddes</div>
                        <div className="px-4 py-2">{dog.birth ? new Date(dog.birth).toLocaleDateString() : "Saknas"}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Ålder</div>
                        <div className="px-4 py-2">{dog.birth ? moment(new Date(dog.birth)).fromNow(true) : "Saknas"}</div>
                    </div>

                </div> : <div>
                    <p>Ingen hund</p>
                    <Link href="/ny-hund">Lägg till din hund</Link>
                </div>}
            </div>
            <hr className="my-3 mx-3"/>
            <div className="p-3">
                <h3></h3>
            <Motion dog={dog} dogData={dogData}/>

            </div>
        </div>
    );
}
