import React, { createContext, useState } from 'react'

export const CompanyContext = createContext();

export const CompanyContextProvider = ({ children }) => {

    const [companyData, setCompanyData] = useState({
        companyName: '',
        regNumber: '',
        nationalId: '',
        uid: '',
        facebook: '',
        twitter: '',
        phone: '',
        country: '',
        about: '',
        address: '',
        established: '',
        ownerName: '',
        employees: '',
        website: '',


    });

  return (
    <CompanyContext.Provider value={{ companyData, setCompanyData }}>
        {children}
    </CompanyContext.Provider>
  )
}