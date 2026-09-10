import React from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { Icon } from '../components/Icons';

export const Amenities = () => {
  return (
    <div className="page-amenities">
      <PageHero
        badge="Comfort & Convenience"
        title="Villa Amenities & Facilities"
        subtitle="Every amenity at Simlaya Inn is tailored to make your coastal holiday in Hikkaduwa restful, seamless, and authentically refreshing."
        backgroundImage="/assets/images/garden-terrace.jpg"
        breadcrumbs={[{ label: 'Amenities' }]}
      />

      <section className="section amenities-grid-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Thoughtful Details</span>
            <h2 className="section-heading">Everything You Need for a Relaxing Stay</h2>
            <p className="section-subheading">
              From continuous hot water and whisper-quiet AC to botanical garden relaxation verandas and free fiber WiFi.
            </p>
          </div>

          <div className="amenities-category-grid">
            {propertyData.amenitiesGrouped.map((cat, idx) => (
              <div key={idx} className="amenity-category-card">
                <div className="amenity-cat-header">
                  <div className="amenity-cat-icon">
                    <Icon name={cat.icon} size={22} />
                  </div>
                  <h3 className="amenity-cat-title">{cat.category}</h3>
                </div>

                <ul className="amenity-items-list">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="amenity-item-row">
                      <div className="amenity-item-bullet">
                        <Icon name="check" size={14} className="text-teal" />
                      </div>
                      <div className="amenity-item-text">
                        <strong>{item.name}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Villa Features Banner */}
      <section className="section bg-sand-subtle">
        <div className="container">
          <div className="hospitality-banner-card">
            <div className="hospitality-text">
              <span className="section-badge-sand">Warm Sri Lankan Hospitality</span>
              <h3>Personalized Guest Concierge</h3>
              <p>
                As a family-operated boutique homestay, our team is always on hand to assist with airport taxi transfers, scooter rentals, Ceylon tea service, turtle tours, and authentic local restaurant recommendations.
              </p>
            </div>
            <div className="hospitality-badges">
              <div className="badge-item">
                <Icon name="sparkles" size={24} />
                <span>Daily Housekeeping</span>
              </div>
              <div className="badge-item">
                <Icon name="wifi" size={24} />
                <span>High-Speed WiFi</span>
              </div>
              <div className="badge-item">
                <Icon name="car" size={24} />
                <span>Private Gated Parking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Experience Simlaya Inn Comfort Firsthand"
        description="Book direct for instant confirmation, friendly host support, and complimentary morning tea."
        primaryBtnText="Check Room Availability"
        primaryBtnLink="/contact"
      />
    </div>
  );
};
