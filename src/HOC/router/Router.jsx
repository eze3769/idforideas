import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import Auth from '../auth/Auth'

const Router = () => {
    return (
        <BrowserRouter>
        {"Navbar" }
        <Routes>
            <Route path="/*" element={
                <Auth>
                    <Route path="/" element={""}/>
                    <Route path="/login" element={""}/>
                    <Route path="/signup" element={""}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Auth>
            } />
            <Route path="/login" element={""}/>
        </Routes>
        {"Footer"}
        </BrowserRouter>
    )
}

export default Router
