import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../auth/Auth'
import Login from '../../components/login/Login'
import Signup from '../../components/Signup/Signup';      
import Home from '../../containers/Home/Home'
import NavBar from '../../components/NavBar/NavBar';

const Router = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/*" element={
                    <Auth>
                        <Route path="/" element={<Home/>}/>
                    </Auth>} />
                <Route path ='/login' element = {<Login />} />
                <Route path ='/signup' element = {<Signup />} />
        
            </Routes>
        </BrowserRouter>
    
        );
}

export default Router;
