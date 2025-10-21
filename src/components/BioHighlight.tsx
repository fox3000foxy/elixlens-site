import React from 'react';

const BioHighlight: React.FC = () => {
  return (
    <section className="bio-highlight">
      <div className="bio-container">
        <div className="bio-image">
          <svg viewBox="0 0 200 200" className="bio-blob">
            <path d="M40,-50C53.8,-41.3,68.2,-32.6,74.2,-19.6C80.2,-6.6,77.8,10.7,70.8,25.5C63.8,40.3,52.3,52.6,38.5,60.1C24.7,67.6,8.7,70.3,-7.1,68.7C-22.9,67.1,-38.5,61.2,-51.2,50.9C-63.9,40.6,-73.7,25.8,-76.5,9.7C-79.3,-6.4,-75.1,-23.9,-64.8,-34.9C-54.5,-45.9,-38,-50.4,-24.2,-59C-10.4,-67.6,0.7,-80.3,7.1,-76.2C13.5,-72.1,26.2,-58.7,40,-50Z" transform="translate(100 100)" />
          </svg>
          <span className="bio-initials">
            <img src="photo.png" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '30%' }} alt="Elise Riboux" />
          </span>
        </div>
        <div className="bio-text">
          <h2>Elise Riboux</h2>
          <p className="bio-tagline">French photographer based in Paris, capturing life's extraordinary moments since 2010</p>
          <p>With a passion for storytelling through imagery, I strive to create timeless pieces that resonate with emotions.</p>
          <div className="bio-badges">
            <span>🇫🇷 Native French</span>
            <span>🌍 International</span>
            <span>📸 Sony Ambassador</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioHighlight;

