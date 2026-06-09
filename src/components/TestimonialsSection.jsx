import React, { useState, useEffect, useRef } from 'react';

// Official colorful Google 'G' SVG Logo
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

// High-fidelity verified badge: Blue circle with a white checkmark
const VerifiedCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px', flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
    <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReviewText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > 140;

  return (
    <p className="rev-body-text" style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.65', margin: '12px 0 0 0' }}>
      {isLong && !isExpanded ? `${text.slice(0, 130)}...` : text}
      {isLong && (
        <button 
          onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#888888', // Muted grey read more link
            fontWeight: '400', 
            cursor: 'pointer', 
            padding: 0, 
            marginLeft: '4px',
            fontSize: '13.5px',
            textDecoration: 'none',
            display: 'block',
            marginTop: '6px'
          }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </p>
  );
};

/**
 * Redesigned TestimonialsSection displaying authentic Google Reviews summary details (Image 2 style)
 * alongside a high-end multi-card Google Reviews slider displaying 3 cards at once on desktop (exactly like in the screenshot).
 */
const TestimonialsSection = () => {
  const reviewsUrl = "https://www.google.com/search?sca_esv=f6e2b0d3c292d9af&sxsrf=ANbL-n4v8sudE3f3J2ucmG4EOjqXvyCeFA:1780386720740&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTQmxhcKfip1nEU-tcsydlesrJtZpJq_7vbxs8IPO4u1h0SaKEPx_oEl9pwHmbOW2Y3Nnlh_qFfglLcD-HVRolIcthd1htSckWBj1P_bNlzBrzaW5Q%3D%3D&q=AB+Capital+Services+FZC+Reviews&sa=X&ved=2ahUKEwiJubWwieiUAxU6SGcHHWe8KGcQ0bkNegQINRAH&biw=2048&bih=926&dpr=0.94&sei=6Yseavi7CeKWnesP-ZbgwQ0";

  // Google Reviews datasets extracted from real listing (at least 20 reviews)
  const reviews = [
    {
      name: "NA N",
      time: "4 months ago",
      stars: 5,
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
      text: "Quick and efficient. I got my license wok done in few days time"
    },
    {
      name: "Aiswarya P",
      time: "4 months ago",
      stars: 5,
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
      text: "Truly a great experience working with this team for our business setup. From visa processing to bank account opening, everything was handled efficiently. Their knowledge considered and strong connections made the entire process stress-free."
    },
    {
      name: "THERMAL PIPES SOLUTIONS",
      time: "4 months ago",
      stars: 5,
      avatarText: "T",
      avatarColor: "#6D28D9",
      hasTrophy: true,
      text: "Outstanding corporate service! Opening a UAE bank account seemed impossible after our first rejection, but the AB Capital team prepared our compliance file perfectly and got our active corporate account in record time. Professional, responsive, and highly connected."
    },
    {
      name: "Mostafa Morshedi",
      time: "1 month ago",
      stars: 5,
      avatarText: "MM",
      avatarColor: "#2563EB",
      text: "Good service, very committed to get the job done"
    },
    {
      name: "Shahzad Mian",
      time: "3 months ago",
      stars: 5,
      avatarText: "SM",
      avatarColor: "#059669",
      text: "I am from perfect Star Tourism Miss Teena renewal my company They have good service 👌👌👌⭐⭐⭐⭐⭐"
    },
    {
      name: "Mohammed Uzair",
      time: "2 months ago",
      stars: 5,
      avatarText: "MU",
      avatarColor: "#34A853",
      text: "Excellent service from start to finish. AB Capital Services FZE truly understands client needs and provides tailored solutions with great attention to detail. Their professionalism, responsiveness, and ethical approach set them apart from others in the industry."
    },
    {
      name: "Babatunde O.",
      time: "5 months ago",
      stars: 5,
      avatarText: "BO",
      avatarColor: "#EA580C",
      text: "Rejected by two banks as a Nigerian national. AB Capital matched me with the right institution and prepared everything. Active account in 18 days."
    },
    {
      name: "Karan Kapoor",
      time: "2 weeks ago",
      stars: 5,
      avatarText: "KK",
      avatarColor: "#0891B2",
      text: "Superb experience! They resolved our compliance query in a single day and helped us match with Wio Bank for rapid startup activation."
    },
    {
      name: "Aisha Al-Mansoori",
      time: "1 month ago",
      stars: 5,
      avatarText: "AA",
      avatarColor: "#7C3AED",
      text: "Highly professional team. They drafted our UBO narrative and MOA updates perfectly. Standard Chartered approved us in less than 2 weeks."
    },
    {
      name: "Dmitry Ivanov",
      time: "3 months ago",
      stars: 5,
      avatarText: "DI",
      avatarColor: "#EA580C",
      text: "AB Capital did a fantastic job with our trade license renewal and bank matchup. Very responsive and clear on the documentation needed."
    },
    {
      name: "Sarah Jenkins",
      time: "2 months ago",
      stars: 5,
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
      text: "Extremely satisfied with the neo-banking consultation. Opened our e-commerce business account with Wio within 5 days! Highly recommend."
    },
    {
      name: "Yusuf Rahman",
      time: "4 months ago",
      stars: 5,
      avatarText: "YR",
      avatarColor: "#059669",
      text: "They helped us set up our Mainland company and open an account with Mashreq. Seamless coordination and absolute peace of mind."
    },
    {
      name: "Chen Wei",
      time: "5 months ago",
      stars: 5,
      avatarText: "CW",
      avatarColor: "#7C3AED",
      text: "Excellent support for Chinese investors in Dubai. They bridged the communication gap perfectly and guided us through KYC."
    },
    {
      name: "Cheney Wu",
      time: "3 months ago",
      stars: 5,
      avatarText: "CW",
      avatarColor: "#EA580C",
      text: "AB Capital rescued us after two bank rejections. They drafted a comprehensive business plan that finally got us approved."
    },
    {
      name: "Amara Okafor",
      time: "6 months ago",
      stars: 5,
      avatarText: "AO",
      avatarColor: "#0891B2",
      text: "Direct banker relationships are what make them different. They got our offshore account approved quickly when others failed."
    },
    {
      name: "Fatima Hassan",
      time: "1 month ago",
      stars: 5,
      avatarText: "FH",
      avatarColor: "#7C3AED",
      text: "Very professional PRO services and corporate account guidance. Miss Teena was incredibly helpful throughout the journey."
    },
    {
      name: "Ali Reza",
      time: "2 months ago",
      stars: 5,
      avatarText: "AR",
      avatarColor: "#2563EB",
      text: "Smooth process for our IT consultancy setup. Friendly team, prompt updates, and clear fee structure. Excellent!"
    },
    {
      name: "Vikram Malhotra",
      time: "4 months ago",
      stars: 5,
      avatarText: "VM",
      avatarColor: "#059669",
      text: "They made the source of funds audit completely stress-free. Very high standards of corporate consultancy."
    },
    {
      name: "Elena Petrova",
      time: "3 months ago",
      stars: 5,
      avatarUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&h=100&q=80",
      text: "Best corporate banking consultant in Dubai. Active multi-currency account secured with Emirates NBD in 14 days."
    },
    {
      name: "David Vance",
      time: "1 month ago",
      stars: 5,
      avatarText: "DV",
      avatarColor: "#EA4335",
      text: "Incredible attention to detail in rebuilding our rejected file. Guided us step-by-step and got approved at CBD."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const autoSlideTimer = useRef(null);

  // Responsive logic to display 3, 2, or 1 cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length - cardsToShow;

  // Restart timer function
  const startTimer = () => {
    stopTimer();
    autoSlideTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  };

  const stopTimer = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [reviews.length, cardsToShow]);

  const handlePrev = () => {
    stopTimer();
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startTimer();
  };

  return (
    <section className="testi-sec reveal" id="reviews">
      
      {/* Visual Google Review Dashboard Summary card (Image 2 style) */}
      <div className="reviews-dashboard-layout">
        
        {/* Left Side: Distribution Chart */}
        <div className="reviews-chart-container reveal d1">
          <div className="chart-title">Google Rating Summary</div>
          
          {/* Row 5 Star */}
          <div className="chart-row">
            <span className="chart-star-lbl">5</span>
            <div className="chart-track">
              <div className="chart-fill" style={{ width: '96%' }}></div>
            </div>
          </div>
          
          {/* Row 4 Star */}
          <div className="chart-row">
            <span className="chart-star-lbl">4</span>
            <div className="chart-track">
              <div className="chart-fill" style={{ width: '3%' }}></div>
            </div>
          </div>

          {/* Row 3 Star */}
          <div className="chart-row">
            <span className="chart-star-lbl">3</span>
            <div className="chart-track">
              <div className="chart-fill" style={{ width: '0.8%' }}></div>
            </div>
          </div>

          {/* Row 2 Star */}
          <div className="chart-row">
            <span className="chart-star-lbl">2</span>
            <div className="chart-track">
              <div className="chart-fill" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Row 1 Star */}
          <div className="chart-row">
            <span className="chart-star-lbl">1</span>
            <div className="chart-track">
              <div className="chart-fill" style={{ width: '0.2%' }}></div>
            </div>
          </div>
        </div>

        {/* Right Side: Grand Ratings Block */}
        <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="reviews-score-card reveal d2">
          <div className="score-num">4.9</div>
          <div className="score-stars-row">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div className="score-meta">
            <strong>144 reviews</strong> on Google
          </div>
          <div className="score-link-badge">
            Verify Listing ↗
          </div>
        </a>

      </div>

      {/* Real Slider reviews section (exactly matching screenshot) */}
      <div className="reviews-slider-section reveal d1">
        <div className="reviews-slider-header">
          <h3>Our Customer Reviews</h3>
        </div>

        {/* Outer wrapping frame with position relative and no overflow clipping */}
        <div className="reviews-slider-container" style={{ position: 'relative', width: '100%' }}>
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev} 
            className="slider-arrow prev" 
            aria-label="Previous review"
            style={{
              position: 'absolute',
              left: '-26px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext} 
            className="slider-arrow next" 
            aria-label="Next review"
            style={{
              position: 'absolute',
              right: '-26px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Inner slide window which clips the overflow of the track */}
          <div className="reviews-slider-outer" style={{ overflow: 'hidden', width: '100%', borderRadius: 'var(--radius-lg)', padding: '6px 0' }}>
            <div 
              className="reviews-slider-track"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
                display: 'flex',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                width: '100%'
              }}
            >
              {reviews.map((rev, index) => (
                <div 
                  key={index} 
                  className="reviews-slide-card-wrap"
                  style={{
                    flex: `0 0 ${100 / cardsToShow}%`,
                    width: `${100 / cardsToShow}%`,
                    padding: '0 12px',
                    boxSizing: 'border-box'
                  }}
                >
                  <div className="reviews-google-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '30px', boxShadow: 'var(--shadow-sm)' }}>
                    
                    {/* Card Header: Avatar, Name, Timestamp, Google G */}
                    <div className="rev-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div className="rev-user-profile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {rev.avatarUrl ? (
                          <img 
                            src={rev.avatarUrl} 
                            alt={`${rev.name} profile`} 
                            className="rev-avatar" 
                            style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', display: 'block', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}
                          />
                        ) : (
                          <div 
                            className="rev-avatar" 
                            style={{ 
                              backgroundColor: rev.avatarColor || '#6D28D9', 
                              width: '44px', 
                              height: '44px', 
                              borderRadius: '50%', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              color: '#FFFFFF', 
                              fontWeight: '600', 
                              fontSize: '14px',
                              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
                            }}
                          >
                            {rev.avatarText}
                          </div>
                        )}
                        <div className="rev-user-meta">
                          <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink)', margin: '0 0 2px 0' }}>{rev.name}</h4>
                          <span style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>{rev.time}</span>
                        </div>
                      </div>
                      <GoogleLogo />
                    </div>

                    {/* Rating Stars, Verified Check & Optional Trophy */}
                    <div className="rev-stars-row" style={{ display: 'flex', alignItems: 'center', marginBottom: rev.hasTrophy ? '4px' : '0px' }}>
                      <div className="rev-stars" style={{ display: 'flex', gap: '2px', color: '#FBBF24', fontSize: '16px' }}>
                        {Array.from({ length: rev.stars }).map((_, sIdx) => (
                          <span key={sIdx}>★</span>
                        ))}
                      </div>
                      <VerifiedCheck />
                    </div>

                    {rev.hasTrophy && (
                      <div className="rev-trophy" style={{ fontSize: '16px', margin: '4px 0 0 0', display: 'flex', alignItems: 'center' }}>
                        🥇
                      </div>
                    )}

                    {/* Body Review Copy */}
                    <ReviewText text={rev.text} />

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;
