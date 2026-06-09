import React from 'react';
import problemImg from '../assets/problem_visual.png';

/**
 * Problem section redesign matching the high-fidelity Image 2 layout.
 * Accented with premium blue warnings and call-to-actions.
 */
const ProblemSection = () => {
  return (
    <section className="problem-sec reveal" id="problems">
      <div className="problem-layout">
        
        {/* Left Column: Heading and Visual Overlay Banner */}
        <div>
          <div className="eyebrow">The Reality</div>
          <h2 style={{ marginBottom: '16px' }}>
            Why Applications<br />
            <em>Get Rejected</em>
          </h2>
          <p className="section-lead" style={{ marginBottom: '32px' }}>
            UAE banks run some of the world's most rigorous KYC checks. Most founders are caught off-guard — even with a valid trade license.
          </p>

          <div className="problem-visual-container reveal d1">
            <img
              src={problemImg}
              alt="Person reviewing compliance rejection papers on a desk"
              className="problem-visual-img"
            />
            <div className="problem-visual-overlay">
              <div className="problem-overlay-left">
                <div className="problem-overlay-btn check">
                  {/* Shield Check Icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 11 11 13 15 9" />
                  </svg>
                </div>
                <div className="problem-overlay-text">
                  <h4>Fix This Now</h4>
                  <p>Let our experts review your application before the bank does.</p>
                </div>
              </div>
              <a href="#enquiry" className="problem-overlay-arrow" aria-label="Request review">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', marginLeft: '2px' }}>
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Cards Grid Matrix */}
        <div className="issue-list">
          {/* Card 1 */}
          <div className="issue-card reveal d1">
            <div className="issue-icon-wrapper">
              {/* Globe Icon */}
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {/* Warning Triangle Indicator Badge */}
              <div className="issue-alert-badge">
                <span>!</span>
              </div>
            </div>
            <div className="issue-copy">
              <h4>High-Risk Nationality Flagging</h4>
              <p>Holders of 40+ passports face automatic enhanced scrutiny. Banks silently decline — with no explanation.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="issue-card reveal d2">
            <div className="issue-icon-wrapper">
              {/* Folder Icon */}
              <svg viewBox="0 0 24 24">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              {/* "X" Close Indicator Badge */}
              <div className="issue-alert-badge" style={{ background: '#3B82F6' }}>
                <span>×</span>
              </div>
            </div>
            <div className="issue-copy">
              <h4>Incomplete Document Packs</h4>
              <p>UBO declarations, MOA attestation, source of funds — one missing page means full rejection.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="issue-card reveal d3">
            <div className="issue-icon-wrapper">
              {/* Clock Icon */}
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {/* Warning Triangle Indicator Badge */}
              <div className="issue-alert-badge">
                <span>!</span>
              </div>
            </div>
            <div className="issue-copy">
              <h4>Weeks of Silence</h4>
              <p>Without direct bank relationships, applications sit in compliance queues for 4–8 weeks with no updates.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="issue-card reveal" style={{ transitionDelay: '0.45s' }}>
            <div className="issue-icon-wrapper">
              {/* Bank Icon */}
              <svg viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <line x1="6" y1="11" x2="6" y2="22" />
                <line x1="10" y1="11" x2="10" y2="22" />
                <line x1="14" y1="11" x2="14" y2="22" />
                <line x1="18" y1="11" x2="18" y2="22" />
              </svg>
              {/* "X" Close Indicator Badge */}
              <div className="issue-alert-badge" style={{ background: '#3B82F6' }}>
                <span>×</span>
              </div>
            </div>
            <div className="issue-copy">
              <h4>Wrong Bank, Wrong Profile</h4>
              <p>Each bank has a different risk appetite. Applying blind wastes time and creates a rejection trail other banks can see.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
