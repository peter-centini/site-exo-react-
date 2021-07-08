import React from 'react';
import  './Footer.css';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';



function Footer() {
    return (
        <div className="footer">
            <div className="footer-column-container">
                <div className="footer-column footer-column-adress">
                <h4>Adresse</h4> 
                <span>2920 Homer simpsons</span>
                <span>État Unis</span>
                    </div>
                <div className="footer-column footer-column-contact"> 
                <h4>Contact</h4> 
                <span>contact@homer-simpsons.fr</span>
                <span>+33 0000000000</span>

                </div>
                <div className="footer-column footer-column-social"> 
                 <h4>Reseau social</h4> 
                   <div className="social-links">
                    <a href="/"> <FaFacebook/></a>
                     <a href="/"> <FaInstagramSquare/></a>
                     <a href="/"> <FaTwitterSquare/></a>
                     </div>
                </div>
            </div>
            <p className="greeting"> Made whit 👀 </p>
        </div>
    )
}

export default Footer;