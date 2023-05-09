import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { HiXCircle } from 'react-icons/hi';

const Navbar = () => {

    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false);
  
    //navbar scroll changeBackground function
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
  
  
  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
        <div className='logo-list'>
            <img src="./images/Asset 1@4x.png" alt='i-fair logo' className='logo'/>
            <ul className='nav-list'>
              <HiXCircle className='nav-close-btn'/>
              <li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
              <li><Link to="/Innovations" style={{color: 'white', textDecoration: 'none'}}>Innovations</Link></li>
              <li><Link to='/Fellows' style={{color: 'white', textDecoration: 'none'}}>i-FAIR Fellows</Link></li>
              <li><Link to='/Gallery' style={{color: 'white', textDecoration: 'none'}}>Gallery</Link></li>
              <li><Link to='/Events' style={{color: 'white', textDecoration: 'none'}}>Events</Link></li>
              <li><Link to='/News' style={{color: 'white', textDecoration: 'none'}}>News</Link></li>
              <li><Link to='/Contact' style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
            </ul>
        </div>
        <div className='social-icons-btn'>
          {/* <div style={{marginRight: "50px"}}> */}
          <div>
            <span className='icons'><a href='https://www.facebook.com/ifairisraelnigeria/'><FaFacebook style={{color: 'white', marginRight: '15px', fontSize: '1.2rem'}}/></a></span>
            <span><a href='https://www.instagram.com/ifairisraelnigeria/'><FaInstagram style={{color: 'white', marginRight: '15px', fontSize: '1.2rem'}}/></a></span>
            <span><a href='https://twitter.com/iFAIRIsraelNig'><FaTwitter style={{color: 'white', marginRight: '15px', fontSize: '1.2rem'}}/></a></span>
            <span><a href='https://www.linkedin.com/company/75117021/admin/'><FaLinkedin style={{color: 'white', marginRight: '15px', fontSize: '1.2rem'}}/></a></span>
          </div>
          <button className='btn'>Apply For i-FAIR 3</button>
          <button className='btn stories'>Success Stories</button>
        </div>
    </header>
  )
}

export default Navbar