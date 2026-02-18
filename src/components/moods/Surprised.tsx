import React from 'react';
import { MoodComponentProps } from '../../types';

export const Surprised: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-surprised-pop 550ms cubic-bezier(0.36,0.07,0.19,0.97) both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — taller, stretched upward */}
    <path
      d="M 100 12 C 138 10 178 44 182 86 C 186 130 164 176 122 190 C 112 194 88 194 78 190 C 36 176 14 130 18 86 C 22 44 62 14 100 12 Z"
      fill={color}
    />

    {/* Raised eyebrows — high up */}
    <path
      d="M 52 60 Q 72 50 92 58"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 108 58 Q 128 50 148 60"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Wide open eyes */}
    <circle cx="72" cy="92" r="17" fill="#1a1a1a" />
    <circle cx="79" cy="86" r="5.5" fill="white" />

    <circle cx="128" cy="92" r="17" fill="#1a1a1a" />
    <circle cx="135" cy="86" r="5.5" fill="white" />

    {/* Open O-mouth */}
    <ellipse cx="100" cy="148" rx="20" ry="24" fill="#1a1a1a" />
    <ellipse cx="100" cy="152" rx="13" ry="16" fill="#7B1818" />
  </svg>
);
