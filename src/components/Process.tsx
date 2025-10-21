import React from 'react';

const Process: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision and requirements'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Creating the perfect shot list and schedule'
    },
    {
      number: '03',
      title: 'Photoshoot',
      description: 'Professional photography session'
    },
    {
      number: '04',
      title: 'Post-Production',
      description: 'Expert editing and enhancement'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Your memories, perfectly preserved'
    }
  ];

  return (
    <section className="process" style={{ padding: '5% !important' }}>
      <h2>Our Process</h2>
      <p>We believe in a seamless process that ensures your vision is realized from start to finish.</p>
      <div className="timeline">
        {processSteps.map((step, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

