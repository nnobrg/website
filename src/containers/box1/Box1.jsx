import React from 'react';
import aligner2 from '../../assets/aligner2.PNG';
import './box1.css';

const Box1 = () => (
  <div className="gpt3__header box1__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Simplify the Path to a Perfect Smile</h1>
      <p> Transform your orthodontic experience — we make dental alignment correction more efficient and effective than ever.</p>
     </div>

     <div className="gpt3__header-image">
      <img src={aligner2} alt="aligner" />
    </div>
  </div>
);

export default Box1;