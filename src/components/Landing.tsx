import React from 'react';
import './Landing.css';
import AnimatedBackground from './AnimatedSymbols';

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <section className="landing">
      <div className="background">
        <AnimatedBackground />
        <h1>Ezra Chung is a software engineer</h1>
      </div>
    </section>
  );
};

export default Landing;