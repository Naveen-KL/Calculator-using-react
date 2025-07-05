import React from 'react';
import './Project.css';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A responsive portfolio website built using React, showcasing projects and skills with smooth animations.',
    tech: 'React, CSS, JavaScript',
    link: '#portfolio',
  },
  {
    name: 'Calculator',
    description: 'A sleek calculator app with basic arithmetic operations, built with React and modern CSS animations.',
    tech: 'React, CSS',
    link: '#calculator',
  },
  {
    name: 'E-Clinic and Healthcare Management',
    description: 'A comprehensive healthcare management system to streamline patient records, appointments, and billing.',
    tech: 'React, CSS3',
    link: '#eclinic',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(({ name, description, tech, link }, index) => (
            <a href={link} key={name} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="tech">{tech}</span>
              <button className="view-btn">View Project</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
