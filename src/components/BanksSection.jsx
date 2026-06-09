import React from 'react';
import banksImg from '../assets/banks_visual.png';

// Import bank logos
import wioLogo from '../assets/bank_logos/wio.png';
import emiratesIslamicLogo from '../assets/bank_logos/emirates_islamic.png';
import mbankLogo from '../assets/bank_logos/mbank.png';
import banqueMisrLogo from '../assets/bank_logos/banque_misr.png';
import adibLogo from '../assets/bank_logos/adib.png';
import fabLogo from '../assets/bank_logos/fab.png';
import ublLogo from '../assets/bank_logos/ubl.png';
import ruyaLogo from '../assets/bank_logos/ruya.png';

/**
 * Redesigned BanksSection matching the high-fidelity Image 5 banking layout.
 * Equipped with responsive vector SVG bank logos, statistics, and a vertical blockquote panel.
 */
const BanksSection = () => {
  return (
    <section className="banks-sec reveal" id="banks">
      
      {/* Image 5 Header Layout */}
      <div className="banks-top-row">
        <div>
          <div className="eyebrow">Banking Network</div>
          <h2>8 Bank <em>Partnerships</em></h2>
          <p className="section-lead">
            We don't submit blind applications. Our consultants have direct working relationships with compliance teams at major UAE banks.
          </p>
        </div>

        {/* 3 Horizontal Metrics Pills */}
        <div className="banks-metrics-horizontal">
          <div className="bank-metric-pill-item reveal d1">
            <span className="bank-metric-badge-dot"></span>
            Direct Relationships
          </div>
          <div className="bank-metric-pill-item reveal d2">
            <span className="bank-metric-badge-dot"></span>
            Higher Success Rate
          </div>
          <div className="bank-metric-pill-item reveal d3">
            <span className="bank-metric-badge-dot"></span>
            Faster Process
          </div>
        </div>
      </div>

      {/* Path row label */}
      <div className="banks-path-sep">
        Our Banking Partners
      </div>

      {/* Responsive Grid with Bank Logos */}
      <div className="banks-logos-grid">
        
        {/* 1. Wio Bank */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={wioLogo} alt="Wio Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Wio Bank</span>
        </div>

        {/* 2. Emirates Islamic Bank */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={emiratesIslamicLogo} alt="Emirates Islamic Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Emirates Islamic Bank</span>
        </div>

        {/* 3. M Bank (Al Mariah community) */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={mbankLogo} alt="M Bank (Al Mariah Community Bank) Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">M Bank (Al Mariah community)</span>
        </div>

        {/* 4. Bank A Misr */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={banqueMisrLogo} alt="Bank A Misr Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Bank A Misr</span>
        </div>

        {/* 5. ADIB */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={adibLogo} alt="ADIB Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">ADIB</span>
        </div>

        {/* 6. Ruya Bank */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={ruyaLogo} alt="Ruya Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Ruya Bank</span>
        </div>

        {/* 7. FAB */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={fabLogo} alt="FAB Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">FAB</span>
        </div>

        {/* 8. UBL */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={ublLogo} alt="UBL Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">UBL</span>
        </div>

      </div>

      {/* Underneath Stats and Visual Testimonial Panel */}
      <div className="banks-footer-container">
        
        {/* Left Column: Caution Disclaimer Box & Stats Pillars */}
        <div>
          <div className="banks-corporate-caution-box reveal d1">
            <div className="banks-caution-top">
              <div className="banks-caution-icon">
                {/* Shield Check SVG */}
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="banks-caution-text">
                <p>
                  <strong>Corporate accounts only.</strong> We do not assist with personal banking. Our service covers UAE Free Zone, Mainland, and Offshore companies exclusively.
                </p>
              </div>
            </div>

            {/* Stats Pillars */}
            <div className="banks-stats-row">
              {/* Stat 1 */}
              <div className="bank-stat-icon-item">
                <div className="bank-stat-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div className="bank-stat-copy">
                  <h5>8</h5>
                  <p>Bank Partners</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bank-stat-icon-item">
                <div className="bank-stat-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="bank-stat-copy">
                  <h5>5+</h5>
                  <p>Years Presence</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bank-stat-icon-item">
                <div className="bank-stat-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="bank-stat-copy">
                  <h5>240+</h5>
                  <p>Client Approvals</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Tall quote banner overlaid with a blockquote */}
        <div className="banks-quote-banner-container reveal d2">
          <img
            src={banksImg}
            alt="View of bank skyscrapers in Dubai marina waterfront"
            className="banks-quote-banner-img"
          />
          <div className="banks-quote-banner-overlay"></div>
          <div className="banks-quote-banner-content">
            <span className="banks-quote-mark">“</span>
            <p className="banks-quote-text">
              Strong relationships. Trusted by leading banks in the UAE.
            </p>
            <div className="banks-quote-sep-line"></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default BanksSection;
