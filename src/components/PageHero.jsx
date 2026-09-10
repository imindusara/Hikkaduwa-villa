import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export const PageHero = ({
  badge = 'Simlaya Inn Hikkaduwa',
  title,
  subtitle,
  backgroundImage = '/assets/images/hero.jpg',
  breadcrumbs = []
}) => {
  return (
    <section className="page-hero-banner" style={{ backgroundImage: `linear-gradient(rgba(8, 40, 50, 0.78), rgba(8, 40, 50, 0.88)), url(${backgroundImage})` }}>
      <div className="container page-hero-content">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link to="/" className="breadcrumb-link">
            <Icon name="home" size={14} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <Icon name="chevron-right" size={12} className="breadcrumb-separator" />
              {crumb.to ? (
                <Link to={crumb.to} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="page-hero-badge-wrapper">
          <span className="page-hero-badge">{badge}</span>
        </div>

        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};
