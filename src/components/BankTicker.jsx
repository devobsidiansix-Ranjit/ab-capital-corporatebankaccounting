import React from 'react';

/**
 * Animated moving marquee ticker showing the UAE bank partners.
 */
const BankTicker = () => {
  const banks = [
    'Wio Bank', 'Emirates Islamic Bank', 'M Bank (Al Mariah community)',
    'Bank A Misr', 'ADIB', 'Ruya Bank', 'FAB', 'UBL'
  ];

  // Repeat the list to allow continuous linear scrolling animation
  const scrollingItems = [...banks, ...banks];

  return (
    <div className="tape">
      <div className="tape-inner">
        {scrollingItems.map((bank, index) => (
          <span key={index} className="tape-item">
            {bank} {index < scrollingItems.length - 1 && <span className="tape-sep">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BankTicker;
