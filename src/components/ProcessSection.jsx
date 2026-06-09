import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSlot from './ImageSlot';
import processImg from '../assets/process_banner.png';
import imgStep1 from '../assets/process_step1.png';
import imgStep2 from '../assets/process_step2.png';
import imgStep3 from '../assets/process_step3.png';
import imgStep4 from '../assets/process_step4.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Redesigned ProcessSection featuring a vertical timeline like in Image 3.
 * Overhauled with alternating step cards and high-fidelity realistic process images.
 */
const ProcessSection = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const fillEl = document.querySelector('.timeline-track-fill');
    const rows = document.querySelectorAll('.timeline-row');

    if (!fillEl || rows.length === 0) return;

    // Timeline line progress scrub animation
    gsap.fromTo(
      fillEl,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 0.5
        }
      }
    );

    // Timeline row nodes illuminating scrolltrigger triggers
    rows.forEach((row) => {
      ScrollTrigger.create({
        trigger: row,
        start: 'top 55%',
        end: 'bottom 55%',
        toggleClass: 'active',
        // Play when scrolling down, reverse when scrolling up
        toggleActions: 'play reverse play reverse'
      });
    });

    return () => {
      // Clean up all scrolltriggers in this container
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger?.classList?.contains?.('timeline-row')) {
          trigger.kill();
        }
        if (trigger.vars.trigger === '.timeline-container') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="process-sec reveal" id="process">
      <div className="eyebrow">Our Process</div>
      <h2>Enquiry to <em>Active Account</em></h2>
      <p className="section-lead">A transparent, managed process. You'll know exactly where your application stands — every day.</p>

      {/* Aesthetic visual banner */}
      <ImageSlot
        src={processImg}
        alt="Consultant reviewing documents with a client in a bright modern office"
        className="img-slot-banner reveal d1"
        style={{ margin: '48px 0 64px' }}
      />

      {/* Image 3 Premium Vertical Timeline */}
      <div className="timeline-container" ref={timelineRef}>
        
        {/* Background Track Line */}
        <div className="timeline-track-bg"></div>
        {/* Dynamic Foreground Filling Track Line (GSAP animated) */}
        <div className="timeline-track-fill"></div>

        {/* Step 1: Left Aligned Card, Right Aligned Image */}
        <div className="timeline-row left-aligned reveal d1">
          <div className="timeline-node">1</div>
          <div className="timeline-connector"></div>
          <div className="timeline-content-block">
            <span className="timeline-step-tag">Step 01</span>
            <h4>Application Submission</h4>
            <p>
              Submit your signed business application along with the required corporate documents to officially begin the review process. We organize and pre-vet every page.
            </p>
            <span className="timeline-days-badge">Day 1</span>
          </div>
          <div className="timeline-image-block">
            <img src={imgStep1} alt="Signing corporate registry files in modern Dubai office" loading="lazy" />
          </div>
        </div>

        {/* Step 2: Left Aligned Image, Right Aligned Card */}
        <div className="timeline-row right-aligned reveal d2">
          <div className="timeline-node">2</div>
          <div className="timeline-connector"></div>
          <div className="timeline-image-block">
            <img src={imgStep2} alt="Compliance expert reviewing MOA and corporate documents" loading="lazy" />
          </div>
          <div className="timeline-content-block">
            <span className="timeline-step-tag">Step 02</span>
            <h4>Review & Documentation</h4>
            <p>
              Our compliance team prepares essential company registry documents, including the Memorandum of Association (MOA), UBO declarations, and source of funds narratives, resolving discrepancies.
            </p>
            <span className="timeline-days-badge">Days 2–5</span>
          </div>
        </div>

        {/* Step 3: Left Aligned Card, Right Aligned Image */}
        <div className="timeline-row left-aligned reveal d3">
          <div className="timeline-node">3</div>
          <div className="timeline-connector"></div>
          <div className="timeline-content-block">
            <span className="timeline-step-tag">Step 03</span>
            <h4>Compliance Pre-Approval</h4>
            <p>
              Your pack is submitted to the chosen bank's internal compliance desk. Our direct relationships ensure high-priority handling, steering clear of standard anonymous queues.
            </p>
            <span className="timeline-days-badge">Days 5–7</span>
          </div>
          <div className="timeline-image-block">
            <img src={imgStep3} alt="Dubai banker greeting client and approving document packs" loading="lazy" />
          </div>
        </div>

        {/* Step 4: Left Aligned Image, Right Aligned Card */}
        <div className="timeline-row right-aligned reveal" style={{ transitionDelay: '0.45s' }}>
          <div className="timeline-node">4</div>
          <div className="timeline-connector"></div>
          <div className="timeline-image-block">
            <img src={imgStep4} alt="Active corporate bank debit card and online banking activated" loading="lazy" />
          </div>
          <div className="timeline-content-block">
            <span className="timeline-step-tag">Step 04</span>
            <h4>Account Activation</h4>
            <p>
              IBAN is generated. Corporate online banking dashboard is initialized, and secure physical debit cards are dispatched. Your banking operations are officially live.
            </p>
            <span className="timeline-days-badge">Days 7–21</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
