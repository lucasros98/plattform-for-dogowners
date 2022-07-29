import { useState,useEffect } from "react"

export default function CategoryFilter({setChosenGategory}) {
    const [category, setCategory] = useState("Alla")

    useEffect(()=> {
        setChosenGategory(category)
    },[category])

    return (<>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Kategori
        </label>
        <div class="relative max-w-xs">
            <select value={category} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5" onChange={(e) => setCategory(e.target.value)}>
                <option value={"Alla"}>Alla</option>
                <option value={"Hundskötsel"}>Hundskötsel</option>
                <option value={"Hundträning"}>Hundträning</option>
                <option option={"Hundraser"}>Hundraser</option>
                <option value={"Hundvård"}>Hundvård</option>
                <option value={"Annat"}>Annat</option>
            </select>
        </div>
    </>)
}