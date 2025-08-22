
import React from 'react';

export const SpacexLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 400 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text x="0" y="40" fontFamily="'Space Mono', monospace" fontSize="40" fill="#FFFFFF" fontWeight="bold">
      <tspan>SPACE</tspan>
      <tspan fill="#A9A9A9">X</tspan>
    </text>
    <path d="M225 5 L 400 5" stroke="#A9A9A9" strokeWidth="3" />
  </svg>
);
