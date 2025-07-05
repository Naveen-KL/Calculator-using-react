import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript', 'React', 'HTML5', 'CSS3', 'Node.js',
  'Java', 'Python', 'SQL', 'Git', 'Problem Solving',
  'Networking', 'Dynamic Programming',
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
