import React, { useState } from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { LightboxModal } from '../components/LightboxModal';
import { Icon } from '../components/Icons';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: `All Photos (${propertyData.gallery.length})` },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'terrace', label: 'Terrace & Garden' },
    { id: 'exterior', label: 'Exterior & Grounds' },
    { id: 'bathroom', label: 'Private Bathrooms' },
    { id: 'surroundings', label: 'Coast & Surroundings' }
  ];

  const filteredItems = activeCategory === 'all'
    ? propertyData.gallery
    : propertyData.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="page-gallery">
      <PageHero
        badge="Visual Showcase"
        title="Photo Gallery & Villa Tour"
        subtitle="Step inside Simlaya Inn. Explore our sunlit verandas, handcrafted teak suites, sparkling en-suite bathrooms, and the golden shores of Hikkaduwa."
        backgroundImage="/assets/images/hero.jpg"
        breadcrumbs={[{ label: 'Photo Gallery' }]}
      />

      <section className="section gallery-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Property Tour</span>
            <h2 className="section-heading">Glimpse Your Tropical Getaway</h2>
            <p className="section-subheading">
              Click any photograph to view high-resolution details in full-screen gallery view.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="filter-tabs-wrapper">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((photo, idx) => (
              <div
                key={photo.id}
                className="gallery-item-card"
                onClick={() => handleOpenLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleOpenLightbox(idx);
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="gallery-thumbnail"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-tag">{photo.tag}</span>
                  <h4 className="gallery-item-title">{photo.title}</h4>
                  <div className="gallery-item-action">
                    <Icon name="sparkles" size={16} />
                    <span>View Photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Love What You See?"
        description="Secure your preferred room today and enjoy your peaceful getaway at Simlaya Inn."
        primaryBtnText="Check Room Rates"
        primaryBtnLink="/rooms"
      />

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};
