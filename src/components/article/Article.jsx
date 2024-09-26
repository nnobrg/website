import React from 'react';
import './article.css';

const Article = ({ imgUrl, name, text, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{name}</h3>
        <p>{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">LinkedIn</a> {/* Render the link */}   
      </div>
    </div>
  </div>
);

export default Article;