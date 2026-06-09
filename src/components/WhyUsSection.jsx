import React from 'react';
import ImageSlot from './ImageSlot';
import whyImg from '../assets/why_visual.png';

/**
 * WhyUsSection component rendering trust points of AB Capital.
 */
const WhyUsSection = () => {
  return (
    <section className="why-sec reveal">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <div className="eyebrow">Why AB Capital</div>
          <h2>
            10 Years. 1,000+ Accounts.<br />
            <em>One Goal.</em>
          </h2>
          <p className="section-lead">Built for Dubai. Licensed in UAE. Serving founders from 50+ countries.</p>
        </div>

        <ImageSlot
          src={whyImg}
          alt="Premium Dubai corporate office collaborative desk with laptop and monitors"
          className="img-slot-inset reveal d1"
        />
      </div>

      <div className="why-layout">
        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Direct Banker Access</div>
            <p className="why-desc">Our consultants speak directly with compliance officers — not through forms. Your application gets eyes, not a queue.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Precise Bank Matching</div>
            <p className="why-desc">We don't apply to multiple banks hoping one works. One submission, one right bank, matched to your exact profile.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Compliance-Grade Prep</div>
            <p className="why-desc">Every document meets UAE Central Bank standards before submission. No back-and-forth. No surprises.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Speed — 7 to 21 Days</div>
            <p className="why-desc">Where independent applications take 4–8 weeks, our managed process delivers an active account in 1–3 weeks.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Full Confidentiality</div>
            <p className="why-desc">Your financials and business details are handled with complete discretion. We do not share client data.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="why-content">
            <div className="why-title">Post-Rejection Specialist</div>
            <p className="why-desc">Previously rejected? We rebuild your profile and find the right bank. This is one of our most common — and successful — services.</p>
          </div>
          <div className="why-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
