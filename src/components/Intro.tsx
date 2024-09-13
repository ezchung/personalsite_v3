import React from 'react';
import './Landing.css';

import ResumeLink from './ResumeLink';

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <section className="landing">
        <div className="background">
            <h1>Hello World</h1>
            <button>
                <ResumeLink />
            </button>
        </div>
    </section>
  );
};

export default Intro;