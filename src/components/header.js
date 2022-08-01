import React from 'react';
import { Link } from 'react-router-dom'
import "./header.css"

const Header = ({isLoggedIn, setIsLoggedIn, setpassword, setusername, setToken}) => {
    const handleLogout = () => {
        setusername("");
        setpassword("");
        setToken('');
        localStorage.clear();
        setIsLoggedIn(false);
    };
    return (
        <header>
            <div className='header-container'>
                <p>Stranger's Things</p>
                <p><Link to='/'>HOME</Link></p>
                <p><Link to='/posts'>POSTS</Link></p>
                {
                    isLoggedIn ? <p><Link to='/profile'>PROFILE</Link></p> 
                    : null
                }
                {
                    isLoggedIn ? <button onClick={handleLogout}>Logout</button> 
                    : <p><Link to='/login'>Login</Link>/<Link to='/register'>Register</Link></p>
                }
            </div>
        </header>
    )
};

export default Header