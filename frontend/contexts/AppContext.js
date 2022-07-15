import { useState,createContext, useContext, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [user,setUser] = useState(false)  

  const getData = async () => {
    try {
        let res = await axios.get("/user")

        if (res.data && res.data.user) {
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