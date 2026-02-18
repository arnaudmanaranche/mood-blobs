import React from 'react';
import { MoodComponentProps } from '../../types';

export const Sad: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    style={{
      cursor: 'pointer',
      transformOrigin: '50% 50%',
      overflow: 'visible',
      animation: isAnimating ? 'mb-sad-slump 900ms ease-in-out both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — slightly droopy bottom */}
    <path
      d="M 100 24 C 138 20 174 54 176 94 C 178 134 156 174 116 188 C 106 192 94 192 84 188 C 44 174 22 134 24 94 C 26 54 62 28 100 24 Z"
      fill={color}
    />

    {/* Sad eyebrows — inner ends raised (worried look) */}
    <path
      d="M 57 68 Q 72 78 87 70"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 113 70 Q 128 78 143 68"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Left eye */}
    <circle cx="72" cy="94" r="9" fill="#1a1a1a" />
    <circle cx="76" cy="90" r="3" fill="white" />

    {/* Right eye */}
    <circle cx="128" cy="94" r="9" fill="#1a1a1a" />
    <circle cx="132" cy="90" r="3" fill="white" />

    {/* Tears */}
    <path
      d="M 68 104 C 65 112 63 118 66 122 C 68 126 72 124 72 120 C 72 116 70 110 68 104 Z"
      fill="#74B9FF"
      opacity="0.8"
    />
    <path
      d="M 130 104 C 127 112 125 118 128 122 C 130 126 134 124 134 120 C 134 116 132 110 130 104 Z"
      fill="#74B9FF"
      opacity="0.8"
    />

    {/* Frown */}
    <path
      d="M 68 140 Q 100 124 132 140"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
