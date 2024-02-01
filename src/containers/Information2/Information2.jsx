import React from 'react';
import aligner from '../../assets/aligner.PNG';
import './information2.css';

const Information2 = () => (
  <div className="information2 section__padding" id="information">
    <div className="information2-image">
      <img src={aligner} alt="aligner" />
    </div>
    <div className="information2-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Information2;