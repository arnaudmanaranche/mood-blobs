import React from 'react';
import { MoodComponentProps } from '../../types';

export const Nervous: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-nervous-jitter 750ms linear both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — slightly irregular */}
    <path
      d="M 100 20 C 132 14 174 38 180 78 C 186 118 166 162 128 178 C 116 184 84 184 72 178 C 34 162 14 118 20 78 C 26 38 68 26 100 20 Z"
      fill={color}
    />

    {/* Worried eyebrows — slightly asymmetric */}
    <path
      d="M 55 68 Q 72 62 89 70"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 111 70 Q 128 62 145 68"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Worried eyes — slightly wide */}
    <circle cx="72" cy="92" r="11" fill="#1a1a1a" />
    <circle cx="76" cy="88" r="3.5" fill="white" />

    <circle cx="128" cy="92" r="11" fill="#1a1a1a" />
    <circle cx="132" cy="88" r="3.5" fill="white" />

    {/* Nervous wavy/squiggly mouth */}
    <path
      d="M 66 132 C 78 124 88 142 100 132 C 112 122 122 140 134 132"
      stroke="#1a1a1a"
      strokeWidth="5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Sweat drop on temple */}
    <path
      d="M 158 62 C 163 54 172 62 168 70 C 165 76 157 76 154 70 C 152 64 156 56 158 62 Z"
      fill="#74B9FF"
      opacity="0.85"
    />
  </svg>
);
