import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import teezmo_logo from '../../assets/Teezmo.png';
import './navbar.css';

const Menu = () => (
   <>
   <p><a href="#home">Home</a></p>
   <p><a href="#dentalai">Dental AI</a></p>
   <p><a href="#information">Information</a></p>
   <p><a href="#ourteam">Our Team</a></p>
   <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={teezmo_logo} alt="teezmo_logo"/>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign up</p>
        <button type="button">Log in</button>
      </div>
      <div className="navbar-menu">{/*The mobile responsiveness*/}
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
           <Menu />
          </div>
          <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;