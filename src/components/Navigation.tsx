import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        ELIXLENS <span className="by-line">by Elise Riboux</span>
      </div>
      <div className="menu">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;

