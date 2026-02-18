import React from 'react';
import { MoodComponentProps } from '../../types';

export const Disgusted: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-disgusted-recoil 700ms ease-out both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — slightly asymmetric/scrunched */}
    <path
      d="M 104 22 C 140 16 180 44 182 82 C 184 122 162 164 126 178 C 114 184 86 182 70 172 C 34 152 16 110 20 72 C 24 34 68 28 104 22 Z"
      fill={color}
    />

    {/* Left eyebrow — raised (skeptical) */}
    <path
      d="M 52 62 Q 70 54 88 62"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right eyebrow — furrowed/flat */}
    <path
      d="M 112 76 Q 128 72 146 76"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Left eye — open normal */}
    <circle cx="70" cy="86" r="10" fill="#1a1a1a" />
    <circle cx="74" cy="82" r="3.5" fill="white" />

    {/* Right eye — squinted (half-lidded) */}
    <path
      d="M 114 90 Q 129 80 144 90"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Grimace */}
    <path
      d="M 64 128 Q 76 116 88 130 Q 100 116 112 130 Q 124 116 136 128"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Tongue slightly sticking out */}
    <ellipse cx="100" cy="140" rx="14" ry="10" fill="#FF8FAB" />
    <line x1="100" y1="132" x2="100" y2="140" stroke="#E05C8A" strokeWidth="2" opacity="0.5" />
  </svg>
);
