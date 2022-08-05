import Link from "next/link";
import router from 'next/router'
import { useEffect, useState } from "react";
import axios from "axios"
import endpoints from "../data/userEndpoints"
import Swal from 'sweetalert2'
import { useAppContext } from '../contexts/AppContext';

export default function LoginModal({ visible, setVisible }) {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const context = useAppContext();

    useEffect(() => {
        if (visible) setShow(true)
    }, [visible])

    function close() {
        setShow(false)
        setVisible(false)
    }


    function loginUser(e) {
        e.preventDefault()

        const data = {
            email, password
        }

        axios.post(endpoints.login, data,{ withCredentials: true }).then((res) => {
            if (res.data.success) {
                close()
                const user = res.data.user;
                context.setUser(user)
                
                //redirect to login
                router.push('/profile', undefined, { shallow: true })
            }

            else {
                Swal.fire({
                    title: 'Misslyckades',
                    text: 'Kunde inte logga in på kontot. Angav du korrekta uppgifter?',
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

    return (
        <>{show ? <div id="top-right-modal" className="backdrop flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative p-4 w-full max-w-md  md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => close()}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Logga in på vår plattform</h3>
                        <form className="space-y-6" onSubmit={(e) => loginUser(e)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Din email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="kalle@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ditt lösenord</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logga in</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Inte registerad? <Link href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Skapa konto</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            : null}
        </>
    )
}

