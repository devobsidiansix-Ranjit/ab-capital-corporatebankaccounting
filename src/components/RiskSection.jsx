import React from 'react';

// Tiny vector SVG flags to guarantee flag rendering on Windows and all platforms
const FlagIcon = ({ code }) => {
  switch (code) {
    case 'NG': // Nigeria: Green, White, Green
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="1" height="2" fill="#008751"/>
          <rect x="1" width="1" height="2" fill="#FFFFFF"/>
          <rect x="2" width="1" height="2" fill="#008751"/>
        </svg>
      );
    case 'PK': // Pakistan: Green, White stripe, crescent/star
      return (
        <svg width="20" height="13" viewBox="0 0 21 14" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="21" height="14" fill="#00401A"/>
          <rect width="5.25" height="14" fill="#FFFFFF"/>
          <circle cx="13" cy="7" r="3" fill="#FFFFFF"/>
          <circle cx="14" cy="6.2" r="3" fill="#00401A"/>
          <polygon points="14,4.5 14.5,5.5 15.5,5.5 14.7,6.2 15,7.2 14,6.5 13,7.2 13.3,6.2 12.5,5.5 13.5,5.5" fill="#FFFFFF"/>
        </svg>
      );
    case 'PH': // Philippines: Blue, Red, White triangle, gold sun
      return (
        <svg width="20" height="13" viewBox="0 0 2 1" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="2" height="0.5" fill="#0038A8"/>
          <rect y="0.5" width="2" height="0.5" fill="#CE1126"/>
          <polygon points="0,0 0,1 0.6,0.5" fill="#FFFFFF"/>
          <circle cx="0.2" cy="0.5" r="0.1" fill="#FCD116"/>
        </svg>
      );
    case 'IN': // India: Saffron, White, Green, Blue Wheel
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#FF9933"/>
          <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="1.33" width="3" height="0.67" fill="#138808"/>
          <circle cx="1.5" cy="1" r="0.2" stroke="#000080" strokeWidth="0.05" fill="none"/>
        </svg>
      );
    case 'EG': // Egypt: Red, White, Black, Gold eagle
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#CE1126"/>
          <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="1.33" width="3" height="0.67" fill="#000000"/>
          <rect x="1.4" y="0.8" width="0.2" height="0.4" fill="#C09307"/>
        </svg>
      );
    case 'BD': // Bangladesh: Green, Red circle
      return (
        <svg width="20" height="13" viewBox="0 0 10 6" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="10" height="6" fill="#006A4E"/>
          <circle cx="4.5" cy="3" r="2" fill="#F42A41"/>
        </svg>
      );
    case 'RU': // Russia: White, Blue, Red
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="0.67" width="3" height="0.67" fill="#0039A6"/>
          <rect y="1.33" width="3" height="0.67" fill="#D52B1E"/>
        </svg>
      );
    case 'CN': // China: Red, Gold stars
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="2" fill="#DE2910"/>
          <polygon points="0.4,0.4 0.5,0.7 0.8,0.7 0.6,0.9 0.7,1.2 0.4,1.0 0.1,1.2 0.2,0.9 0,0.7 0.3,0.7" fill="#FFDE00"/>
        </svg>
      );
    case 'TR': // Turkey: Red, White crescent/star
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="2" fill="#E30A17"/>
          <circle cx="1.2" cy="1" r="0.45" fill="#FFFFFF"/>
          <circle cx="1.35" cy="1" r="0.38" fill="#E30A17"/>
          <polygon points="1.7,0.85 1.75,0.95 1.85,0.95 1.77,1.0 1.8,1.1 1.7,1.05 1.6,1.1 1.63,1.0 1.55,0.95 1.65,0.95" fill="#FFFFFF"/>
        </svg>
      );
    case 'GB': // UK: Union Jack
      return (
        <svg width="20" height="13" viewBox="0 0 50 30" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="50" height="30" fill="#012169"/>
          <line x1="0" y1="0" x2="50" y2="30" stroke="#FFFFFF" strokeWidth="6"/>
          <line x1="0" y1="30" x2="50" y2="0" stroke="#FFFFFF" strokeWidth="6"/>
          <line x1="0" y1="0" x2="50" y2="30" stroke="#C8102E" strokeWidth="2"/>
          <line x1="0" y1="30" x2="50" y2="0" stroke="#C8102E" strokeWidth="2"/>
          <rect x="21" width="8" height="30" fill="#FFFFFF"/>
          <rect y="11" width="50" height="8" fill="#FFFFFF"/>
          <rect x="23" width="4" height="30" fill="#C8102E"/>
          <rect y="13" width="50" height="4" fill="#C8102E"/>
        </svg>
      );
    case 'US': // USA: Stripes and canton
      return (
        <svg width="20" height="13" viewBox="0 0 19 10" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="19" height="10" fill="#FFFFFF"/>
          <rect y="0" width="19" height="0.77" fill="#B22234"/>
          <rect y="1.54" width="19" height="0.77" fill="#B22234"/>
          <rect y="3.08" width="19" height="0.77" fill="#B22234"/>
          <rect y="4.62" width="19" height="0.77" fill="#B22234"/>
          <rect y="6.15" width="19" height="0.77" fill="#B22234"/>
          <rect y="7.69" width="19" height="0.77" fill="#B22234"/>
          <rect y="9.23" width="19" height="0.77" fill="#B22234"/>
          <rect width="7.6" height="5.38" fill="#3C3B6E"/>
          <circle cx="2" cy="1.8" r="0.3" fill="#FFFFFF"/>
          <circle cx="4" cy="1.8" r="0.3" fill="#FFFFFF"/>
          <circle cx="6" cy="1.8" r="0.3" fill="#FFFFFF"/>
          <circle cx="3" cy="3.6" r="0.3" fill="#FFFFFF"/>
          <circle cx="5" cy="3.6" r="0.3" fill="#FFFFFF"/>
        </svg>
      );
    case 'EU': // Europe: Blue field, stars
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="2" fill="#003399"/>
          <circle cx="1.5" cy="1" r="0.45" stroke="#FFCC00" strokeWidth="0.08" strokeDasharray="0.01 0.15" fill="none"/>
        </svg>
      );
    case 'CA': // Canada: Red, White, red maple leaf
      return (
        <svg width="20" height="13" viewBox="0 0 2 1" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="2" height="1" fill="#FF0000"/>
          <rect x="0.5" width="1" height="1" fill="#FFFFFF"/>
          <polygon points="1,0.2 1.1,0.35 1.05,0.35 1.15,0.45 1.25,0.4 1.2,0.5 1.35,0.5 1.25,0.6 1.05,0.55 1.05,0.75 0.95,0.75 0.95,0.55 0.75,0.6 0.65,0.5 0.8,0.5 0.75,0.4 0.85,0.45 0.95,0.35 0.9,0.35" fill="#FF0000"/>
        </svg>
      );
    case 'IR': // Iran: Green, White, Red horizontal stripes
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#239F40"/>
          <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="1.33" width="3" height="0.67" fill="#DA0000"/>
          <circle cx="1.5" cy="1" r="0.12" fill="#DA0000"/>
        </svg>
      );
    case 'SD': // Sudan: Red, White, Black horizontal stripes, Green triangle
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#D21034"/>
          <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="1.33" width="3" height="0.67" fill="#000000"/>
          <polygon points="0,0 0,2 1,1" fill="#007229"/>
        </svg>
      );
    case 'SY': // Syria: Red, White, Black horizontal stripes, two Green stars
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.67" fill="#E31B23"/>
          <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
          <rect y="1.33" width="3" height="0.67" fill="#000000"/>
          <polygon points="1.1,0.9 1.15,1.05 1.25,1.05 1.17,1.1 1.2,1.2 1.1,1.15 1.0,1.2 1.03,1.1 0.95,1.05 1.05,1.05" fill="#007A3D"/>
          <polygon points="1.9,0.9 1.95,1.05 2.05,1.05 1.97,1.1 2.0,1.2 1.9,1.15 1.8,1.2 1.83,1.1 1.75,1.05 1.85,1.05" fill="#007A3D"/>
        </svg>
      );
    case 'AF': // Afghanistan: Black, Red, Green vertical stripes
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="1" height="2" fill="#000000"/>
          <rect x="1" width="1" height="2" fill="#BF0000"/>
          <rect x="2" width="1" height="2" fill="#007A3D"/>
          <circle cx="1.5" cy="1" r="0.2" fill="#FFFFFF" opacity="0.8"/>
        </svg>
      );
    case 'LB': // Lebanon: Red stripes, White center, Green Cedar tree
      return (
        <svg width="20" height="13" viewBox="0 0 3 2" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid #e2e8f0', borderRadius: '1.5px' }}>
          <rect width="3" height="0.5" fill="#ED1C24"/>
          <rect y="0.5" width="3" height="1.0" fill="#FFFFFF"/>
          <rect y="1.5" width="3" height="0.5" fill="#ED1C24"/>
          <polygon points="1.5,0.6 1.7,1.1 1.6,1.1 1.8,1.4 1.2,1.4 1.4,1.1 1.3,1.1" fill="#00A651"/>
          <rect x="1.45" y="1.4" width="0.1" height="0.1" fill="#7A5230"/>
        </svg>
      );
    default:
      return null;
  }
};

