import React from 'react';
import './Landing.css';

export default function Component() {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>Ezra Chung is a software engineer</h1>
          <div className="icon-container">
            {['TS', 'N', 'R', 'JS'].map((icon, index) => (
              <div key={index} className="icon">
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <div className="pseudo-image"> 
            <img src="/images/Anime_Man_Reading.png" alt="anime man walking"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <img src="/images/Anime_Man_Reading.png" alt="anime man walking"></img> */}
/**
 *     <section className="landing">
        <div className="Animated fixed inset-0 overflow-hidden pointer-events-none">
            <AnimatedSymbols />
        </div>
        <main className="container mx-auto px-4 py-16 mt-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                Ezra Chung is a software engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Crafting elegant solutions to complex problems
            </p>
            <ResumeLink />
          </motion.div>
        </main>
    </section>

    the top of Ezra Chung is a software engineer is the only place where the two interact
 */