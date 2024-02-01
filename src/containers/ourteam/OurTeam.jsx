import React from 'react';
import {Article} from '../../components';
import {blog02} from './imports';
import './ourteam.css';

const OurTeam = () => (
  <div className="blog section__padding" id="ourteam">
    <div className="blog-heading">
      <h1 className="gradient__text">Our team</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_group">
        <Article imgUrl={blog02} text="Alex Matewos Araya" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Shekhar Devm Upadhyay" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Robert Luciani" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Nana Öberg" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Noran De Basso" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
    </div>
  </div>
);

export default OurTeam;