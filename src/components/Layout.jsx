import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export const Layout = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
