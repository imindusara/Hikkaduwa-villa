import React, { useState } from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { Icon } from '../components/Icons';

export const Location = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Places' },
    { id: 'beaches', label: 'Beaches & Reefs' },
    { id: 'transport', label: 'Transport & Stations' },
    { id: 'dining', label: 'Dining & Cafes' },
    { id: 'sightseeing', label: 'Sightseeing & Culture' }
  ];

  const filteredDistances = activeCategory === 'all'
    ? propertyData.distances
    : propertyData.distances.filter((d) => d.category === activeCategory);

  return (
    <div className="page-location">
      <PageHero
        badge="Coastal Hikkaduwa"
        title="Location & Neighborhood"
        subtitle="Conveniently situated at 23/12 Wallawwaththa in a serene tropical lane — 750m from Hikkaduwa Beach and 400m from the railway station."
        backgroundImage="/assets/images/beach.jpg"
        breadcrumbs={[{ label: 'Location' }]}
      />

      {/* Address & Quick Overview */}
      <section className="section location-overview-section">
        <div className="container">
          <div className="location-info-bar">
            <div className="info-bar-item">
              <Icon name="map-pin" size={24} className="text-terracotta" />
              <div>
                <strong>Villa Address</strong>
                <p>{propertyData.property.address.street}, {propertyData.property.address.city}, Sri Lanka</p>
              </div>
            </div>
            <div className="info-bar-item">
              <Icon name="umbrella" size={24} className="text-teal" />
              <div>
                <strong>Beach Proximity</strong>
                <p>750 meters (8 min scenic stroll)</p>
              </div>
            </div>
            <div className="info-bar-item">
              <Icon name="train" size={24} className="text-terracotta" />
              <div>
                <strong>Railway Station</strong>
                <p>150 – 400 meters (2–4 min walk)</p>
              </div>
            </div>
            <div className="info-bar-item">
              <Icon name="plane" size={24} className="text-teal" />
              <div>
                <strong>Airport Access</strong>
                <p>Bandaranaike Intl (CMB) via Expressway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Nearby Distances */}
      <section className="section bg-sand-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Proximity & Access</span>
            <h2 className="section-heading">Nearby Landmarks & Travel Times</h2>
            <p className="section-subheading">
              Explore how conveniently located Simlaya Inn is to Hikkaduwa’s finest beaches, transit links, and dining spots.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs-wrapper">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Distances Grid */}
          <div className="distances-grid">
            {filteredDistances.map((item, idx) => (
              <div key={idx} className="distance-card">
                <div className="distance-card-top">
                  <div className="distance-icon-wrap">
                    <Icon name={item.icon || 'map-pin'} size={20} />
                  </div>
                  <span className="distance-type-tag">{item.type}</span>
                </div>
                <h3 className="distance-title">{item.title}</h3>
                <p className="distance-desc">{item.desc}</p>
                <div className="distance-badge-row">
                  <span className="distance-val">
                    <Icon name="map-pin" size={14} /> {item.distance}
                  </span>
                  <span className="distance-time">
                    <Icon name="clock" size={14} /> {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section map-embed-section">
        <div className="container">
          <div className="map-frame-card">
            <div className="map-header">
              <div>
                <h3 className="map-card-title">Simlaya Inn on Google Maps</h3>
                <p className="map-card-sub">23/12 Wallawwaththa, Hikkaduwa, Southern Province, Sri Lanka</p>
              </div>
              <a
                href="https://maps.google.com/?q=Hikkaduwa,Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-teal btn-sm"
              >
                Open in Google Maps App
              </a>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                title="Simlaya Inn Location Map"
                src={propertyData.property.googleMapsEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & How to Reach */}
      <section className="section directions-guide-section bg-sand-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Easy Arrival</span>
            <h2 className="section-heading">How to Reach Simlaya Inn</h2>
          </div>

          <div className="directions-cards-grid">
            <div className="directions-card">
              <div className="dir-icon-box">
                <Icon name="train" size={24} />
              </div>
              <h3>By Scenic Coastal Train</h3>
              <p>
                Board the coastal train from <strong>Colombo Fort</strong> or <strong>Galle</strong> to <strong>Hikkaduwa Railway Station</strong>. From the station, Simlaya Inn is just a 2–4 minute walk or a 1-minute tuk-tuk ride into Wallawwaththa lane.
              </p>
            </div>

            <div className="directions-card">
              <div className="dir-icon-box">
                <Icon name="bus" size={24} />
              </div>
              <h3>By Highway Express Bus</h3>
              <p>
                Take the Southern Expressway bus from Colombo (Makumbura Multimodal Center / Maharagama) to Galle, or the direct coastal bus (Route 02 / 32) stopping at Hikkaduwa Stand (550m from the inn).
              </p>
            </div>

            <div className="directions-card">
              <div className="dir-icon-box">
                <Icon name="car" size={24} />
              </div>
              <h3>By Private Airport Taxi</h3>
              <p>
                We can arrange direct private air-conditioned taxi transfers from Bandaranaike International Airport (CMB) via the Southern Expressway (approx. 1 hr 45 min). Contact host to schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Planning Your Trip to Hikkaduwa?"
        description="Let our local host assist with your transit directions, arrival time, and room reservations."
        primaryBtnText="Reserve Your Stay"
        primaryBtnLink="/contact"
      />
    </div>
  );
};
