import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { Achievement, Testimonial } from '../types';

const About: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "ElixLens captured our wedding perfectly. Every moment, every emotion - pure magic!",
      author: "- Sarah & James"
    },
    {
      quote: "Elise's eye for detail and creativity is unmatched. Our family photos are treasures!",
      author: "- The Martin Family"
    },
    {
      quote: "Professional, creative, and absolutely talented. Best decision ever!",
      author: "- Marie Laurent"
    },
    {
      quote: "The team at ElixLens made our event unforgettable. Highly recommend!",
      author: "- John & Emily"
    },
    {
      quote: "Incredible service and stunning photos! We couldn't be happier!",
      author: "- The Smiths"
    },
    {
      quote: "ElixLens has a unique ability to capture the essence of every moment!",
      author: "- Alex Johnson"
    }
  ];

  const achievements: Achievement[] = [
    {
      icon: 'fas fa-trophy',
      title: 'Best Photography Studio 2023',
      description: 'International Photography Awards'
    },
    {
      icon: 'fas fa-star',
      title: 'Featured in Vogue',
      description: 'Editorial Excellence'
    }
  ];

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  }, [testimonials.length]);

  const resetTimer = useCallback(() => {
    startTimer();
  }, [startTimer]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    resetTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I am a professional photographer specializing in capturing life's most precious moments. With over a decade of experience, I bring creativity and technical expertise to every shoot.</p>
        <p>My journey began with a simple camera and a passion for storytelling. Today, I have honed my skills to create stunning visuals that evoke emotions and memories.</p>
        
        <div className="stats">
          <div className="stat">
            <span className="number">10+</span>
            <span className="label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="number">500+</span>
            <span className="label">Happy Clients</span>
          </div>
          <div className="stat">
            <span className="number">50K+</span>
            <span className="label">Photos Taken</span>
          </div>
          <div className="stat">
            <span className="number">25+</span>
            <span className="label">Awards Won</span>
          </div>
          <div className="stat">
            <span className="number">100%</span>
            <span className="label">Client Satisfaction</span>
          </div>
          <div className="stat">
            <span className="number">48h</span>
            <span className="label">Delivery Time</span>
          </div>
        </div>

        <div className="testimonials">
          <h3>What Clients Say</h3>
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                    opacity: index === currentTestimonial ? 1 : 0.3
                  }}
                >
                  <div className="quote">{testimonial.quote}</div>
                  <div className="author">{testimonial.author}</div>
                </div>
              ))}
            </div>
            
            <button className="carousel-btn next" onClick={nextTestimonial}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="achievements">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-text">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fancy-boxes">
          <div className="fancy-box">
            <div className="box-icon">
              <i className="fas fa-camera-retro"></i>
            </div>
            <div className="box-content">
              <h3>Professional Studio</h3>
              <p>State-of-the-art photography studio equipped with the latest gear and lighting equipment.</p>
            </div>
          </div>
          <div className="fancy-box">
            <div className="box-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="box-content">
              <h3>Premium Equipment</h3>
              <p>Using only the highest quality cameras and lenses to ensure exceptional image quality.</p>
            </div>
          </div>
          <div className="fancy-box">
            <div className="box-icon">
              <i className="fas fa-eye"></i>
            </div>
            <div className="box-content">
              <h3>Creative Vision</h3>
              <p>Bringing artistic perspective and unique storytelling to every photography project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


