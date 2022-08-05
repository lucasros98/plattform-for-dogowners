import { useState,useEffect } from "react"
import axios from "axios"
import endpoints from "@/data/userEndpoints"
import router from 'next/router'
import Swal from 'sweetalert2'
import { useAppContext } from '../contexts/AppContext';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const context = useAppContext();

  useEffect(() => {
    if(context.user) router.push("/profile")
  },[context])


  function loginUser(e) {
    e.preventDefault()

    const data = {
      email, password
    }

    axios.post(endpoints.login, data,{ withCredentials: true }).then((res) => {
      if (res.data.success) {
        
        const token = res.data.token;
        const user = res.data.user;

        if (typeof window !== "undefined") {
          sessionStorage.setItem("token", token)
          sessionStorage.setItem("user",JSON.stringify(user))  
        }
        //redirect to login
        router.push('/profile', undefined, { shallow: true })
      }
      else {
        Swal.fire({
          title: 'Misslyckades',
          text: 'Kontrollera att du angav rätt email och lösenord.',
          icon: 'error',
          confirmButtonText: 'Stäng'
      })
      }
    }).catch((err) => {
      Swal.fire({
        title: 'Misslyckades',
        text: 'Kontrollera att du angav rätt email och lösenord.',
        icon: 'error',
        confirmButtonText: 'Stäng'
    })
    })
  }

  return (<>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Inloggning</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={(e) => loginUser(e)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lösenord" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Logga in
            </button>
          </div>
        </form>
      </div>
    </div>

  </>)
}