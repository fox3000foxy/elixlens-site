import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="social-links">
        <a href="https://instagram.com/elix.rbx" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://facebook.com/elixlens" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/elixlens" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <p>&copy; {currentYear} ElixLens Photography. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

