import React, {Component} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import Auth from '../auth/Auth'

import Login from '../../components/login/Login.js'
import Signup from 'C:/Users/57311/idforideas/src/components/Signup.js';

class Router extends Component {

    render(){

        return(

// const Router = () => {

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                    <Auth>
                        <Route path="/" element={""}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Auth>} />
            
                <Route path ='/Login' element = {<Login />} />
                <Route path ='/Signup' element = {<Signup />} />
        
            </Routes>
        </BrowserRouter>
    
        );
    }
}

export default Router;
