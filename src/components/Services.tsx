import React from 'react';
import type { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: 'fas fa-camera',
      title: 'Wedding Photography',
      description: 'Capturing your special moments with elegance and style',
      price: 'From $1,499',
      buttonText: 'Book Now'
    },
    {
      icon: 'fas fa-user',
      title: 'Portrait Sessions',
      description: 'Professional portraits that tell your story',
      price: 'From $299',
      buttonText: 'Book Now'
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial',
      description: 'Brand photography that makes an impact',
      price: 'Custom Quote',
      buttonText: 'Inquire'
    },
    {
      icon: 'fas fa-baby-carriage',
      title: 'Family Photography',
      description: 'Creating lasting memories with your loved ones',
      price: 'From $399',
      buttonText: 'Book Now'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Artistic Projects',
      description: 'Collaborative projects that blend art and photography',
      price: 'Custom Quote',
      buttonText: 'Inquire'
    }
  ];

  return (
    <section className="services">
      <div className="parallax-container">
        <h2>Our Services</h2>
        <p>We offer a range of photography services tailored to meet your needs, ensuring every moment is captured beautifully.</p>
        <div className="service-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="price">{service.price}</div>
              <button className="book-btn">{service.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

