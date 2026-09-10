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

  // Close mobile drawer on route change
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
      <div className="header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="Simlaya Inn Home">
          <div className="logo-icon-wrapper">
            <span className="logo-symbol">✦</span>
          </div>
          <div className="logo-text-group">
            <span className="brand-title">{propertyData.property.name}</span>
            <span className="brand-subtitle">VILLA & HOMESTAY</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA / Phone Actions */}
        <div className="header-actions">
          <a
            href={`tel:${propertyData.property.intlPhone}`}
            className="phone-quick-link"
            title="Call Simlaya Inn"
          >
            <Icon name="phone" size={16} />
            <span className="phone-number">{propertyData.property.phone}</span>
          </a>

          <Link to="/contact" className="btn-book-nav">
            <span className="btn-text">Check Availability</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="brand-title">{propertyData.property.name}</div>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <Icon name="x" size={20} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
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
      </div>
    </header>
  );
};
