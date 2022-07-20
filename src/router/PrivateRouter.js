import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRouter = ({children}) => {
    let {user} = true;
    if(!user){
    <Navigate to='/'/>
    } 
  return children 
    
  
}

export default PrivateRouter