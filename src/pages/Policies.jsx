import React, { useState } from 'react';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { PageCTA } from '../components/PageCTA';
import { Icon } from '../components/Icons';

export const Policies = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Can I check in after 6:00 PM?",
      a: "Yes! While standard check-in is between 3:00 PM and 6:00 PM, late arrivals or late night airport transfers are easily arranged. Simply message us your estimated arrival time."
    },
    {
      q: "How does payment work upon arrival?",
      a: "Payment is settled in Cash upon check-in. We prefer Sri Lankan Rupees (LKR), but also accept clean foreign currency notes in USD, EUR, or GBP at current official daily bank exchange rates."
    },
    {
      q: "Is there secure parking for cars or motorbikes?",
      a: "Yes, we offer complimentary on-site gated private parking. No prior reservation is required."
    },
    {
      q: "How far is the beach on foot?",
      a: "Hikkaduwa Main Beach is 750 meters away — an easy, flat 8-minute stroll through the pleasant neighborhood lane."
    }
  ];

  return (
    <div className="page-policies">
      <PageHero
        badge="Guest Guidelines"
        title="Villa Rules & Policies"
        subtitle="Clear, honest, and transparent guidelines to guarantee a serene and memorable holiday for every guest staying at Simlaya Inn."
        backgroundImage="/assets/images/room-deluxe.jpg"
        breadcrumbs={[{ label: 'Policies & Rules' }]}
      />

      <section className="section policies-grid-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Peaceful Sanctuary Standards</span>
            <h2 className="section-heading">Simlaya Inn House Guidelines</h2>
            <p className="section-subheading">
              Please review our straightforward policies designed to preserve the calm, clean, and restful ambiance of our property.
            </p>
          </div>

          <div className="policies-cards-grid">
            {propertyData.policies.map((pol, idx) => (
              <div key={idx} className="policy-card">
                <div className="policy-card-header">
                  <div className="policy-icon-wrap">
                    <Icon name={pol.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="policy-title">{pol.title}</h3>
                    <p className="policy-summary">{pol.summary}</p>
                  </div>
                </div>

                <ul className="policy-details-list">
                  {pol.details.map((detail, dIdx) => (
                    <li key={dIdx} className="policy-detail-item">
                      <Icon name="check" size={14} className="text-teal" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="section faq-section bg-sand-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge-teal">Common Queries</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle-icon">
                    <Icon name={openFaq === idx ? 'x' : 'chevron-right'} size={18} />
                  </span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <PageCTA
        title="Have a Special Request or Question?"
        description="We are delighted to accommodate your unique travel requirements. Reach out to our host anytime."
        primaryBtnText="Contact Host"
        primaryBtnLink="/contact"
      />
    </div>
  );
};
