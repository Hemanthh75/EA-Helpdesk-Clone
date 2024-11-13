import React, { useState } from 'react';
import './navbar.css'

const Navbar = () => {


    const[isHamrburgerOpen, setIsHamburgerOpen] = useState(false);


     {/* function for hamburger functionality */}
    const handleHamburger = (event) => {
        event.preventDefault();
        setIsHamburgerOpen(true);
        console.log(isHamrburgerOpen)
    }


  return (
    <div className='navbar-container'>

        {/* Creating navbar items */}
        <img className='navbar-items navbar-logo' src='/public/images/EA Help_logo.png'/>
        


        {/* Navbar for large screens */}
        <div className='navbar-non-logo-items'>
                <span className='navbar-items navbar-text'>My cases</span>

                <select className='navbar-items navbar-dropdown'>
                    <option className='navbar-dropdown-item' hidden value="">Manage My Account</option>
                    <option className='navbar-dropdown-item' value="1">Change or Recover Password</option>
                    <option className='navbar-dropdown-item' value="2">Change Email Address</option>
                    <option className='navbar-dropdown-item' value="3">Order Management</option>
                    <option className='navbar-dropdown-item' value="4">Redeem a Code</option>
                    <option className='navbar-dropdown-item' value="5">Account Security</option>
                    <option className='navbar-dropdown-item' value="6">Link or Unlink my EA Account</option>
                    <option className='navbar-dropdown-item' value="7">My ban History</option>
                </select>

                <span className='navbar-items navbar-login'>Login/</span>
                <span className='navbar-items navbar-signup'>Signup</span>
        </div>


        {/* Navbar for small screens */}
        <div className='navbar-non-logo-items-small-screens'>
            <img className='hamburger-icon-navbar' src="/public/images/hamburger.png" alt="hamburgerlogo" onClick={handleHamburger}/>
        </div>


        {isHamrburgerOpen && (
            <div className='navbar-menu-small-screens'>
                <img src="/public/images/hamburger.png" className='menu-hamburger' alt="hamburgerlogo" onClick={() => setIsHamburgerOpen(!isHamrburgerOpen)} />
                <div className='navbar-menu-items-small-screens'>    
                    <p className='navbar-items-small-screens'>Login/Signup</p>
                    <p className='navbar-items-small-screens'>My Cases</p>
                    <select className='navbar-items-small-screens navbar-dropdown-small-screen'>
                        <option className='navbar-dropdown-item-small-screen' hidden value="">Manage My Account</option>
                        <option className='navbar-dropdown-item-small-screen' value="1">Change or Recover Password</option>
                        <option className='navbar-dropdown-item-small-screen' value="2">Change Email Address</option>
                        <option className='navbar-dropdown-item-small-screen' value="3">Order Management</option>
                        <option className='navbar-dropdown-item-small-screen' value="4">Redeem a Code</option>
                        <option className='navbar-dropdown-item-small-screen' value="5">Account Security</option>
                        <option className='navbar-dropdown-item-small-screen' value="6">Link or Unlink my EA Account</option>
                        <option className='navbar-dropdown-item-small-screen' value="7">My ban History</option>
                    </select>
                </div>
            </div>
        )}



    </div>
  )
}

export default Navbar;