import React from 'react';
import "./Navbar.css";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-list'>
            <img src="./images/Asset 1@4x.png" alt='i-fair logo'/>
            <ul className='nav-list'>
              <li>Home</li>
              <li>Innovations</li>
              <li>i-FAIR Fellows</li>
              <li>Gallery</li>
              <li>Events</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='social-icons-btn'>
          <div style={{marginRight: "50px"}}>
            <span className='icons'><a href='https://www.facebook.com/ifairisraelnigeria/'><FaFacebook style={{color: 'white', padding: '80px'}}/></a></span>
            <span><a href='https://www.instagram.com/ifairisraelnigeria/'><FaInstagram style={{color: 'white', padding: '80px'}}/></a></span>
            <span><a href='https://twitter.com/iFAIRIsraelNig'><FaTwitter style={{color: 'white', padding: '80px'}}/></a></span>
            <span><a href='https://www.linkedin.com/company/75117021/admin/'><FaLinkedin style={{color: 'white', padding: '80px'}}/></a></span>
          </div>
          <button className='btn'>Apply For i-FAIR 3</button>
        </div>
    </div>
  )
}

export default Navbar