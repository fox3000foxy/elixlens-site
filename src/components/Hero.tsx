import React from 'react';

const Hero: React.FC = () => {
  return (
    <header>
      <div className="hero">
        <span className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Capturing Moments<br />Creating Stories</h1>
          <p>Join me on a journey through the lens, where every click tells a story.</p>
        </span>
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M12 5l-8 8h16l-8-8z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;

