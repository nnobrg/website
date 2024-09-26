import React from 'react';
import teezmo from '../../assets/Teezmo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer box1__padding" id="contact">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={teezmo} alt="Teezmo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact</h4>
        <p>teezmoai@gmail.com</p>
        <p>
        <a href="https://www.linkedin.com/company/teezmoai/" target="_blank" rel="noopener noreferrer"> Linkedin</a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <p>Data processing agreement</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p><br /><br />@2024 Teezmo. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;