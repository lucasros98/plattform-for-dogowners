import { useState } from "react"
import axios from "axios"
import router from 'next/router'
import Swal from 'sweetalert2'


export default function Login() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")


  function createPost(e) {
    e.preventDefault()

    const bodyData = {
        title,
        body,
        category
    }

    axios.post("/post",bodyData).then((res)=> {
      if(res.data.success) {
        console.log(res.data)
        router.push('/forum/'+res.data.post._id, undefined, { shallow: true })
      }
      else {
        throw Error("error")
      }
    }).catch((err) => {
        Swal.fire({
            title: 'Misslyckades!',
            text: 'Det gick inte att skapa inlägget.',
            icon: 'error',
            confirmButtonText: 'Stäng'
        })
    })
  }

  return (<>
    <div className="bg-gray-100 h-full min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-gray-700">Skapa nytt inlägg</h2>
        </div>
        <form className="w-full max-w-lg" onSubmit={(e) => createPost(e)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Titel
              </label>
              <input  type="text" value={title} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5" onChange={(e) => setTitle(e.target.value)} placeholder="Hur tycker ni om..?" />

            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Innehåll
              </label>
                <textarea id="textarea" type="textarea" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 h-40" value={body} placeholder="Skriv något om din fråga här.." onChange={(e) => setBody(e.target.value)}></textarea>                        
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Kategori
              </label>
              <div class="relative">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5" onChange={(e) => setCategory(e.target.value)}>
                    <option value={"Hundskötsel"}>Hundskötsel</option>
                    <option value={"Hundträning"}>Hundträning</option>
                    <option option={"Hundraser"}>Hundraser</option>
                    <option value={"Hundvård"}>Hundvård</option>
                    <option value={"Annat"}>Annat</option>
                </select>
              </div>            
              </div>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Skapa nytt inlägg</button>

        </form>
      </div>
    </div>

  </>)
}