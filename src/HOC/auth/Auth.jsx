import React, { useContext } from 'react'
import { Navigate, Routes, useLocation } from 'react-router-dom'
import {customContext} from '../../context/AppContext'


const Auth = ({children}) => {
    const {auth} = useContext(customContext)
    let location = useLocation()
    let navigateMemo = location.pathname


    if(!auth){
        return <Navigate to="/login" state={{memory:navigateMemo}}/>
    }
    
    return (
        <Routes>
            {children}
        </Routes>
    )
}

export default Auth;
