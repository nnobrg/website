import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import teezmo from '../../assets/Teezmo.png';
import './navbar.css';

const Menu = () => (
   <>
   <p><a href="#team">Team</a></p>
   <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={teezmo} alt="teezmo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/*<p>Sign up</p> sign up button*/}        
        <button type="button">Log in</button>
      </div>
      <div className="gpt3__navbar-menu">{/*The mobile responsiveness*/}
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
           <Menu />
          </div>
          {/*<div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>*/}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;