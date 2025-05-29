import React from 'react';
import {kth, netlight, foretagarna } from './imports';
import './logos.css';

const Brand = () => (
  <div className="gpt3__brand box1__padding">
    <div className="teez__brand">
      <img src={kth} alt="kth" />
    </div>
    <div className="teez__brand">
      <img src={foretagarna} alt="foretagarna" />
    </div>
    <div className="teez__brand">
      <img src={netlight} alt="netlight" />
    </div>
  </div>
);

export default Brand;