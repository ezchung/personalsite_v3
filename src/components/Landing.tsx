import React from 'react';
import './Landing.css';

import ResumeLink from './ResumeLink';
import AnimatedSymbols from './AnimatedSymbols';
//import AnimatedSymbols from './AnimatedSymbols';
//can add later. trying to use z-index to bring this text out to the front

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <section className="landing">
        <div className="background">
            <h1>Ezra Chung is a software engineer</h1>
            <button>
                <ResumeLink />
            </button>
        </div>
    </section>
  );
};

export default Landing;