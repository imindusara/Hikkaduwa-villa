import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';

export const ReviewModal = ({ onClose, onAddReview }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const newReview = {
      id: `rev-${Date.now()}`,
      author: name,
      country: country || 'Guest',
      rating: Number(rating),
      source: 'Verified Guest',
      date: 'Just now',
      avatar: initials || 'VG',
      title: title || 'Wonderful stay in Hikkaduwa',
      text: text
    };

    onAddReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container review-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close review modal">
          <Icon name="x" size={22} />
        </button>

        <div className="modal-body">
          {submitted ? (
            <div className="review-success-state">
              <div className="success-icon-wrap">
                <Icon name="check" size={36} />
              </div>
              <h3>Thank You for Your Feedback!</h3>
              <p>Your review has been shared and will help other travelers discover Simlaya Inn.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="review-form">
              <span className="section-badge-teal">Share Your Experience</span>
              <h2 className="modal-title">Write a Guest Review</h2>
              <p className="modal-subtitle">We appreciate you taking the time to share your feedback about Simlaya Inn.</p>

              <div className="form-group">
                <label className="form-label">Rating</label>
                <div className="rating-select-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={`star-select-btn ${star <= rating ? 'selected' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      <Icon name="star" size={24} />
                    </button>
                  ))}
                  <span className="rating-text-label">{rating} / 5 Stars</span>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Country / Home City</label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Headline / Title</label>
                <input
                  type="text"
                  placeholder="e.g. Peaceful haven close to the beach!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Review *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the room, garden, cleanliness, host hospitality, or Hikkaduwa beach..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div className="modal-actions-bar">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
