import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Router