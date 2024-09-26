import React from 'react';
import aligner from '../../assets/aligner.PNG';
import './box3.css';

const Box3 = () => (
  <div className="gpt3__possibility box1__padding" id="information">
    <div className="gpt3__possibility-image">
      <img src={aligner} alt="aligner" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Streamlined Treatment<br />Faster Results</h1>
      <p>Our instantly generated plans are ready to be printed into invisible aligners, reducing waiting time and allowing patients to start treatment immediately.<br />Making the process more seamless and effective.</p>
    </div>
  </div>
);

export default Box3;