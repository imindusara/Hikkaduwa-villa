import React from 'react';
import { Link } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { Icon } from './Icons';

export const PageCTA = ({
  title = "Ready for Your Coastal Escape?",
  description = "Book directly with Simlaya Inn for the guaranteed best rates, flexible cancellation, and complimentary Ceylon tea hospitality.",
  primaryBtnText = "Check Availability & Reserve",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Explore Our Rooms",
  secondaryBtnLink = "/rooms"
}) => {
  return (
    <section className="section page-cta-section">
      <div className="container">
        <div className="page-cta-card">
          <div className="page-cta-content">
            <span className="section-badge-sand">Direct Booking Privilege</span>
            <h2 className="cta-heading">{title}</h2>
            <p className="cta-description">{description}</p>
            
            <div className="cta-actions">
              <Link to={primaryBtnLink} className="btn btn-primary">
                {primaryBtnText}
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link to={secondaryBtnLink} className="btn btn-outline-white">
                {secondaryBtnText}
              </Link>
              <a
                href={`https://wa.me/94777778853?text=${encodeURIComponent("Hello Simlaya Inn! I would like to check availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                title="Chat on WhatsApp"
              >
                <Icon name="whatsapp" size={18} />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
