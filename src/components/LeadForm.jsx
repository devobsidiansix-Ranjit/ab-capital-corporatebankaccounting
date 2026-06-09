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
const LeadForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
    companyType: '',
    monthlyVolume: '',
    businessActivity: '',
    previouslyRejected: ''
  });

  const [countries, setCountries] = useState(FALLBACK_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(FALLBACK_COUNTRIES[0]);
  const [phoneDigits, setPhoneDigits] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const payload = {
        ...formData,
        whatsapp: fullWhatsappNumber,
        action: 'create_lead'
      };

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
        formBody.append(GOOGLE_FORM_CONFIG.FIELD_IDS.monthlyVolume, payload.monthlyVolume);
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
      setFormData({
        fullName: '',
        email: '',
        nationality: '',
        companyType: '',
        monthlyVolume: '',
        businessActivity: '',
        previouslyRejected: ''
      });
      setPhoneDigits('');
    } catch (error) {
      console.warn('Form submission network handled:', error);
      onSubmitSuccess(payload);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-panel" id="enquiry">
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

          <div className="f-row">
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
              <label className="f-label">Monthly Volume</label>
              <select
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                className="f-ctrl"
                required
              >
                <option value="" disabled>Expected</option>
                <option value="Under AED 50K">Under AED 50K</option>
                <option value="AED 50K–200K">AED 50K–200K</option>
                <option value="AED 200K–500K">AED 200K–500K</option>
                <option value="AED 500K+">AED 500K+</option>
              </select>
            </div>
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
