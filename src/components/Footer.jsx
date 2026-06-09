import React from 'react';
import logoImg from '../assets/logo.png';

/**
 * Footer component containing brand briefs, links columns, and required legal disclaimers.
 */
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <div className="fw" style={{ height: '70px', display: 'flex', alignItems: 'center', marginBottom: '18px', marginLeft: '-24px' }}>
            <img src={logoImg} alt="AB Capital Brand Logo" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <p>
            Corporate banking consultants serving entrepreneurs across Dubai and the UAE since 2014. 10 years · 1,000+ accounts · 50+ nationalities.
          </p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <a href="#enquiry">Corporate Bank Account</a>
          <a href="#enquiry">High-Risk Nationalities</a>
          <a href="#enquiry">Post-Rejection Recovery</a>
          <a href="#enquiry">Document Preparation</a>
          <a href="#enquiry">Multi-Currency Accounts</a>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="https://abcapital.ae" target="_blank" rel="noopener noreferrer">Main Website</a>
          <a href="https://abcapital.ae" target="_blank" rel="noopener noreferrer">Business Setup</a>
          <a href="https://abcapital.ae/book-a-call/" target="_blank" rel="noopener noreferrer">Book a Call</a>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <a href="tel:+971585699300">+971 58 569 9300</a>
          <a href="mailto:info@abcapital.ae">info@abcapital.ae</a>
          <a href="https://wa.me/971585699300" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://abcapital.ae" target="_blank" rel="noopener noreferrer">abcapital.ae</a>
        </div>
      </footer>

      <div className="footer-bottom">
        <span>© 2025 AB Capital Services FZE. All rights reserved.</span>
        <span>Dubai · Abu Dhabi · Sharjah · UAE</span>
      </div>

      <div className="disclaimer">
        AB Capital Services FZE is a business consultancy, not a licensed bank or financial institution. Banking decisions rest solely with the respective banks. Results vary by applicant profile and bank policy. Corporate accounts only.
      </div>
    </>
  );
};

export default Footer;
