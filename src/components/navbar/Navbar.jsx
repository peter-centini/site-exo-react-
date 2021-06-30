import React from 'react';
import logo from '../../Assets/logo.png';
import './Navbar.css';

function navbar() {
    return (
        <div className="Navbar">
            <a href="/">< img className="logo" src={logo} alt="logo" /></a>
            
        </div>
    )
}

export default navbar;
