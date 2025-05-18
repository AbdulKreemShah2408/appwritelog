import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="Logo"
      style={{ width }}
    />
  );
}

export default Logo;
