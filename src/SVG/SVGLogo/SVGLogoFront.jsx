import React from 'react';
import './SVGLogo.css';

export default function LogoFront () {
  return (
    <svg
      className="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <polygon
        points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25"
        strokeWidth="4"
      />
      <text
        x="50"
        y="50"
        fontSize="60"
        textAnchor="middle"
        alignmentBaseline="central"
      >
      D
      </text>
    </svg>
  );
}
