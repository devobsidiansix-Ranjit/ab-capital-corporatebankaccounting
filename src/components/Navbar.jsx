import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

/**
 * Navigation header component with responsive mobile drawer menu.
 */
const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollDistance = documentHeight - windowHeight;
      if (scrollDistance > 0) {
        const percentage = (scrollTop / scrollDistance) * 100;
        setScrollPercent(percentage);
      } else {
        setScrollPercent(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
        <div className="nav-brand">
          <a href="#" className="nav-logo-link" onClick={handleLinkClick}>
            <img src={logoImg} alt="AB Capital Brand Logo" className="nav-logo-img" />
          </a>
        </div>
        
        {/* Desktop Links (Hidden on mobile via CSS) */}
        <div className="nav-right desktop-only">
          <a href="#process" className="nav-link">How It Works</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <button 
            onClick={onOpenConsultation} 
            className="nav-cta"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            Get Free Consultation
          </button>
        </div>

        {/* Mobile Actions (Phone & Hamburger) */}
        <div className="nav-mobile-actions">
          <a href="tel:+971585699300" className="nav-phone-link" aria-label="Call AB Capital">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <button 
            className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Scroll Progress Bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }}></div>
      </nav>

      {/* Mobile Nav Overlay Menu */}
      <div className={`nav-mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-links">
          <a href="#process" className="nav-mobile-link" onClick={handleLinkClick}>How It Works</a>
          <a href="#services" className="nav-mobile-link" onClick={handleLinkClick}>Services</a>
          <a href="#faq" className="nav-mobile-link" onClick={handleLinkClick}>FAQ</a>
          <button 
            className="nav-mobile-cta" 
            onClick={() => {
              handleLinkClick();
              onOpenConsultation();
            }}
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