/**
 * RiskSection component displaying the nationality risk matrix table.
 */
const RiskSection = () => {
  return (
    <section className="risk-sec reveal" id="risks">
      <div className="risk-layout">
        <div>
          <div className="eyebrow">Risk Assessment</div>
          <h2>
            Does Your<br />
            Nationality<br />
            <em>Matter?</em>
          </h2>
          <p className="section-lead" style={{ marginBottom: '28px' }}>
            Yes — but it's not a barrier. It determines which banks to approach and what documentation to prepare.
          </p>
          <a href="#enquiry" className="btn-primary" style={{ fontSize: '13px', padding: '13px 24px' }}>
            Check Your Profile →
          </a>
        </div>

        <div>
          {/* Table 1: Nationality Assessment */}
          <div className="risk-table-wrap" style={{ marginBottom: '32px' }}>
            <table className="risk-table">
              <thead>
                <tr>
                  <th>Examples</th>
                  <th>Level</th>
                  <th>Our Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="risk-examples-cell">
                    <div className="risk-flags">
                      <FlagIcon code="RU" /><FlagIcon code="IR" /><FlagIcon code="SD" /><FlagIcon code="SY" />
                    </div>
                    <div className="risk-names">Russia, Iran, Sudan, Syria</div>
                  </td>
                  <td>
                    <span className="rbadge r-high">High Risk</span>
                  </td>
                  <td>
                    <span className="r-rate">78%</span>
                  </td>
                </tr>
                <tr>
                  <td className="risk-examples-cell">
                    <div className="risk-flags">
                      <FlagIcon code="AF" /><FlagIcon code="LB" /><FlagIcon code="GB" /><FlagIcon code="US" />
                    </div>
                    <div className="risk-names">Afghanistan, Lebanon, UK, US</div>
                  </td>
                  <td>
                    <span className="rbadge r-med">Med. Risk</span>
                  </td>
                  <td>
                    <span className="r-rate">89%</span>
                  </td>
                </tr>
                <tr>
                  <td className="risk-examples-cell">
                    <div className="risk-flags">
                      <FlagIcon code="IN" /><FlagIcon code="BD" /><FlagIcon code="PK" /><FlagIcon code="PH" />
                    </div>
                    <div className="risk-names">India, Bangladesh, Pakistan, Philippines</div>
                  </td>
                  <td>
                    <span className="rbadge r-low">Low Risk</span>
                  </td>
                  <td>
                    <span className="r-rate">97%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: High Risk Account Guide */}
          <div style={{ marginBottom: '12px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)', marginBottom: '4px' }}>
              High Risk Account Profile Guide
            </h4>
            <p style={{ color: 'var(--ink-soft)', fontSize: '13px' }}>
              Minimum balance requirements and monthly maintenance fees for high-risk profiles.
            </p>
          </div>
          <div className="risk-table-wrap">
            <table className="risk-table">
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Minimum Balance</th>
                  <th>Monthly Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>ADIB</td>
                  <td>AED 5,000</td>
                  <td style={{ color: 'var(--accent-mid)', fontWeight: 600 }}>AED 470</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Mashreq</td>
                  <td>AED 150,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>DIB (Dubai Islamic Bank)</td>
                  <td>AED 50,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Emirates NBD</td>
                  <td>AED 200,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>FAB (First Abu Dhabi Bank)</td>
                  <td>AED 250,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>UBL</td>
                  <td>AED 750,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>NBF (National Bank of Fujairah)</td>
                  <td>AED 100,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: 'var(--ink)' }}>EIB (Emirates Islamic)</td>
                  <td>AED 100,000</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
