import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LeadForm from './LeadForm';
import bgImage from '../assets/dubai_skyline_night.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Hero component using Image 1 design layout and Image 2 (Burj Khalifa office) background.
 * Overhauled with GSAP ScrollTrigger metric tickers and 3-column framing for the businessman.
 */
const Hero = ({ onSubmitSuccess, onOpenConsultation, hasSubmitted, leadData }) => {
  const heroRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    // Reveal fade-in animation on mount
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }

    // GSAP high-fidelity count-up animations for the metrics
    const metricElements = document.querySelectorAll('.metric-item');
    
    metricElements.forEach((el) => {
      const valSpan = el.querySelector('.metric-val');
      if (!valSpan) return;
      
      const rawText = valSpan.textContent;
      
      // Handle the range numbers "7–21" differently
      if (rawText.includes('–')) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 21,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%'
          },
          onUpdate: () => {
            const currentVal = Math.floor(obj.val);
            // animate the end of range from 7 to 21
            valSpan.textContent = `7–${currentVal}`;
          },
          onComplete: () => {
            valSpan.textContent = '7–21';
          }
        });
      } else {
        const parsedNum = parseFloat(rawText.replace(/[^\d.]/g, ''));
        const suffix = rawText.replace(/[\d.-]/g, '');
        
        if (isNaN(parsedNum)) return;
        
        const obj = { val: 0 };
        gsap.to(obj, {
          val: parsedNum,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%'
          },
          onUpdate: () => {
            valSpan.textContent = Math.floor(obj.val) + suffix;
          },
          onComplete: () => {
            valSpan.textContent = rawText;
          }
        });
      }
    });

    // Cleanup animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger?.classList?.contains?.('metric-item')) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      className="hero"
      ref={heroRef}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Column 1: Core Hero Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span> Dubai · UAE Corporate Banking
        </div>
        <h1>
          Open Your UAE<br />
          Corporate Bank Account<br />
          <em>Without the Rejection.</em>
        </h1>
        <p className="hero-sub">
          1 in 3 independent applications gets rejected or stuck. <strong>We get you approved.</strong> AB Capital's banking consultants have direct relationships with compliance officers at 15+ UAE banks — matching your profile to the right institution, first time.
        </p>

        <div className="hero-metrics dark-glass" ref={metricsRef}>
          <div className="metric metric-item">
            <span className="metric-val">94%</span>
            <span className="metric-lbl">Approval Rate</span>
          </div>
          <div className="metric metric-item">
            <span className="metric-val">7–21</span>
            <span className="metric-lbl">Days to Activate</span>
          </div>
          <div className="metric metric-item">
            <span className="metric-val">15+</span>
            <span className="metric-lbl">Bank Partners</span>
          </div>
          <div className="metric metric-item">
            <span className="metric-val">50+</span>
            <span className="metric-lbl">Nationalities</span>
          </div>
        </div>

        <div className="hero-actions">
          <button 
            onClick={onOpenConsultation}
            className="btn-primary"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Get Free Consultation →
          </button>
          <a href="#process" className="btn-ghost">
            How It Works <span className="arrow-icon">↓</span>
          </a>
        </div>

        <div className="trust-proof">
          <div className="proof-avatars">
            <div className="proof-av">AK</div>
            <div className="proof-av">MR</div>
            <div className="proof-av">PS</div>
            <div className="proof-av">JL</div>
            <div className="proof-av plus">+</div>
          </div>
          <p className="proof-label">
            <strong>240+ entrepreneurs</strong> approved in the last 12 months
          </p>
        </div>
      </div>

      {/* Column 2: Center Spacer (Frames the Businessman in the background image) */}
      <div className="hero-spacer"></div>

      {/* Column 3: Lead Capture Form */}
      <div className="form-panel-wrapper">
        <LeadForm 
          onSubmitSuccess={onSubmitSuccess} 
          darkGlass={false} 
          hasSubmitted={hasSubmitted}
          submittedData={leadData}
        />
      </div>
    </section>
  );
};

export default Hero;
