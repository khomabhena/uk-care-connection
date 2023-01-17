import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser') || null)
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '')
    const [userUid, setUserUid] = useState(localStorage.getItem('userUid') || '')
   
    const logoutUser = () => {
        setCurrentUser(null)
        setUserEmail('')
        setUserUid('')
        localStorage.clear()
    }

    const setAuthCredentials = (uid, email) => {
        setUserUid(uid)
        setUserEmail(email)
        localStorage.setItem('userUid', uid)
        localStorage.setItem('userEmail', email)
    }
    
    return (
        <AuthContext.Provider value={
                            { currentUser, setCurrentUser, userEmail, userUid, 
                                logoutUser, setAuthCredentials 
                            }}>
            {children}
        </AuthContext.Provider>
  )
}
