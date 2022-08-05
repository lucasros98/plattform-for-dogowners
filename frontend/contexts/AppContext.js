import { useState,createContext, useContext, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();
import userEndpoints from "../data/userEndpoints"


export function AppWrapper({ children }) {
  const [user,setUser] = useState(false)  

  console.log("wrapper")
  const getData = async () => {
    try {
        let res = await axios.get(userEndpoints.user,{ withCredentials: true })
        console.log(res)
        if (res.data && res.data.user) {
          console.log(res.data)

            const {user} = res.data
            setUser(user)
        }
        else {
            //error
            throw Error("Error")
        }
    }
    catch (err) {

    }
};

useEffect(()=> {
  if(!user) getData()
},[user])


  return (
    <AppContext.Provider value={{user,setUser}}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}