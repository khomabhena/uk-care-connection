import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        uid: '',
        facebook: '',
        whatsapp: '',
        twitter: '',
        phone: '',
        resumeName: '',
        resumeUrl: '',
        country: '',
        about: '',
        languages: '',
        jobType: '',
        address: '',
        nationalId: ''
    });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
        {children}
    </UserContext.Provider>
  )
}