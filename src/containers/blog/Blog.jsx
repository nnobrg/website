import React from 'react';
import {Article} from '../../components';
import {blog02} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="ourteam">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our team</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} text="Alex Matewos Araya" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Shekhar Devm Upadhyay" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Robert Luciani" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Nana Öberg" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Article imgUrl={blog02} text="Noran De Basso" date="about about about Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
    </div>
  </div>
);

export default Blog;