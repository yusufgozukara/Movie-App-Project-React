import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route></Route>
        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Router