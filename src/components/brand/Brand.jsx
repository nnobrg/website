import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="brand section__padding">
    <div>
      <img src={google} alt="google" />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div className="teez__brand">
      <img src={shopify} alt="shopify" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox" />
    </div>
  </div>
);

export default Brand;