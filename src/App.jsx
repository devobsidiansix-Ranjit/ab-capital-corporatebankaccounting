import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BankTicker from './components/BankTicker';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import BanksSection from './components/BanksSection';
import RiskSection from './components/RiskSection';
import BanksFooter from './components/BanksFooter';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoReviews from './components/VideoReviews';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import SuccessModal from './components/SuccessModal';
import StickyPromoBar from './components/StickyPromoBar';
import ConsultationModal from './components/ConsultationModal';

/**
 * Main application component that orchestrates all modular elements.
 */
function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [leadData, setLeadData] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Sync route state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Redirect to home if on /thankyou but no submission in current session (e.g. on page refresh/reload)
  useEffect(() => {
    if (route === '/thankyou' && !hasSubmitted) {
      navigate('/');
    }
  }, [route, hasSubmitted]);

  const navigate = (path) => {
    window.history.pushState(null, '', path);
    setRoute(path);
    window.scrollTo(0, 0);
  };

  // Form submission success callback
  const handleFormSuccess = (data) => {
    setLeadData(data);
    setHasSubmitted(true);
    setIsConsultationOpen(false); // Close modal if open
    navigate('/thankyou');
  };

  // IntersectionObserver to handle scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.06
    };

    const handleIntersection = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          // Once revealed, we don't need to observe it anymore
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, [route]); // Re-observe when route/page changes

  const isThankYou = route === '/thankyou';

  // Default Route: /
  return (
    <>
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <Hero 
        onSubmitSuccess={handleFormSuccess} 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
        hasSubmitted={hasSubmitted}
        leadData={leadData}
      />
      <BankTicker />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <BanksSection />
      <RiskSection />
      <BanksFooter onOpenConsultation={() => setIsConsultationOpen(true)} />
      <WhyUsSection />
      <TestimonialsSection />
      <VideoReviews />
      <FaqSection />
      <CtaSection />
      <Footer />
      <StickyPromoBar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <WhatsappFloat />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSubmitSuccess={handleFormSuccess}
        hasSubmitted={hasSubmitted}
        leadData={leadData}
      />

      <SuccessModal
        isOpen={isThankYou}
        onClose={() => navigate('/')}
        leadData={leadData}
      />
    </>
  );
}

export default App;
