import React from 'react';
import Feature from '../../components/feature/Feature';
import './dentalAI.css';

const DentalAI = () => (
  <div className="dentalAI section__margin" id="dentalai">
    <div className="dentalAI-feature">
      <Feature title="What is Dental AI" text="Dental AI uses complex models to process data and predict the optimal aligner treatment plans. It eases the work for orthodontists. Workload becomes manageble." />
    </div>
    <div className="dentalAI-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="dentalAI-container">
      <Feature title="Text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Feature title="Text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Feature title="Text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  </div>
);

export default DentalAI;