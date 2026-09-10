import React, { useState } from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { ReviewModal } from '../components/ReviewModal';
import { Icon } from '../components/Icons';

export const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(propertyData.reviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview) => {
    setReviewsList([newReview, ...reviewsList]);
  };

  return (
    <div className="page-reviews">
      <PageHero
        badge="Guest Testimonials"
        title="Guest Reviews & Stories"
        subtitle="Discover why guests from around the globe rate Simlaya Inn 5.0 out of 5.0 for cleanliness, tranquility, and warm Sri Lankan hospitality."
        backgroundImage="/assets/images/suite-balcony.jpg"
        breadcrumbs={[{ label: 'Guest Reviews' }]}
      />

      {/* Ratings Highlight Banner */}
      <section className="section reviews-rating-overview-section">
        <div className="container">
          <div className="rating-summary-card">
            <div className="rating-score-box">
              <span className="big-score">5.0</span>
              <div className="stars-group">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="star" size={20} className="star-gold" />
                ))}
              </div>
              <span className="score-caption">Exceptional 5.0★ Google Rating</span>
            </div>

            <div className="rating-metrics-grid">
              <div className="metric-item">
                <span className="metric-num">100%</span>
                <span className="metric-label">Cleanliness & Hygiene</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">5.0★</span>
                <span className="metric-label">Host Hospitality</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">750m</span>
                <span className="metric-label">Proximity to Beach</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">100%</span>
                <span className="metric-label">Would Recommend</span>
              </div>
            </div>

            <div className="rating-action-box">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                <Icon name="star" size={16} />
                <span>Write a Guest Review</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="section reviews-list-section bg-sand-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Verified Testimonials</span>
            <h2 className="section-heading">What Our Guests Say</h2>
          </div>

          <div className="reviews-cards-grid">
            {reviewsList.map((rev) => (
              <article key={rev.id} className="review-card">
                <div className="review-card-header">
                  <div className="reviewer-avatar">{rev.avatar}</div>
                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">{rev.author}</h4>
                    <span className="reviewer-origin">{rev.country} • {rev.date}</span>
                  </div>
                  <span className="review-source-tag">{rev.source}</span>
                </div>

                <div className="review-stars-row">
                  {[...Array(Math.floor(rev.rating))].map((_, i) => (
                    <Icon key={i} name="star" size={16} className="star-gold" />
                  ))}
                  <span className="review-rating-num">{rev.rating.toFixed(1)}</span>
                </div>

                <h3 className="review-title">"{rev.title}"</h3>
                <p className="review-text">{rev.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Experience 5.0★ Hospitality at Simlaya Inn"
        description="Book directly for our guaranteed best rates, flexible cancellation, and personal care."
        primaryBtnText="Check Room Availability"
        primaryBtnLink="/contact"
      />

      {/* Review Modal */}
      {isModalOpen && (
        <ReviewModal
          onClose={() => setIsModalOpen(false)}
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};
