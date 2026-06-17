import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_CONFIG } from '../config/googleForm';

// Fallback list of popular country codes with flags and standard digit limits
const FALLBACK_COUNTRIES = [
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', length: 9, flag: '🇦🇪' },
  { name: 'India', code: 'IN', dialCode: '+91', length: 10, flag: '🇮🇳' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', length: 10, flag: '🇬🇧' },
  { name: 'United States', code: 'US', dialCode: '+1', length: 10, flag: '🇺🇸' },
  { name: 'Pakistan', code: 'PK', dialCode: '+92', length: 10, flag: '🇵🇰' },
  { name: 'Egypt', code: 'EG', dialCode: '+20', length: 10, flag: '🇪🇬' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', length: 9, flag: '🇸🇦' },
  { name: 'Oman', code: 'OM', dialCode: '+968', length: 8, flag: '🇴🇲' },
  { name: 'Qatar', code: 'QA', dialCode: '+974', length: 8, flag: '🇶🇦' },
  { name: 'Kuwait', code: 'KW', dialCode: '+965', length: 8, flag: '🇰🇼' },
  { name: 'Bahrain', code: 'BH', dialCode: '+973', length: 8, flag: '🇧🇭' }
];

// Dictionary of standard phone number lengths by ISO 2-letter country code
const DIGIT_LIMITS = {
  AE: 9,
  IN: 10,
  GB: 10,
  US: 10,
  PK: 10,
  EG: 10,
  SA: 9,
  OM: 8,
  QA: 8,
  KW: 8,
  BH: 8,
  DE: 11,
  FR: 9,
  IT: 10,
  ES: 9,
  CA: 10,
  AU: 9,
  RU: 10,
  CN: 11,
  SG: 8,
  HK: 8,
  MY: 9,
  TR: 10,
  ZA: 9
};

/**
 * LeadForm component integrating custom form inputs with Google Forms submission endpoint.
 * Features an API-driven responsive phone input with dynamic country selector & digit limits.
 */
const LeadForm = ({ onSubmitSuccess, darkGlass = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
    companyType: '',
    businessActivity: '',
    previouslyRejected: ''
  });

  const [countries, setCountries] = useState(FALLBACK_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(FALLBACK_COUNTRIES[0]);
  const [phoneDigits, setPhoneDigits] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    if (localStorage.getItem('form_submitted_ab_capital') === 'true') {
      setHasSubmitted(true);
      try {
        const stored = localStorage.getItem('last_lead_data');
        if (stored) {
          setSubmittedData(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Fetch country codes from public REST Countries API on mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        if (!res.ok) throw new Error('API response error');
        return res.json();
      })
      .then((data) => {
        const formatted = data
          .map((c) => {
            const root = c.idd?.root || '';
            const suffixes = c.idd?.suffixes || [];
            const dialCode = suffixes.length === 1 ? `${root}${suffixes[0]}` : root;
            const code = c.cca2 || '';
            return {
              name: c.name?.common || '',
              code: code,
              dialCode: dialCode,
              length: DIGIT_LIMITS[code] || 10, // Fallback to 10
              flag: c.flag || ''
            };
          })
          .filter((c) => c.dialCode && c.name)
          .sort((a, b) => a.name.localeCompare(b.name));

        if (formatted.length > 0) {
          // Merge unique lists prioritizing fallback order to keep popular countries clean
          const merged = [...FALLBACK_COUNTRIES];
          formatted.forEach((item) => {
            if (!merged.some((m) => m.code === item.code)) {
              merged.push(item);
            }
          });
          setCountries(merged);
        }
      })
      .catch((err) => {
        console.warn('Using fallback local country dataset:', err);
        setCountries(FALLBACK_COUNTRIES);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    // Only allow digit inputs
    const value = e.target.value.replace(/\D/g, '');
    setPhoneDigits(value);
  };

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.code === e.target.value);
    if (country) {
      setSelectedCountry(country);
      setPhoneDigits(''); // Reset phone input digits on country change to avoid mismatch
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullWhatsappNumber = `${selectedCountry.dialCode} ${phoneDigits}`;
    const payload = {
      ...formData,
      whatsapp: fullWhatsappNumber,
      action: 'create_lead'
    };

    try {
      if (GOOGLE_FORM_CONFIG.IS_WEB_APP) {
        await fetch(GOOGLE_FORM_CONFIG.FORM_ACTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
      } else {
        const formBody = new FormData();
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.fullName, payload.fullName);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.whatsapp, payload.whatsapp);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.email, payload.email);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.nationality, payload.nationality);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.companyType, payload.companyType);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.businessActivity, payload.businessActivity);
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.previouslyRejected, payload.previouslyRejected);

        await fetch(GOOGLE_FORM_CONFIG.FORM_ACTION_URL, {
          method: 'POST',
          body: formBody,
          mode: 'no-cors',
          headers: {
            'Accept': 'application/xml, text/xml, */*'
          }
        });
      }

      onSubmitSuccess(payload);
      localStorage.setItem('form_submitted_ab_capital', 'true');
      localStorage.setItem('last_lead_data', JSON.stringify(payload));
      setSubmittedData(payload);
      setHasSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        nationality: '',
        companyType: '',
        businessActivity: '',
        previouslyRejected: ''
      });
      setPhoneDigits('');
    } catch (error) {
      console.warn('Form submission network handled:', error);
      onSubmitSuccess(payload);
      localStorage.setItem('form_submitted_ab_capital', 'true');
      localStorage.setItem('last_lead_data', JSON.stringify(payload));
      setSubmittedData(payload);
      setHasSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsappUrl = () => {
    if (!submittedData) {
      return `https://wa.me/971585699300?text=Hi%20AB%20Capital,%20I%20just%20submitted%20my%20corporate%20banking%20assessment.%20Please%20help%20fast-track%20my%20application.`;
    }
    const msg = `Hi AB Capital, I just submitted my corporate banking assessment. Here are my details:

• Name: ${submittedData.fullName || ''}
• WhatsApp: ${submittedData.whatsapp || ''}
• Email: ${submittedData.email || ''}
• Nationality: ${submittedData.nationality || ''}
• Company Type: ${submittedData.companyType || ''}
• Business Activity: ${submittedData.businessActivity || ''}
• Previously Rejected: ${submittedData.previouslyRejected || ''}

Please help fast-track my application.`;
    return `https://wa.me/971585699300?text=${encodeURIComponent(msg)}`;
  };

  if (hasSubmitted) {
    return (
      <div className={`form-panel ${darkGlass ? 'dark-glass' : ''}`} id="enquiry" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div className="form-panel-header">
          <h3>Thank You!</h3>
          <p>We've received your assessment</p>
        </div>
        <div className="form-body" style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '24px' }}>
            <svg viewBox="0 0 52 52" style={{ width: '64px', height: '64px', display: 'block', margin: '0 auto' }}>
              <circle cx="26" cy="26" r="25" fill="none" stroke="#10B981" strokeWidth="2" />
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ color: darkGlass ? 'rgba(255, 255, 255, 0.9)' : 'var(--ink-soft)', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
            Thanks for filling the form. Your assessment details have been securely logged. Our compliance advisor will contact you within 2 business hours.
          </p>
          <a 
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ty-btn-whatsapp"
            style={{ 
              display: 'inline-flex', 
              width: '100%', 
              textDecoration: 'none', 
              justifyContent: 'center',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontWeight: '600',
              padding: '14px',
              borderRadius: '8px',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
              alignItems: 'center',
              transition: 'all 0.25s'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.99 2h-.01C6.47 2 2 6.48 2 12c0 1.925.52 3.725 1.43 5.275L2.07 22l4.82-1.34C8.27 21.52 10.09 22 12 22c5.52 0 10-4.48 10-10S17.52 2 11.99 2z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`form-panel ${darkGlass ? 'dark-glass' : ''}`} id="enquiry">
      <div className="form-panel-header">
        <h3>Let's Talk</h3>
        <p>Get a Call Back Shortly!</p>
      </div>
      <div className="form-body">
        <div className="f-secure">
          <svg
            className="lock-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your data is encrypted & confidential
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className="f-group">
            <label className="f-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="f-ctrl"
              placeholder="Full name"
              required
            />
          </div>

          <div className="f-group">
            <label className="f-label">WhatsApp Number</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select
                value={selectedCountry.code}
                onChange={handleCountryChange}
                className="f-ctrl"
                style={{ width: '130px', flexShrink: 0, paddingRight: '24px', backgroundImage: 'none' }}
              >
                {countries.map((c) => (
                  <option key={`${c.code}-${c.dialCode}`} value={c.code}>
                    {c.flag} {c.dialCode}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phoneDigits}
                onChange={handlePhoneChange}
                maxLength={selectedCountry.length}
                className="f-ctrl"
                style={{ flexGrow: 1 }}
                placeholder={`${selectedCountry.length}-digit phone number`}
                required
              />
            </div>
          </div>

          <div className="f-group">
            <label className="f-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="f-ctrl"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="f-group">
            <label className="f-label">Nationality</label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="f-ctrl"
              required
            >
              <option value="" disabled>Select your nationality</option>
              <option value="Indian">Indian</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Nigerian">Nigerian</option>
              <option value="Iranian">Iranian</option>
              <option value="Russian">Russian</option>
              <option value="Chinese">Chinese</option>
              <option value="British">British</option>
              <option value="American">American</option>
              <option value="Other">Other Nationality</option>
            </select>
          </div>

          <div className="f-group">
            <label className="f-label">Company Type</label>
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              className="f-ctrl"
              required
            >
              <option value="" disabled>Select type</option>
              <option value="Free Zone">Free Zone</option>
              <option value="Mainland">Mainland</option>
              <option value="Offshore">Offshore</option>
              <option value="Not yet formed">Not yet formed</option>
            </select>
          </div>

          <div className="f-group">
            <label className="f-label">Business Activity</label>
            <input
              type="text"
              name="businessActivity"
              value={formData.businessActivity}
              onChange={handleChange}
              className="f-ctrl"
              placeholder="e.g. General Trading, Consulting, IT Services"
              required
            />
          </div>

          <div className="f-group">
            <label className="f-label">Previously Rejected?</label>
            <select
              name="previouslyRejected"
              value={formData.previouslyRejected}
              onChange={handleChange}
              className="f-ctrl"
              required
            >
              <option value="" disabled>Select one</option>
              <option value="No — first application">No — first application</option>
              <option value="Yes — rejected once">Yes — rejected once</option>
              <option value="Yes — rejected multiple times">Yes — rejected multiple times</option>
            </select>
          </div>

          <button type="submit" disabled={isSubmitting} className="f-submit">
            {isSubmitting ? 'Submitting Details...' : 'Request Free Expert Consultation'}
          </button>
          <p className="f-fine">
            Corporate accounts only — personal banking not available.<br />
            Our advisor will contact you within 2 business hours.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
