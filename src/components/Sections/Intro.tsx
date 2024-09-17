import React from 'react';
import './Intro.css';

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <div className="intro">
      <div className="intro-title">
        <h1>Hello World</h1>
        <p>I'm a full stack developer and UX designer</p>
        <p>Skills</p>
        <ul>
          <li>Python, JavaScript</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;