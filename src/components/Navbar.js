import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='navbarLeft'>
        <button>
            <Link to='/' className='navbarLeftLink'>React Movie App</Link>
        </button>  
        </div>
        <div className='navbarRight'>
            <button>                
                <Link to='/login' className='navbarRightLink'>Login</Link>
            </button>       
            <button>                
                <Link to='#' className='navbarRightLink'>Register</Link>
            </button>       
         </div>
    </div>
  )
}

export default Navbar