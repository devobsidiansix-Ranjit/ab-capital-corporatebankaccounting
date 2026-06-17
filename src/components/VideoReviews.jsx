import React from 'react';
import rvw1 from '../assets/Rvw1.mp4';
import rvw2 from '../assets/Rvw2.MP4';
import rvw3 from '../assets/rev3.MP4';

/**
 * Section presenting the client video reviews.
 */
const VideoReviews = () => {
  return (
    <section className="video-reviews-sec reveal" id="video-reviews">
      <div className="container">
        <div className="video-reviews-header">
          <div className="eyebrow">Client Video Reviews</div>
          <h2>Success Stories <em>in Motion</em></h2>
          <p className="section-lead">
            Watch the video reviews from our clients describing their journey of opening corporate bank accounts in the UAE with AB Capital.
          </p>
        </div>

        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <video 
                src={rvw1} 
                controls 
                preload="metadata" 
                className="video-player"
              />
            </div>
            <div className="video-info">
              <h4>Founder & CEO Review</h4>
              <p>Hear how we helped navigate complex compliance requirements to secure a corporate account in record time.</p>
            </div>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <video 
                src={rvw2} 
                controls 
                preload="metadata" 
                className="video-player"
              />
            </div>
            <div className="video-info">
              <h4>E-Commerce Business Review</h4>
              <p>Discover the step-by-step guidance provided by AB Capital that made banking setup completely stress-free.</p>
            </div>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <video 
                src={rvw3} 
                controls 
                preload="metadata" 
                className="video-player"
              />
            </div>
            <div className="video-info">
              <h4>Consultation & Onboarding Review</h4>
              <p>How the personalized compliance profiling matched our setup with the right bank, yielding an approval in weeks.</p>
            </div>
          </div>
        </div>

        {/* Center CTA Button (Image 5 green line) */}
        <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
          <a href="#enquiry" className="btn-primary" style={{ padding: '16px 48px' }}>
            Start Your Application Now →
          </a>
        </div>

      </div>
    </section>
  );
};

export default VideoReviews;
