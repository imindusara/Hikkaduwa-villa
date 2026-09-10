import React, { useEffect } from 'react';
import { Icon } from './Icons';

export const LightboxModal = ({ items, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          <Icon name="x" size={24} />
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous photo"
        >
          <Icon name="chevron-left" size={28} />
        </button>

        <div className="lightbox-image-wrapper">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="lightbox-image"
          />
          <div className="lightbox-caption">
            <span className="lightbox-tag">{currentItem.tag || currentItem.category}</span>
            <h4 className="lightbox-title">{currentItem.title}</h4>
            <span className="lightbox-counter">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>

        <button
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next photo"
        >
          <Icon name="chevron-right" size={28} />
        </button>
      </div>
    </div>
  );
};
