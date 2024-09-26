import React from 'react';
import {Article} from '../../components';
import {Alex, Shekhar, Nana, Robert, Noran} from './imports';
import './team.css';

const Team = () => (
  <div className="gpt3__blog box1__padding" id="team">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Team</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={Alex} name="Alex Matewos Araya" text="CPO" link="https://www.linkedin.com/in/alex-matewos-a-9b8705265/" />
        <Article imgUrl={Shekhar} name="Shekhar Devm Upadhyay" text="CTO" link="https://www.linkedin.com/in/sdupadhyay/" />
        <Article imgUrl={Nana} name="Nana Öberg" text="CEO" link="https://www.linkedin.com/in/nanaoberg/"/>
        <Article imgUrl={Robert} name="Robert Luciani" text="AI expert" link="https://www.linkedin.com/in/r3tex/"/>
        <Article imgUrl={Noran} name="Noran De Basso" text="Dentist" link="https://www.linkedin.com/in/noran-de-basso-6aaa1229/"/>
      </div>
    </div>
  </div>
);

export default Team;