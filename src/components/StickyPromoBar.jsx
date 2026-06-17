import React, { useState, useEffect } from 'react';

/**
 * StickyPromoBar is fixed at the bottom of the screen.
 * It slides up when the user has scrolled past the Hero section and enters the Problems section.
 */
const StickyPromoBar = ({ onOpenConsultation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const targetEl = document.querySelector('#problems') || document.querySelector('.problem-sec');
      
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        // If the top of the problems section has entered the viewport (scrolling down or up)
        if (rect.top <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Fallback to hero height if element not found
        const heroEl = document.querySelector('.hero');
        const heroHeight = heroEl ? heroEl.offsetHeight : 700;
        if (currentScrollY > heroHeight - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-promo-bar ${isVisible ? 'visible' : ''}`}>
      <span className="sticky-promo-text">
        Ready to open your UAE corporate bank account without the rejection?
      </span>
      <button 
        onClick={onOpenConsultation}
        className="sticky-promo-btn"
      >
        Start Consulting
      </button>
    </div>
  );
};

export default StickyPromoBar;
