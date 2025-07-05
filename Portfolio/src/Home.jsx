import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hello, I'm <span className="gradient-text">Naveen</span></h1>
        <h2>Front-End Developer | React Enthusiast</h2>
        <p>I build beautiful and responsive web interfaces using modern technologies like React, JavaScript, and CSS.</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
