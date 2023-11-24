import React from 'react';
import aligner from '../../assets/aligner.PNG';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="information">
    <div className="gpt3__possibility-image">
      <img src={aligner} alt="aligner" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;