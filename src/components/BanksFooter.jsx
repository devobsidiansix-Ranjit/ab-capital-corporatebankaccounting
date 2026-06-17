import React from 'react';
import banksImg from '../assets/banks_visual.png';

/**
 * BanksFooter component displaying the stats pillars and quote banner (Image 3 elements).
 * Extracted from BanksSection to allow repositioning below the RiskSection.
 */
const BanksFooter = ({ onOpenConsultation }) => {
  return (
    <section className="banks-footer-sec reveal" id="banks-footer" style={{ padding: '0 8% 100px 8%', background: 'var(--bg)' }}>
      <div className="banks-footer-container">
        
        {/* Left Column: Caution Disclaimer Box & Stats Pillars */}
        <div>
          <div className="banks-corporate-caution-box reveal d1">

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
                  <h5>15+</h5>
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

            {/* CTA Button below the stats bubbles */}
            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={onOpenConsultation}
                className="btn-primary" 
                style={{ width: '100%', textAlign: 'center', display: 'block', border: 'none', cursor: 'pointer' }}
              >
                Check Your Eligibility Now →
              </button>
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

export default BanksFooter;
