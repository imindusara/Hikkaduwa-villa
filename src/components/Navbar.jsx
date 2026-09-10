import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { Icon } from './Icons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change & scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Rooms' },
    { to: '/amenities', label: 'Amenities' },
    { to: '/location', label: 'Location' },
    { to: '/things-to-do', label: 'Things To Do' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/policies', label: 'Policies' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="Simlaya Inn Home">
          <div className="brand-logo-icon">✦</div>
          <div className="brand-logo-text">
            <span className="brand-name">{propertyData.property.name}</span>
            <span className="brand-tagline">VILLA & HOMESTAY</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-menu" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA / Phone Actions */}
        <div className="nav-actions">
          <a
            href={`tel:${propertyData.property.intlPhone}`}
            className="nav-phone"
            title="Call Simlaya Inn"
          >
            <Icon name="phone" size={16} />
            <span>{propertyData.property.phone}</span>
          </a>

          <Link to="/contact" className="btn btn-primary btn-sm">
            <span>Check Availability</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`drawer-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-name">{propertyData.property.name}</div>
          <button
            className="drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <Icon name="x" size={20} />
          </button>
        </div>

        <div className="drawer-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={link.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="drawer-footer">
          <a
            href={`tel:${propertyData.property.intlPhone}`}
            className="mobile-phone-btn"
          >
            <Icon name="phone" size={18} />
            <span>Call Host: {propertyData.property.phone}</span>
          </a>

          <Link
            to="/contact"
            className="btn btn-primary btn-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Check Availability & Book
          </Link>
        </div>
      </div>
    </header>
  );
};
