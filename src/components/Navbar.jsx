import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import './Navbar.css';

const Navbar = () => {

  //Setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log('click')
  }

  //Change nav color when scrolling
  const [color, setColor ] = useState(false);
  const changeNavColor = () => {
    if(window.scrollY >= 90){

      setColor(true);
    }else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeNavColor)

  //Close menu on click
  const closeMenu = () => {
    setClick(!click);
  }

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className="navbar" id="navbar">
        <div href="#hero" className="logo">
          <Link to="hero" spy={true} smooth={true} offset={-90} duration={1500} onClick={closeMenu}><img src={logo} alt="logo" /></Link>
        </div>
        <div className="hamburguer" onClick={handleClick}>
          {click ? <FaTimes size={30} style={{color: '#fff'}}/> : <FaBars size={30} style={{color: '#fff'}}/>}
        </div>
        <ul className={click ? ('nav-menu active') : ('nav-menu')}>
            <li className="nav-item">
                <Link to="hero" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="demo" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Demo</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
