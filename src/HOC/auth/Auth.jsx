import React from 'react'
import { Navigate, Routes, useLocation } from 'react-router-dom'

const Auth = ({children}) => {
    //only for debug, delete after implement real auth
    let auth = true

    // const {auth} = useContext(appContext)
    let location = useLocation()
    let navigateMemo = location.pathname


    if(!auth){
        return <Navigate to="/Login" state={{memory:navigateMemo}}/>
    }
    
    return (
        <Routes>
            {children}
        </Routes>
    )
}

export default Auth;
