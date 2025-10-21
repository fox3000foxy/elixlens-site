import React from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const Experience: React.FC = () => {
  const { count: clients, elementRef: clientsRef } = useCounterAnimation(1278);
  const { count: awards, elementRef: awardsRef } = useCounterAnimation(52);
  const { count: experience, elementRef: experienceRef } = useCounterAnimation(15);

  return (
    <section className="experience">
      <div className="exp-counter">
        <div className="counter-wrap" ref={clientsRef}>
          <div className="counter">{clients}</div>
          <span>Happy Clients</span>
        </div>
        <div className="counter-wrap" ref={awardsRef}>
          <div className="counter">{awards}</div>
          <span>Awards Won</span>
        </div>
        <div className="counter-wrap" ref={experienceRef}>
          <div className="counter">{experience}</div>
          <span>Years Experience</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;

