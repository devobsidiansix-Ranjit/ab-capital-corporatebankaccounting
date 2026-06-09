import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BankTicker from './components/BankTicker';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import BanksSection from './components/BanksSection';
import RiskSection from './components/RiskSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import SuccessModal from './components/SuccessModal';

/**
 * Main application component that orchestrates all modular elements.
 */
function App() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [leadData, setLeadData] = useState(null);

  // Form submission success callback
  const handleFormSuccess = (data) => {
    setLeadData(data);
    setIsSuccessOpen(true);
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
  }, []);

  return (
    <>
      <Navbar />
      <Hero onSubmitSuccess={handleFormSuccess} />
      <BankTicker />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <BanksSection />
      <RiskSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsappFloat />

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => {
          setIsSuccessOpen(false);
          setLeadData(null);
        }}
        leadData={leadData}
      />
    </>
  );
}

export default App;
