// Import bank logos
import wioLogo from '../assets/bank_logos/wio.png';
import emiratesIslamicLogo from '../assets/bank_logos/emirates_islamic.png';
import mbankLogo from '../assets/bank_logos/mbank.png';
import banqueMisrLogo from '../assets/bank_logos/banque_misr.png';
import adibLogo from '../assets/bank_logos/adib.png';
import fabLogo from '../assets/bank_logos/fab.png';
import ublLogo from '../assets/bank_logos/ubl.png';
import ruyaLogo from '../assets/bank_logos/ruya.png';
import rakLogo from '../assets/bank_logos/rak.svg';
import mashreqLogo from '../assets/bank_logos/mashreq.svg';
import enbdLogo from '../assets/bank_logos/enbd.svg';
import adcbLogo from '../assets/bank_logos/adcb.png';
import dibLogo from '../assets/bank_logos/dib.png';
import cbdLogo from '../assets/bank_logos/cbd.png';
import sharjahIslamicLogo from '../assets/bank_logos/sharjah_islamic.png';
import ajmanLogo from '../assets/bank_logos/ajman.png';

/**
 * Redesigned BanksSection matching the high-fidelity Image 5 banking layout.
 * Equipped with responsive vector SVG bank logos, statistics, and a vertical blockquote panel.
 */
const BanksSection = () => {
  return (
    <section className="banks-sec reveal" id="banks">
      
      {/* Image 5 Header Layout */}
      <div className="banks-top-row">
        <div>
          <div className="eyebrow">Banking Network</div>
          <h2>15+ Bank <em>Partnerships</em></h2>
          <p className="section-lead">
            We don't submit blind applications. Our consultants have direct working relationships with compliance teams at major UAE banks.
          </p>
        </div>

        {/* 3 Horizontal Metrics Pills */}
        <div className="banks-metrics-horizontal">
          <div className="bank-metric-pill-item reveal d1">
            <span className="bank-metric-badge-dot"></span>
            Direct Relationships
          </div>
          <div className="bank-metric-pill-item reveal d2">
            <span className="bank-metric-badge-dot"></span>
            Higher Success Rate
          </div>
          <div className="bank-metric-pill-item reveal d3">
            <span className="bank-metric-badge-dot"></span>
            Faster Process
          </div>
        </div>
      </div>

      {/* Path row label */}
      <div className="banks-path-sep">
        Our Banking Partners
      </div>

      {/* Responsive Grid with Bank Logos */}
      <div className="banks-logos-grid">
        
        {/* 1. ADCB */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={adcbLogo} alt="ADCB Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">ADCB</span>
        </div>

        {/* 2. ADIB */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={adibLogo} alt="ADIB Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">ADIB</span>
        </div>

        {/* 3. RAKBANK */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={rakLogo} alt="RAKBANK Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">RAKBANK</span>
        </div>

        {/* 4. Wio Bank */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={wioLogo} alt="Wio Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Wio Bank</span>
        </div>

        {/* 5. Mashreq Bank */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={mashreqLogo} alt="Mashreq Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Mashreq Bank</span>
        </div>

        {/* 6. Dubai Islamic Bank */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={dibLogo} alt="Dubai Islamic Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Dubai Islamic Bank</span>
        </div>

        {/* 7. FAB */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={fabLogo} alt="FAB Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">FAB</span>
        </div>

        {/* 8. Emirates NBD */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={enbdLogo} alt="Emirates NBD Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Emirates NBD</span>
        </div>

        {/* 9. Emirates Islamic Bank */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={emiratesIslamicLogo} alt="Emirates Islamic Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Emirates Islamic Bank</span>
        </div>

        {/* 10. Sharjah Islamic Bank */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={sharjahIslamicLogo} alt="Sharjah Islamic Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Sharjah Islamic Bank</span>
        </div>

        {/* 11. CBD */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={cbdLogo} alt="Commercial Bank of Dubai Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Commercial Bank of Dubai</span>
        </div>

        {/* 12. UBL */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={ublLogo} alt="UBL Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">UBL</span>
        </div>

        {/* 13. Banque Misr */}
        <div className="bank-logo-card reveal d1">
          <div className="bank-logo-visual">
            <img src={banqueMisrLogo} alt="Banque Misr Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Banque Misr</span>
        </div>

        {/* 14. Ruya Bank */}
        <div className="bank-logo-card reveal d2">
          <div className="bank-logo-visual">
            <img src={ruyaLogo} alt="Ruya Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Ruya Bank</span>
        </div>

        {/* 15. M Bank */}
        <div className="bank-logo-card reveal d3">
          <div className="bank-logo-visual">
            <img src={mbankLogo} alt="M Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">M Bank</span>
        </div>

        {/* 16. Ajman Bank */}
        <div className="bank-logo-card reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="bank-logo-visual">
            <img src={ajmanLogo} alt="Ajman Bank Logo" className="bank-logo-img" />
          </div>
          <span className="bank-logo-name">Ajman Bank</span>
        </div>

      </div>

      {/* Table Section: Zero Balance Low & Medium Risk Accounts */}
      <div className="reveal" style={{ marginTop: '56px', marginBottom: '40px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
            Account Fees &amp; Minimum Balance Guide
          </h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '15px' }}>
            Zero-balance options and account maintenance costs for <strong>Low &amp; Medium Risk</strong> profiles across UAE banks.
          </p>
        </div>
        <div className="risk-table-wrap">
          <table className="risk-table">
            <thead>
              <tr>
                <th>Bank Name</th>
                <th>Minimum Balance Required</th>
                <th>Monthly Maintenance Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Wio Bank</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 99</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Mashreq</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 99</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>ADCB</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 131</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>RAKBANK</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 149</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>ADIB</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 125</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Emirates NBD</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 250</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>M Bank (Al Mariah community)</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>Ruya Bank</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero Balance</td>
                <td>AED 79</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>FAB (First Abu Dhabi Bank)</td>
                <td>AED 10,000</td>
                <td>AED 250</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>UBL (Standard)</td>
                <td>AED 25,000</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>DIB (Dubai Islamic Bank)</td>
                <td>AED 50,000</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>NBF (National Bank of Fujairah)</td>
                <td>AED 25,000</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Zero</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>EIB (Emirates Islamic)</td>
                <td>AED 10,000 - 50,000</td>
                <td>AED 125 - 200</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 Section: Zero Balance High Risk Accounts */}
        <div style={{ marginTop: '48px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
            High Risk Account Profile Guide
          </h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '15px' }}>
            Minimum balance requirements and monthly maintenance fees for <strong>High-Risk</strong> profiles.
          </p>
        </div>
        <div className="risk-table-wrap">
          <table className="risk-table">
            <thead>
              <tr>
                <th>Bank Name</th>
                <th>Minimum Balance Required</th>
                <th>Monthly Maintenance Fees</th>
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
    </section>
  );
};

export default BanksSection;
