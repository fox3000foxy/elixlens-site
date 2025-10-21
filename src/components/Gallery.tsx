import React, { useMemo, useState } from 'react';
import type { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryData: GalleryItem[] = useMemo(() => [
    {
      id: 1,
      category: 'nature',
      description: 'Mountain landscape at sunset',
      color: '#ff7e5f',
      src: 'photo1.jpg'
    },
    {
      id: 2,
      category: 'portrait',
      description: 'Urban portrait photography',
      color: '#feb47b',
      src: 'photo2.webp'
    },
    {
      id: 3,
      category: 'architecture',
      description: 'Modern building geometry',
      color: '#7bc6cc',
      src: 'photo3.jpg'
    },
    {
      id: 4,
      category: 'street',
      description: 'Street life moments',
      color: '#00c6fb',
      src: 'photo4.webp'
    },
    {
      id: 5,
      category: 'nature',
      description: 'Ocean waves at dawn',
      color: '#1b2980',
      src: 'photo5.jpg'
    },
    {
      id: 6,
      category: 'portrait',
      description: 'Studio lighting portraits',
      color: '#ff3366',
      src: 'photo6.jpg'
    },
    {
      id: 7,
      category: 'portrait',
      description: 'Me lmao',
      color: '#ff3366',
      src: 'photo7.jpg'
    }
  ], []);

  const galleryItems = useMemo(() => {
    if (activeFilter === 'all') {
      return galleryData;
    }
    return galleryData.filter(item => item.category === activeFilter);
  }, [activeFilter, galleryData]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="work" className="gallery">
      <div className="section-header">
        <h2>Featured Work</h2>
        <p>Explore a curated selection of my best work, showcasing the beauty of life through my lens.</p>
        <div className="category-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'nature' ? 'active' : ''}`}
            onClick={() => handleFilterClick('nature')}
          >
            Nature
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'portrait' ? 'active' : ''}`}
            onClick={() => handleFilterClick('portrait')}
          >
            Portrait
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'architecture' ? 'active' : ''}`}
            onClick={() => handleFilterClick('architecture')}
          >
            Architecture
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'street' ? 'active' : ''}`}
            onClick={() => handleFilterClick('street')}
          >
            Street
          </button>
        </div>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item" 
            style={{ background: `linear-gradient(45deg, ${item.color}, ${item.color}aa)` }}
          >
            <img src={item.src} alt={item.description} />
            <div className="gallery-overlay">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

