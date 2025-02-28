import React, { createContext, useState } from 'react'
export const LoginContextValue=createContext();
const LoginContext = ({children}) => {
    const [user,setUser]=useState(null);
    const login=(userInfo)=>{
        setUser(userInfo)
    }
    const logout=()=>{
        setUser(null);
    }
  return (
    <LoginContextValue.Provider value={{user,login,logout}}>
        {children}
    </LoginContextValue.Provider>
  )
}

export default LoginContext
