import React from 'react';

const Publications: React.FC = () => {
  const publications = [
    'VOGUE',
    'ELLE', 
    'BAZAAR',
    'VANITY FAIR',
    'NATIONAL GEOGRAPHIC'
  ];

  return (
    <section className="publications">
      <h2>Featured In</h2>
      <p>Our work has been recognized in various prestigious publications.</p>
      <div className="publication-logos">
        {publications.map((publication, index) => (
          <div key={index} className="pub-logo">
            {publication}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;

