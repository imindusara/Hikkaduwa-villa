import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { Icon } from '../components/Icons';

export const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="page-rooms">
      <PageHero
        badge="Boutique Accommodations"
        title="Rooms & Private Suites"
        subtitle="Thoughtfully crafted sanctuaries featuring handcrafted teak furnishings, quiet inverter air conditioning, en-suite rain showers, and tranquil garden verandas."
        backgroundImage="/assets/images/room-deluxe.jpg"
        breadcrumbs={[{ label: 'Rooms & Suites' }]}
      />

      <section className="section rooms-listing-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Choice Accommodations</span>
            <h2 className="section-heading">Select Your Coastal Sanctuary</h2>
            <p className="section-subheading">
              All rooms include en-suite private bathrooms, continuous hot water, high-speed fiber WiFi, fresh linens, daily housekeeping, and free private parking.
            </p>
          </div>

          <div className="rooms-grid-stacked">
            {propertyData.rooms.map((room) => (
              <article key={room.id} className="room-card-horizontal">
                <div className="room-card-image-wrap">
                  <img src={room.image} alt={room.name} loading="lazy" />
                  {room.badge && <span className="room-badge-pill">{room.badge}</span>}
                </div>

                <div className="room-card-content">
                  <div className="room-header-flex">
                    <div>
                      <h3 className="room-title">{room.name}</h3>
                      <p className="room-tagline">{room.tagline}</p>
                    </div>
                    <div className="room-pricing-block">
                      <span className="pricing-currency">LKR</span>
                      <span className="pricing-amount">{room.pricePerNight.toLocaleString()}</span>
                      <span className="pricing-unit">/ night</span>
                    </div>
                  </div>

                  <div className="room-spec-chips">
                    <span className="spec-chip">
                      <Icon name="users" size={14} /> {room.capacity} Guests
                    </span>
                    <span className="spec-chip">
                      <Icon name="home" size={14} /> {room.bed}
                    </span>
                    <span className="spec-chip">
                      <Icon name="sparkles" size={14} /> {room.size}
                    </span>
                    <span className="spec-chip">
                      <Icon name="sun" size={14} /> {room.view}
                    </span>
                  </div>

                  <p className="room-description-text">{room.description}</p>

                  <div className="room-highlights-box">
                    <h4 className="highlights-title">Key Features:</h4>
                    <ul className="highlights-pills-list">
                      {room.highlights.slice(0, 4).map((h, i) => (
                        <li key={i}>
                          <Icon name="check" size={14} className="text-teal" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="room-card-actions">
                    <button
                      type="button"
                      className="btn btn-outline-teal"
                      onClick={() => setSelectedRoom(room)}
                    >
                      View Full Details
                    </button>
                    <Link
                      to={`/contact?room=${room.id}`}
                      className="btn btn-primary"
                    >
                      Book This Room
                      <Icon name="arrow-right" size={16} />
                    </Link>
                    <a
                      href={`https://wa.me/94777778853?text=${encodeURIComponent(`Hi Simlaya Inn! I would like to reserve the ${room.name} (LKR ${room.pricePerNight.toLocaleString()}/night).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-whatsapp"
                      title="Quick WhatsApp Booking"
                    >
                      <Icon name="whatsapp" size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Need a Custom Group or Extended Stay Rate?"
        description="Traveling with family, friends, or planning a long stay in Hikkaduwa? Contact our host directly for custom packages and airport transfers."
        primaryBtnText="Contact Host Directly"
        primaryBtnLink="/contact"
      />

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};
