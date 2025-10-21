document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar background change on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
  });

  // Form submission handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });

  // Add smooth parallax effect to hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGraphic = document.querySelector('.hero-graphic');
    if (heroGraphic) {
      heroGraphic.style.transform = `translateY(calc(-50% + ${scrolled * 0.5}px))`;
    }
  });

  // Add neon trail effect to CTA buttons
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mousemove', e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });

  // Enhanced intersection observer for animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.filter = 'blur(0)';
        fadeInUpObserver.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  // Observe elements with enhanced animations
  document.querySelectorAll('.service-card, .price-card, .contact-container').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.filter = 'blur(5px)';
    el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
    fadeInUpObserver.observe(el);
  });

  // Add dynamic glow effect to hero section
  const heroSection = document.querySelector('.hero-graphic');
  if (heroSection) {
    document.addEventListener('mousemove', e => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      heroSection.style.background = `
        radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, 
          rgba(255, 51, 51, 0.4) 0%, 
          transparent 70%),
        radial-gradient(circle at ${(1 - mouseX) * 100}% ${(1 - mouseY) * 100}%, 
          rgba(255, 51, 51, 0.2) 0%, 
          transparent 70%)
      `;
    });
  }
});