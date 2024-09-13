import React from 'react';
import './Landing.css';

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <section className="landing">
        <div className="background">
            <h1>Hello World</h1>
        </div>
    </section>
  );
};

export default Intro;