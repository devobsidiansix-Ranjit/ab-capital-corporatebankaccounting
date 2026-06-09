import React from 'react';
import servicesImg from '../assets/services_visual.png';
import corpAccountImg from '../assets/corporate_account.png';
import highRiskImg from '../assets/high_risk_nationality.png';
import recoveryImg from '../assets/rejection_recovery.png';
import neoBankImg from '../assets/digital_neobank.png';
import multiCurrencyImg from '../assets/multi_currency.png';
import documentAttestationImg from '../assets/document_attestation.png';

/**
 * Redesigned ServicesSection matching Image 1's premium background-image card design.
 * Accented with the horizontal journey tracker.
 */
const ServicesSection = () => {
  return (
    <section className="services-sec reveal" id="services">
      
      {/* Header Section */}
      <div className="services-header-layout">
        
        {/* Left Header Description and 3 Checkbox Benefits */}
        <div>
          <div className="eyebrow">Services</div>
          <h2 style={{ marginBottom: '14px' }}>What We Do</h2>
          <p className="section-lead" style={{ marginBottom: '24px' }}>
            Corporate banking only. No personal accounts. Six focused services — one goal: getting your business banked.
          </p>

          <div className="services-benefits-box">
            <div className="service-benefit-item">
              <div className="svc-check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <strong>100% Corporate Focused</strong> · No personal accounts
              </div>
            </div>
            
            <div className="service-benefit-item">
              <div className="svc-check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <strong>Proven Track Record</strong> · Thousands of accounts opened
              </div>
            </div>

            <div className="service-benefit-item">
              <div className="svc-check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <strong>Faster, Smarter, Safer</strong> · Process made simple
              </div>
            </div>
          </div>
        </div>

        {/* Right Header Visual Box with Overlaid Card */}
        <div className="services-visual-container reveal d1">
          <img
            src={servicesImg}
            alt="Glass facades of DIFC area corporate buildings"
            className="services-visual-img"
          />
          <div className="services-visual-overlay">
            <div className="services-overlay-icon">
              {/* Columns Icon */}
              <svg viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <line x1="6" y1="11" x2="6" y2="20" />
                <line x1="18" y1="11" x2="18" y2="20" />
              </svg>
            </div>
            <div className="services-overlay-text">
              <h4>Expert guidance. Right banks.</h4>
              <p>Real results.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Journey Path Section (─── YOUR JOURNEY WITH US ───) */}
      <div className="journey-path-wrap reveal d2">
        <div className="journey-path-title">
          Your Journey With Us
        </div>
        <div className="journey-steps">
          
          {/* Step 1 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 01</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Setup</span>
                <span className="journey-step-desc">Understand your business and goals</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 02</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Documents</span>
                <span className="journey-step-desc">Prepare & verify complete documents</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="21" x2="9" y2="9" />
                <line x1="3" y1="9" x2="21" y2="9" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 03</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Bank Matching</span>
                <span className="journey-step-desc">We find the right banks for your profile</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 04</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Submission</span>
                <span className="journey-step-desc">Application submitted with precision</span>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 05</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Review & Follow-up</span>
                <span className="journey-step-desc">We manage communication and compliance</span>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="journey-step-item">
            <div className="journey-step-circle">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="journey-step-card">
              <span className="journey-step-label">Step 06</span>
              <div className="journey-step-text">
                <span className="journey-step-name">Account Live</span>
                <span className="journey-step-desc">Your corporate account successfully opened</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid Matrix of 6 services with realistic background images */}
      <div className="services-grid">
        
        {/* Card 1: Highlighted "Most Requested" Card */}
        <div className="svc-card highlight reveal d1">
          <div className="svc-card-bg" style={{ backgroundImage: `url(${corpAccountImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Most Requested</span>
          
          <div className="svc-card-content">
            <div className="svc-title">Corporate Account Opening</div>
            <div className="svc-desc">
              Full-service setup for Free Zone, Mainland, or Offshore companies. Bank selection through to active account.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">Free Zone</span>
              <span className="svc-badge">Mainland</span>
              <span className="svc-badge">Offshore</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="svc-card reveal d2">
          <div className="svc-card-bg" style={{ backgroundImage: `url(${highRiskImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Specialist</span>
          
          <div className="svc-card-content">
            <div className="svc-title">High-Risk Nationality Cases</div>
            <div className="svc-desc">
              Nationals from FATF grey-listed or enhanced-scrutiny countries. We know exactly which banks to approach and how.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">50+ Nationalities</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="svc-card reveal d3">
          <div className="svc-card-bg" style={{ backgroundImage: `url(${recoveryImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Recovery</span>
          
          <div className="svc-card-content">
            <div className="svc-title">Post-Rejection Recovery</div>
            <div className="svc-desc">
              Rejected before? We diagnose, rebuild your profile, and resubmit to the right bank. Most cases resolved in 2 weeks.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">Profile Rebuild</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="svc-card reveal">
          <div className="svc-card-bg" style={{ backgroundImage: `url(${neoBankImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Fast-Track</span>
          
          <div className="svc-card-content">
            <div className="svc-title">Digital & Neo-Bank Accounts</div>
            <div className="svc-desc">
              Wio Bank, Mashreq Neo — low minimums, same-week onboarding. Ideal for startups needing to transact fast.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">Wio Bank</span>
              <span className="svc-badge">Fintech</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="svc-card reveal" style={{ transitionDelay: '0.12s' }}>
          <div className="svc-card-bg" style={{ backgroundImage: `url(${multiCurrencyImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Trade</span>
          
          <div className="svc-card-content">
            <div className="svc-title">Multi-Currency Accounts</div>
            <div className="svc-desc">
              For importers, exporters, and trading companies needing SWIFT, letters of credit, and multi-currency capabilities.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">Multi-Currency</span>
              <span className="svc-badge">Trade Finance</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="svc-card reveal" style={{ transitionDelay: '0.24s' }}>
          <div className="svc-card-bg" style={{ backgroundImage: `url(${documentAttestationImg})` }}></div>
          <div className="svc-card-overlay"></div>
          <span className="svc-badge-top">Compliance</span>
          
          <div className="svc-card-content">
            <div className="svc-title">Document Attestation</div>
            <div className="svc-desc">
              MOA attestation, UBO registry, source of funds narrative, business plan — everything prepared to bank-grade standard.
            </div>
            <div className="svc-tags-row">
              <span className="svc-badge">MOA</span>
              <span className="svc-badge">UBO</span>
              <span className="svc-badge">KYC</span>
            </div>
            <a href="#enquiry" className="svc-more">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ServicesSection;
