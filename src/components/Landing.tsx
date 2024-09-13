import React from 'react';
import './Landing.css';
import AnimatedBackground from './AnimatedSymbols';
import ResumeLink from './ResumeLink';

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <section className="landing">
      <div className="background">
        <AnimatedBackground />
        <h1>Ezra Chung is a software engineer</h1>
        <button>
            <ResumeLink />
        </button>
      </div>
    </section>
  );
};

export default Landing;