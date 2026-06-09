import React, { useState } from 'react';

/**
 * Reusable image slot component with loading states and fade-in transitions.
 */
const ImageSlot = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`img-slot ${className}`}>
      {!isLoaded && <div className="img-placeholder-spinner" />}
      <img
        src={src}
        alt={alt}
        className={isLoaded ? 'loaded' : ''}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default ImageSlot;
