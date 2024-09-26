import React from 'react';
import {kth, netlight, aiframework } from './imports';
import './logos.css';

const Brand = () => (
  <div className="gpt3__brand box1__padding">
    <div className="teez__brand">
      <img src={kth} alt="kth" />
    </div>
    <div className="teez__brand">
      <img src={aiframework} alt="aiframework" />
    </div>
    <div className="teez__brand">
      <img src={netlight} alt="netlight" />
    </div>
  </div>
);

export default Brand;