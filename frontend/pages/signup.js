import { useState,useEffect } from "react"
import axios from "axios"
import endpoints from "../data/userEndpoints"
import router from 'next/router'
import { useAppContext } from '../contexts/AppContext';
import Swal from 'sweetalert2'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [spassword, setSPassword] = useState("")

  const context = useAppContext();


  useEffect(() => {
    if(context.user) router.push("/profile")
  },[context])

  function createUser(e) {
    e.preventDefault()

    if (password !== spassword) {
      Swal.fire({
        title: 'Lösenorden matchar inte!',
        text: 'Lösenorden som du angav matchar inte. Vänligen ange igen!',
        icon: 'error',
        confirmButtonText: 'Stäng'
    })
      return;
    }

    const data = {
      email, password
    }

    axios.post(endpoints.signup, data).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: 'Konto skapat!',
          text: 'Du har skapat din konto, nu är det bara att logga in!',
          icon: 'success',
          confirmButtonText: 'Logga in'
      }).then(()=> {
        router.push('/login')

      })
  
      }
      else {
        Swal.fire({
          title: 'Misslyckades',
          text: 'Ett fel uppstod när du försöka skapa kontot.',
          icon: 'error',
          confirmButtonText: 'Försök igen'
      })
      }
    }).catch((err) => {
      Swal.fire({
        title: 'Misslyckades',
        text: 'Kontrollera att du angav rätt email och lösenord.',
        icon: 'error',
        confirmButtonText: 'Försök igen'
    })
    })
  }


  return (<>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Skapa konto</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={(e) => createUser(e)}>
          <input type="hidden" name="remember" value="true" />
          <div className="">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="appearance-none  my-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none rounded focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="password" required className="appearance-none my-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lösenord" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" value={spassword} onChange={(e) => setSPassword(e.target.value)} autoComplete="new-password" required className="appearance-none my-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lösenord" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Skapa konto
            </button>
          </div>
        </form>
      </div>
    </div>

  </>)
}