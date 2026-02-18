import React from 'react';
import { MoodComponentProps } from '../../types';

export const Sleepy: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-sleepy-nod 1100ms ease-in-out both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — slightly drooping asymmetric */}
    <path
      d="M 100 24 C 134 20 172 48 177 86 C 182 128 162 168 128 180 C 114 186 82 186 66 176 C 30 156 16 110 20 70 C 24 34 66 28 100 24 Z"
      fill={color}
    />

    {/* Left sleepy eye — D-shape (lid + bottom arc) */}
    <line x1="56" y1="90" x2="86" y2="90" stroke="#1a1a1a" strokeWidth="6.5" strokeLinecap="round" />
    <path
      d="M 56 90 Q 71 106 86 90"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right sleepy eye — D-shape */}
    <line x1="114" y1="90" x2="144" y2="90" stroke="#1a1a1a" strokeWidth="6.5" strokeLinecap="round" />
    <path
      d="M 114 90 Q 129 106 144 90"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Small open yawn mouth */}
    <ellipse cx="100" cy="140" rx="10" ry="13" fill="#1a1a1a" />
    <ellipse cx="100" cy="144" rx="6" ry="8" fill="#7B1818" />

    {/* Zzz — floating */}
    <text
      x="150"
      y="62"
      fontSize="22"
      fontWeight="bold"
      fill="#1a1a1a"
      opacity="0.55"
      fontFamily="sans-serif"
    >
      z
    </text>
    <text
      x="163"
      y="46"
      fontSize="16"
      fontWeight="bold"
      fill="#1a1a1a"
      opacity="0.38"
      fontFamily="sans-serif"
    >
      z
    </text>
    <text
      x="172"
      y="33"
      fontSize="11"
      fontWeight="bold"
      fill="#1a1a1a"
      opacity="0.22"
      fontFamily="sans-serif"
    >
      z
    </text>
  </svg>
);
