import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <div>
            <img src='' alt='i-fair logo'/>
        </div>
        <ul>
            <li>Home</li>
            <li>News</li>
            <li>Innovations</li>
            <li>Gallery</li>
            <li>i-FAIR Fellows</li>
            <li>Event</li>
            <li>Contact</li>
        </ul>
        <div>
            <h3>Contact Us</h3>
            <p><FaEnvelope/>Email: <a href='mailto: info@ifair-israelnigeria.com'>info@ifair-israelnigeria.com</a></p>
            <p><FaPhone/>Phone: +234 906 5200 034</p>
            <div>
              <span><FaFacebook/></span>
              <span><FaInstagram/></span>
              <span><FaLinkedin/></span>
              <span><FaTwitter/></span>
            </div>
        </div>
        <div>
          <p>&copy; copyright i-FAIR 2023 - Innovation Fellowship for Aspiring Inventors and Researchers</p>
        </div>
    </div>
  )
}
export default Footer