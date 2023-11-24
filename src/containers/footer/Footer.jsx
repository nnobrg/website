import React from 'react';
import teezmo from '../../assets/Teezmo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="contact">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Learn more about Teezmo&apos;s dental AI</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Book demo</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={teezmo} alt="Teezmo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social media</h4>
        <p>Linkedin</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact info</h4>
        <p>Adress</p>
        <p>Tel +46 </p>
        <p>teezmoai@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Teezmo. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;