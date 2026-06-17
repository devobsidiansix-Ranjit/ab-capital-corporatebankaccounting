import React from 'react';
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
import adcbLogo from '../assets/bank_logos/adcb.svg';
import dibLogo from '../assets/bank_logos/dib.svg';

/**
 * Animated moving marquee ticker showing the UAE bank partners.
 */
const BankTicker = () => {
  const logos = [
    { src: wioLogo, alt: 'Wio Bank' },
    { src: emiratesIslamicLogo, alt: 'Emirates Islamic Bank' },
    { src: mbankLogo, alt: 'M Bank' },
    { src: banqueMisrLogo, alt: 'Banque Misr' },
    { src: adibLogo, alt: 'ADIB' },
    { src: ruyaLogo, alt: 'Ruya Bank' },
    { src: fabLogo, alt: 'FAB' },
    { src: ublLogo, alt: 'UBL' },
    { src: rakLogo, alt: 'RAKBANK' },
    { src: mashreqLogo, alt: 'Mashreq Bank' },
    { src: enbdLogo, alt: 'Emirates NBD' },
    { src: adcbLogo, alt: 'ADCB' },
    { src: dibLogo, alt: 'Dubai Islamic Bank' }
  ];

  const doubledLogos = [...logos, ...logos];

  return (
    <div className="tape" style={{ padding: 0, height: '90px', display: 'flex', alignItems: 'center' }}>
      <div className="tape-inner">
        {doubledLogos.map((logo, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
              borderRadius: '12px',
              padding: '6px 20px',
              margin: '0 25px',
              height: '52px',
              minWidth: '140px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              style={{ 
                height: '32px', 
                width: 'auto',
                maxWidth: '120px',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankTicker;
