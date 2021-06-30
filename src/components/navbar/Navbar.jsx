import React from 'react';
import logo from '../../Assets/logo.png';
import './Navbar.css';

function navbar() {
    return (
        <div className="Navbar">
            <a href="/">< img className="logo" src={logo} alt="logo" /></a>
            <div className="navigation">
                <a className="navigation-link" href="/">Nos ANIMAUX</a>
                <a className="navigation-link" href="/">À PROPOS</a>
                <a className="navigation-link" href="/">CONTACT</a>

            </div>
            
        </div>
    )
}

export default navbar;
