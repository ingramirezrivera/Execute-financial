import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('click')
  }
  const closeMenu = () => {
    setClick(!click);
  }

  return (
    <div className="header">
      <nav className="navbar" id="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburguer" onClick={handleClick}>
          {click ? <FaTimes size={30} style={{color: '#fff'}}/> : <FaBars size={30} style={{color: '#fff'}}/>}
        </div>
        <ul className={click ? ('nav-menu active') : ('nav-menu')}>
            <li className="nav-item">
                <a href="#hero" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
                <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            </li>
            <li className="nav-item">
                <a href="#demo" onClick={closeMenu}>Demo</a>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
