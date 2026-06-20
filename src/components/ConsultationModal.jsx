import React, { useEffect } from 'react';
import LeadForm from './LeadForm';
import whyVisual from '../assets/why_visual.png';

/**
 * ConsultationModal provides a premium split popup form.
 * Left: related visual image with overlay and promotional copy.
 * Right: the responsive LeadForm styled as a dark glass card.
 */
const ConsultationModal = ({ isOpen, onClose, onSubmitSuccess, hasSubmitted, leadData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-split-card">
        {/* Left Section: Related Image Background (hidden on mobile) */}
        <div 
          className="modal-split-left"
          style={{ backgroundImage: `url(${whyVisual})` }}
        >
          <div className="modal-left-overlay"></div>
          <div className="modal-left-content">
            <span className="modal-left-eyebrow">AB Capital Services</span>
            <h2>Fast-Track Your <em>UAE Corporate Bank Account</em></h2>
            <div className="modal-left-sep"></div>
            <p>
              Get a guaranteed assessment, direct compliance desk matching, and bank introduction options with 16+ top UAE banks.
            </p>
          </div>
        </div>

        {/* Right Section: Lead Form */}
        <div className="modal-split-right">
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          <LeadForm 
            onSubmitSuccess={onSubmitSuccess} 
            darkGlass={true} 
            hasSubmitted={hasSubmitted}
            submittedData={leadData}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
