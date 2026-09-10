import React from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { Icon } from '../components/Icons';

export const ThingsToDo = () => {
  return (
    <div className="page-things-to-do">
      <PageHero
        badge="Excursions & Experiences"
        title="Things To Do in Hikkaduwa"
        subtitle="Immerse yourself in world-class surfing, marine wildlife encounters, UNESCO heritage ramparts, and flavorful Sri Lankan culinary adventures."
        backgroundImage="/assets/images/beach.jpg"
        breadcrumbs={[{ label: 'Things To Do' }]}
      />

      <section className="section activities-grid-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Curated Local Adventures</span>
            <h2 className="section-heading">Unforgettable Experiences from Simlaya Inn</h2>
            <p className="section-subheading">
              Our hosts can arrange trusted local guides, scooter rentals, and boat tours directly for our guests.
            </p>
          </div>

          <div className="activities-grid">
            {propertyData.thingsToDo.map((activity, idx) => (
              <article key={idx} className="activity-card">
                <div className="activity-card-image-wrap">
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                  <span className="activity-badge">{activity.badge}</span>
                </div>

                <div className="activity-card-content">
                  <div className="activity-meta-row">
                    <span className="activity-loc">
                      <Icon name="map-pin" size={14} /> {activity.location}
                    </span>
                    <span className="activity-dist">
                      <Icon name="compass" size={14} /> {activity.distance}
                    </span>
                  </div>

                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-desc">{activity.desc}</p>

                  <div className="activity-footer-row">
                    <span className="activity-duration">
                      <Icon name="clock" size={14} /> Duration: {activity.duration}
                    </span>
                    <a
                      href={`https://wa.me/94777778853?text=${encodeURIComponent(`Hi Simlaya Inn! I am interested in doing the ${activity.title} during my stay.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-action"
                    >
                      <span>Inquire Tour</span>
                      <Icon name="arrow-right" size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Concierge Info Box */}
      <section className="section bg-sand-subtle">
        <div className="container">
          <div className="concierge-highlight-box">
            <div className="concierge-content">
              <span className="section-badge-sand">Local Insights</span>
              <h3>Need Personalized Day Trip Planning?</h3>
              <p>
                From arranging early morning whale watching boat transfers to booking surf lessons with ISA-certified instructors or renting a reliable scooter, our host is delighted to help organize your itinerary at local resident rates.
              </p>
            </div>
            <div className="concierge-action">
              <a
                href={`https://wa.me/94777778853?text=${encodeURIComponent("Hello! Can you assist me with planning day trips and tours in Hikkaduwa?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" size={18} />
                <span>Chat with Tour Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Stay at Simlaya Inn, Explore Sri Lanka’s South Coast"
        description="Book your peaceful room base in Hikkaduwa and let us handle your memorable excursions."
        primaryBtnText="View Room Rates"
        primaryBtnLink="/rooms"
      />
    </div>
  );
};
