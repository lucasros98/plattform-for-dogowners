import { useState } from "react"
import axios from "axios"
import endpoints from "../data/userEndpoints"
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
      <div className="container mx-auto p-5">
        <div>
          <h2 className="mt-6 mb-4 text-3xl font-extrabold text-gray-700">Lägg till din hund</h2>
        </div>
        <form className="w-full max-w-lg" onSubmit={(e) => createDog(e)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Namn
              </label>
              <input  type="text" value={name} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setName(e.target.value)} placeholder="Gizmo" />

            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Ras
              </label>
              <input  type="text" value={breed} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setBreed(e.target.value)} placeholder="Golden retriever" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Födelsdatum
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </div>
                <input datepicker type="date" value={birth} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setBirth(e.target.value)} placeholder="Datum" />
              </div>            
              </div>
          </div>

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lägg till ny hund</button>
        </form>
      </div>
    </div>

  </>)
}