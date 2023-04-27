`use client`
import React, { useContext, useState } from "react"

const GlobalContext = React.createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export const  GlobalContextProvider =({children})=> {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [mobileNumber, setMobileNumber] = useState("8707716780")
    const [customerID, setCustomerID] = useState()
    const [custName,setCustName] = useState()
    const value = {
        isLoggedIn,
        mobileNumber,
        customerID,
        custName,
        setIsLoggedIn,
        setMobileNumber,
        setCustomerID,
        setCustName
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
