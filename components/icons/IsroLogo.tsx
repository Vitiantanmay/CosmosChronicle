
import React from 'react';

export const IsroLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 200 60"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 30 L30 10 L50 30 L30 50 Z" fill="#FF9933" />
    <path d="M30 10 L55 30 L30 50" fill="none" stroke="#FFFFFF" strokeWidth="4" />
    <text x="70" y="40" fontFamily="'Space Mono', monospace" fontSize="30" fill="#FFFFFF">ISRO</text>
  </svg>
);
