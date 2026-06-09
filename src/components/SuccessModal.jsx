import React from 'react';
import logoImg from '../assets/logo.png';

/**
 * High-fidelity Full-Screen Thank You Page component.
 * Displays confirmation details, direct WhatsApp escalation link, and brand coordinates.
 */
const SuccessModal = ({ isOpen, onClose, leadData = null }) => {
  if (!isOpen) return null;

  const leadName = leadData?.fullName || '';

  // Direct escalation WhatsApp link with prefilled details
  const whatsappUrl = `https://wa.me/971585699300?text=Hi%20AB%20Capital,%20my%20name%20is%20${encodeURIComponent(
    leadName
  )}.%20I%20just%20submitted%20my%20corporate%20banking%20assessment.%20Please%20help%20fast-track%20my%20application.`;

  return (
    <div className="ty-screen-container">
      {/* Self-contained high-fidelity styling for instantaneous rendering */}
      <style>{`
        .ty-screen-container {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: radial-gradient(circle at 10% 20%, rgba(229, 237, 240, 0.6) 0%, rgba(243, 246, 248, 0.98) 100%);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 6%;
          font-family: 'Outfit', sans-serif;
          color: #0F172A;
          animation: tyFadeIn 0.5s ease-out forwards;
        }

        @keyframes tyFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        .ty-brand-logo {
          height: 64px;
          object-fit: contain;
          margin-bottom: 36px;
        }

        .ty-card {
          width: 100%;
          max-width: 600px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 44px;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.04), 0 2px 10px rgba(15, 23, 42, 0.02);
          text-align: center;
          position: relative;
          margin-bottom: 24px;
        }

        .ty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4.5vw, 2.6rem);
          font-weight: 700;
          color: #0F2A4A;
          line-height: 1.2;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .ty-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          max-width: 500px;
          margin: 0 auto 36px;
        }

        /* Animated Checkmark */
        .ty-check-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #10B981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .ty-check-icon {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }

        /* Action Buttons */
        .ty-footer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
          width: 100%;
        }

        .ty-btn-whatsapp {
          background: #25D366;
          color: #FFFFFF;
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
        }

        .ty-btn-whatsapp:hover {
          background: #128C7E;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .ty-btn-close {
          background: transparent;
          border: 1px solid #CBD5E1;
          color: #64748B;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ty-btn-close:hover {
          background: #F8FAFC;
          color: #334155;
          border-color: #94A3B8;
        }

        .ty-meta-info {
          font-size: 11.5px;
          color: #94A3B8;
          text-align: center;
          line-height: 1.5;
          margin-top: 24px;
        }
      `}</style>

      {/* Corporate Brand Logo */}
      <img src={logoImg} alt="AB Capital Corporate Banking Logo" className="ty-brand-logo" />

      {/* Main Success Container */}
      <div className="ty-card">
        {/* Animated Checked SVG Icon */}
        <svg viewBox="0 0 52 52" style={{ width: '72px', height: '72px', display: 'block', margin: '0 auto 20px' }}>
          <circle className="ty-check-circle" cx="26" cy="26" r="25" />
          <path className="ty-check-icon" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <h3 className="ty-title">Assessment Received</h3>
        <p className="ty-text">
          Thank you, <strong>{leadName || 'Applicant'}</strong>. Your application details are logged and securely encrypted. Our compliance desk is reviewing your profile eligibility and will contact you within 2 business hours.
        </p>

        {/* Action button escalations */}
        <div className="ty-footer-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ty-btn-whatsapp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.99 2h-.01C6.47 2 2 6.48 2 12c0 1.925.52 3.725 1.43 5.275L2.07 22l4.82-1.34C8.27 21.52 10.09 22 12 22c5.52 0 10-4.48 10-10S17.52 2 11.99 2z" />
            </svg>
            Escalate & Fast-Track on WhatsApp Now
          </a>

          <button onClick={onClose} className="ty-btn-close">
            Back to Home Page
          </button>
        </div>

        {/* Corporate Legal Footer */}
        <p className="ty-meta-info">
          AB Capital Services FZE · Burj Khalifa District, Dubai, UAE.<br />
          Corporate banking consultancies only. WhatsApp escalations typical response within 5 minutes.
        </p>

      </div>
    </div>
  );
};

export default SuccessModal;
