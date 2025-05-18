import React from 'react';

export default function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} transition duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none`}
      {...props}
    >
      {children}
    </button>
  );
}
