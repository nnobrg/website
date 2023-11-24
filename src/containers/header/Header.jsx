import React from 'react';
import aligner2 from '../../assets/aligner2.PNG';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Revolutionizing orthodontics with AI</h1>
      <p> We're introducing a breakthrough technology to predict oral health treatment plans. Our AI powered system streamlines the aligner orthodontics process. We are Teezmo, derived from teeth move.</p>
     </div>

     <div className="gpt3__header-image">
      <img src={aligner2} alt="aligner" />
    </div>
  </div>
);

export default Header;