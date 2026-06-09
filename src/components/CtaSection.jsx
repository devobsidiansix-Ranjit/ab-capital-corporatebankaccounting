import React from 'react';
import ImageSlot from './ImageSlot';
import ctaImg from '../assets/cta_visual.png';

/**
 * CtaSection component rendering a bottom conversion panel, list checklist, and contact details.
 */
const CtaSection = () => {
  const ctaPoints = [
    'Free profile assessment — nationality, structure, risk level',
    'Bank matching — right institution for your exact profile',
    'Document preparation to bank-grade compliance standard',
    'Direct submission via our compliance officer relationships',
    'Daily status updates until your account is active',
    'Post-approval onboarding — online banking, card, transfers'
  ];

  return (
    <section className="cta-sec reveal">
      <div className="cta-inner">
        <div className="cta-text">
          <div className="eyebrow">Get Started</div>
          <h2>
            Your Account is One<br />
            <em>Conversation Away.</em>
          </h2>
          <p>
            Don't lose business because you don't have a UAE corporate bank account. Talk to our advisors today — free, no obligation.
          </p>

          <div className="cta-actions">
            <a href="#enquiry" className="btn-primary">
              Get Free Consultation →
            </a>
            <a href="https://wa.me/971585699300" className="btn-ghost" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>

          <div className="cta-detail">
            <strong style={{ color: 'var(--ink-mid)' }}>AB Capital Services FZE</strong>
            <br />
            <a href="tel:+971585699300">+971 58 569 9300</a> &nbsp;·&nbsp;
            <a href="mailto:info@abcapital.ae">info@abcapital.ae</a> &nbsp;·&nbsp;
            <a href="https://abcapital.ae" target="_blank" rel="noopener noreferrer">
              abcapital.ae
            </a>
          </div>
        </div>

        <div className="cta-aside">
          <ImageSlot
            src={ctaImg}
            alt="Wide Horizontal shot of iconic DIFC Gate building in Dubai at dusk"
            className="img-slot-banner reveal d1"
            style={{ marginBottom: '24px', height: '160px' }}
          />

          <h3>What You Get</h3>
          <div className="cta-checklist">
            {ctaPoints.map((point, idx) => (
              <div key={idx} className="cta-check">
                <div className="check-mark">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="check-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
