import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';


const PrivateRouter = ({children}) => {
    let {user} = useUserAuth();
    if(!user){
    <Navigate to='/'/>
    }
    // const user = true;
  return children 
    
  
}

export default PrivateRouter