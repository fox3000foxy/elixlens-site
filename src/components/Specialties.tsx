import React from 'react';

const Specialties: React.FC = () => {
  const specialties = [
    {
      icon: 'fas fa-tshirt',
      title: 'Fashion Photography',
      features: ['Editorial Shoots', 'Runway Coverage', 'Lookbook Creation']
    },
    {
      icon: 'fas fa-heart',
      title: 'Wedding Stories',
      features: ['Pre-Wedding Sessions', 'Destination Weddings', 'Album Design']
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate Events',
      features: ['Conferences', 'Team Building', 'Product Launches']
    },
    {
      icon: 'fas fa-camera-retro',
      title: 'Travel Photography',
      features: ['Documenting cultures', 'Adventure photography', 'Landscape captures']
    }
  ];

  return (
    <section className="specialties">
      <h2>Expertise Areas</h2>
      <p>Our expertise spans various photography styles, ensuring we can meet your unique needs.</p>
      <div className="specialty-grid">
        {specialties.map((specialty, index) => (
          <div key={index} className="specialty-card">
            <div className="specialty-icon">
              <i className={specialty.icon}></i>
            </div>
            <h3>{specialty.title}</h3>
            <ul className="specialty-features">
              {specialty.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;

