import React, { useContext } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navbarContainer'>
        <div className='navbarLeft'>
        <button>
            <Link to='/' className='navbarLeftLink'>React Movie App</Link>
        </button>  
        </div>
        <div className='navbarRight'>

        {/* {user ? <span>Hoşgeldiniz {user.email}</span> : <button><Link to='/login' className='navbarRightLink'>Login</Link></button>} */}
        <button><Link to='/login' className='navbarRightLink'>Login</Link></button>
        {/* {user ? <button onClick={handleLogout}><Link to='/' className='navbarRightLink'>Logout</Link></button>
        : <button><Link to='/register' className='navbarRightLink'>Register</Link></button>}        */}
        <button><Link to='/register' className='navbarRightLink'>Register</Link></button>    
         </div>
    </div>
  )
}

export default Navbar