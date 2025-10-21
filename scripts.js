// Sample gallery data - replace with actual image URLs
const galleryData = [
  {
    id: 1,
    category: 'nature',
    description: 'Mountain landscape at sunset',
    color: '#ff7e5f',
    src: "photo1.jpg"
  },
  {
    id: 2,
    category: 'portrait',
    description: 'Urban portrait photography',
    color: '#feb47b',
    src: "photo2.webp"
  },
  {
    id: 3,
    category: 'architecture',
    description: 'Modern building geometry',
    color: '#7bc6cc',
    src: "photo3.jpg"
  },
  {
    id: 4,
    category: 'street',
    description: 'Street life moments',
    color: '#00c6fb',
    src: "photo4.webp"
  },
  {
    id: 5,
    category: 'nature',
    description: 'Ocean waves at dawn',
    color: '#1b2980',
    src: "photo5.jpg"
  },
  {
    id: 6,
    category: 'portrait',
    description: 'Studio lighting portraits',
    color: '#ff3366',
    src: "photo6.jpg"
  },
  {
    id: 7,
    category: 'portrait',
    description: 'Me lmao',
    color: '#ff3366',
    src: "photo7.jpg"
  }
];

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initScrollAnimation();
  initContactForm();
  initCounters();
  initFilters();
  initTestimonialCarousel();
  initParallax();
  
  // Add specialty cards animation
  const specialtyCards = document.querySelectorAll('.specialty-card');
  const specialtyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1
  });

  specialtyCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    specialtyObserver.observe(card);
  });

  // Add floating animation to bio blob
  const bioBlob = document.querySelector('.bio-blob');
  let rotation = 0;
  
  function animateBlob() {
    rotation += 0.2;
    bioBlob.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(animateBlob);
  }
  
  animateBlob();
});

function initGallery() {
  const gallery = document.querySelector('.gallery-grid');
  
  galleryData.forEach(item => {
    const element = document.createElement('div');
    element.className = 'gallery-item';
    element.setAttribute('data-category', item.category);
    element.innerHTML = `
      <div style="background: ${item.color}; width: 100%; height: 100%; border-radius: 10px;">
        <svg style="display: none;" viewBox="0 0 24 24" style="width: 100%; height: 100%; opacity: 0.2;">
          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 7L13 9l-3 4-2-3-3 6h13z"/>
        </svg>
        <img src="${item.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;" alt="${item.description}">
      </div>
    `;
    
    gallery.appendChild(element);
  });
}

function initScrollAnimation() {
  const sections = document.querySelectorAll('section');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Animate children with stagger effect
        const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('in-view');
          }, index * 100);
        });
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '-50px'
  });

  sections.forEach(section => {
    section.classList.add('animate-section');
    scrollObserver.observe(section);
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}

function animateCounter(counter, target) {
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smoother animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    
    const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
    counter.textContent = currentValue.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
}

// Add category filter functionality
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function initTestimonialCarousel() {
  const container = document.querySelector('.testimonial-container');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  let currentIndex = 0;

  // Créer les points de navigation
  testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Mettre à jour les classes active
    testimonials.forEach((testimonial, index) => {
      testimonial.classList.toggle('active', index === currentIndex);
      dotsContainer.children[index].classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Auto-play
  setInterval(nextSlide, 5000);
}

function initParallax() {
  const hero = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-text');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate * 0.7}px)`;
      heroText.style.transform = `translateY(${rate * 0.3}px)`;
    }
  });
}