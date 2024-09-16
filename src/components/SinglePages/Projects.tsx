import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects_intro">
      <h1>My Projects</h1>
      <p>Here you can find information about my various projects.</p>
      
      {/* Example project */}
      <div className="project">
        <h2>Project 1</h2>
        <p>Description of Project 1</p>
      </div>
      
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;