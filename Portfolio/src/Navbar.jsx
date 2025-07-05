import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={`bar ${open ? 'rotate-top' : ''}`}></span>
        <span className={`bar ${open ? 'hide-middle' : ''}`}></span>
        <span className={`bar ${open ? 'rotate-bottom' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
