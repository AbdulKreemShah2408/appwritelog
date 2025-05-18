import React from 'react';

function Logo({ width = '100px', className = '' }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="Logo"
      className={`w-auto max-h-12 object-contain ${className}`}
      style={{ width }}
    />
  );
}

export default Logo;
