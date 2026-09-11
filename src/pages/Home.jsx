import React from 'react';
import { Link } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { Icon } from '../components/Icons';
import { PageCTA } from '../components/PageCTA';

export const Home = () => {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content-wrapper">
          <div className="hero-text-content">
            <div className="hero-badge">
              <span className="badge-star">★ 5.0</span>
              <span>Top Rated Coastal Villa in Hikkaduwa</span>
            </div>

            <h1 className="hero-title">
              Your Peaceful <br />
              <em>Coastal Sanctuary</em> in Hikkaduwa
            </h1>

            <p className="hero-subtitle">
              {propertyData.property.subTagline} Experience warm hospitality, lush botanical gardens, and refined comfort just steps from the ocean waves.
            </p>

            <div className="hero-actions">
              <Link to="/rooms" className="btn btn-primary">
                Explore Rooms
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            {propertyData.trustBadges.map((badge, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-icon-wrap">
                  <Icon name={badge.icon} size={22} className="trust-icon" />
                </div>
                <div className="trust-info">
                  <h4 className="trust-title">{badge.title}</h4>
                  <p className="trust-desc">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Teaser / Homestay Story */}
      <section className="section intro-story-section">
        <div className="container intro-story-grid">
          <div className="intro-image-stack">
            <img
              src="/assets/images/hero.jpg"
              alt="Simlaya Inn front terrace"
              className="intro-img-main"
            />
            <div className="intro-badge-floating">
              <div className="badge-stars">★★★★★</div>
              <span className="badge-title">5.0 Star Guest Score</span>
              <span className="badge-desc">100% Genuine Reviews</span>
            </div>
          </div>

          <div className="intro-text-content">
            <span className="section-badge-teal">About Simlaya Inn</span>
            <h2 className="section-heading">
              A Serene Coastal Haven Designed for True Rest
            </h2>
            <p className="section-lead">
              Tucked into a tranquil residential palm grove at <strong>23/12 Wallawwaththa</strong>, Simlaya Inn brings together the intimacy of an authentic Sri Lankan homestay with the comfort and privacy of a boutique villa.
            </p>
            <p className="intro-body-text">
              Located only <strong>750 meters (an easy 8-minute walk)</strong> from the golden sands of Hikkaduwa Beach and 400 meters from the railway station, you enjoy effortless access to the ocean, surf breaks, and restaurants while returning to peaceful tropical garden surroundings each night.
            </p>

            <div className="intro-features-list">
              <div className="intro-feature-item">
                <Icon name="check" size={18} className="text-terracotta" />
                <span>Private en-suite bathrooms & quiet inverter AC in all rooms</span>
              </div>
              <div className="intro-feature-item">
                <Icon name="check" size={18} className="text-terracotta" />
                <span>Expansive garden verandas & sunbathing terraces</span>
              </div>
              <div className="intro-feature-item">
                <Icon name="check" size={18} className="text-terracotta" />
                <span>High-speed fiber WiFi for remote workers and travelers</span>
              </div>
            </div>

            <div className="intro-cta-row">
              <Link to="/rooms" className="btn btn-teal">
                View All Rooms
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link to="/location" className="btn btn-outline-teal">
                See Map & Distance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Teaser Preview Cards (Linking to separate pages) */}
      <section className="section preview-cards-section bg-sand-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Discover Your Stay</span>
            <h2 className="section-heading">Explore Simlaya Inn</h2>
            <p className="section-subheading">
              Browse dedicated pages to explore our accommodations, amenities, location, and guest testimonials.
            </p>
          </div>

          <div className="preview-cards-grid">
            {/* Card 1: Rooms */}
            <div className="preview-card">
              <div className="preview-card-image">
                <img src="/assets/images/room-deluxe.jpg" alt="Rooms at Simlaya Inn" />
                <span className="preview-badge">From LKR 12,500/nt</span>
              </div>
              <div className="preview-card-body">
                <h3>Rooms & Suites</h3>
                <p>Choose from our Deluxe Garden Rooms, Balcony Suite with dining nook, or book the entire private villa.</p>
                <Link to="/rooms" className="preview-card-link">
                  <span>Browse Rooms Listings</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: Amenities */}
            <div className="preview-card">
              <div className="preview-card-image">
                <img src="/assets/images/garden-terrace.jpg" alt="Villa Amenities" />
                <span className="preview-badge">Tropical Comfort</span>
              </div>
              <div className="preview-card-body">
                <h3>Property Amenities</h3>
                <p>Enjoy free WiFi, en-suite hot showers, non-smoking rooms, secure parking, and lush botanical verandas.</p>
                <Link to="/amenities" className="preview-card-link">
                  <span>View All Facilities</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="preview-card">
              <div className="preview-card-image">
                <img src="/assets/images/beach.jpg" alt="Hikkaduwa Beach" />
                <span className="preview-badge">750m to Beach</span>
              </div>
              <div className="preview-card-body">
                <h3>Location & Distances</h3>
                <p>Minutes to Hikkaduwa Railway, Coral Reef marine sanctuary, turtle spots, cafes, and historic Galle Fort.</p>
                <Link to="/location" className="preview-card-link">
                  <span>Explore Interactive Map</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>

            {/* Card 4: Reviews */}
            <div className="preview-card">
              <div className="preview-card-image">
                <img src="/assets/images/suite-balcony.jpg" alt="Guest Reviews" />
                <span className="preview-badge">5.0★ Google Rating</span>
              </div>
              <div className="preview-card-body">
                <h3>Guest Reviews</h3>
                <p>Read authentic feedback from travelers around the world who loved their stay at Simlaya Inn.</p>
                <Link to="/reviews" className="preview-card-link">
                  <span>Read Guest Stories</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Ready to Escape to Hikkaduwa?"
        description="Book directly through our website or WhatsApp for personalized service and guaranteed best pricing."
      />
    </div>
  );
};
