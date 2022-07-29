import { useState } from "react"
import axios from "axios"
import router from 'next/router'


export default function Login() {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [birth, setBirth] = useState("")


  function createDog(e) {
    e.preventDefault()

    const body = {
      name,
      breed,
      birth
    }

    axios.post("/dog/create",body).then((res)=> {
      if(res.data.success) {
        router.push('/profile', undefined, { shallow: true })
      }
      else {
        throw Error("error")
      }
    }).catch((err) => {
      alert("Kunde inte skapa hund")
    })
  }

  return (<>
    <div className="bg-gray-100 h-full min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-gray-700">Lägg till din hund</h2>
        </div>
        <form className="w-full max-w-lg" onSubmit={(e) => createDog(e)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Namn
              </label>
              <input  type="text" value={name} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5 " onChange={(e) => setName(e.target.value)} placeholder="Gizmo" />

            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Ras
              </label>
              <input  type="text" value={breed} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5 " onChange={(e) => setBreed(e.target.value)} placeholder="Golden retriever" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Födelsdatum
              </label>
              <div className="relative">
                <input type="date" value={birth} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5 " onChange={(e) => setBirth(e.target.value)} placeholder="Datum" />
              </div>            
              </div>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lägg till ny hund</button>
        </form>
      </div>
    </div>

  </>)
}