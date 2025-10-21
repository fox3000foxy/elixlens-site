import React from 'react';
import type { Certification, ResumeItem } from '../types';

const Resume: React.FC = () => {
  const resumeItems: ResumeItem[] = [
    {
      year: '2023 - Present',
      title: 'Lead Photographer, and FoxyAgency worker',
      company: 'ElixLens Studio, Paris',
      responsibilities: [
        'Founded and managing premier photography studio in Paris',
        'Specialized in high-end fashion and wedding photography',
        'Featured in Vogue, Elle, and other prestigious publications'
      ]
    },
    {
      year: '2018 - 2023',
      title: 'Senior Photographer',
      company: 'Maison de la Photographie, Paris',
      responsibilities: [
        'Led team of 5 photographers for major fashion events',
        'Principal photographer for Paris Fashion Week',
        'Developed innovative lighting techniques for studio portraits'
      ]
    },
    {
      year: '2015 - 2018',
      title: 'Event Photographer',
      company: 'Lumière Studios, Lyon',
      responsibilities: [
        'Specialized in luxury wedding photography',
        'Covered major corporate events across France',
        'Mentored junior photographers'
      ]
    },
    {
      year: '2010 - 2015',
      title: 'Freelance Photographer',
      company: 'Self-Employed',
      responsibilities: [
        'Built robust client portfolio from ground up',
        'Published in multiple international magazines',
        'Developed unique visual storytelling style'
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Master of Arts in Photography',
      issuer: 'École des Beaux-Arts, Paris',
      year: '2010'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Sony Digital Imaging Professional',
      issuer: 'Certified Professional Photographer',
      year: '2018'
    },
    {
      icon: 'fas fa-award',
      title: 'Adobe Certified Expert',
      issuer: 'Photoshop & Lightroom Specialist',
      year: '2019'
    }
  ];

  return (
    <section className="resume">
      <div className="resume-content">
        <h2>Professional Journey</h2>
        <p>My career has been a journey of passion, creativity, and dedication to the art of photography.</p>
        <div className="resume-timeline">
          {resumeItems.map((item, index) => (
            <div key={index} className="resume-item">
              <div className="resume-year">{item.year}</div>
              <div className="resume-details">
                <h3>
                  {item.title}
                  {item.title.includes('FoxyAgency') && (
                    <a 
                      href="https://www.foxyagency.fr" 
                      style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      FoxyAgency
                    </a>
                  )}
                </h3>
                <div className="resume-company">{item.company}</div>
                <ul>
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-certifications">
          <h3>Education & Certifications</h3>
          <p>My educational background and certifications have equipped me with the skills necessary to excel in photography.</p>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <div className="cert-icon">
                  <i className={cert.icon}></i>
                </div>
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

