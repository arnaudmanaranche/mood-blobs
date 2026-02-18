import React from 'react';
import { MoodComponentProps } from '../../types';

export const Love: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-love-pulse 850ms ease-in-out both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — heart-shaped top with two lobes */}
    <path
      d="M 100 30 C 100 18 118 12 134 20 C 158 32 178 62 178 96 C 178 136 152 172 120 184 C 110 190 90 190 80 184 C 48 172 22 136 22 96 C 22 62 42 32 66 20 C 82 12 100 18 100 30 Z"
      fill={color}
    />

    {/* Left heart eye */}
    <path
      d="M 72 98 C 58 92 52 80 56 70 C 58 64 66 62 72 68 C 78 62 86 64 88 70 C 92 80 86 92 72 98 Z"
      fill="#FF4081"
    />
    {/* Left heart shine */}
    <circle cx="65" cy="70" r="2.5" fill="white" opacity="0.6" />

    {/* Right heart eye */}
    <path
      d="M 128 98 C 114 92 108 80 112 70 C 114 64 122 62 128 68 C 134 62 142 64 144 70 C 148 80 142 92 128 98 Z"
      fill="#FF4081"
    />
    {/* Right heart shine */}
    <circle cx="121" cy="70" r="2.5" fill="white" opacity="0.6" />

    {/* Warm wide smile */}
    <path
      d="M 64 130 Q 100 158 136 130"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Floating hearts — decorative */}
    <path
      d="M 158 54 C 158 50 154 48 152 52 C 150 48 146 50 146 54 C 146 58 152 64 158 68 C 164 64 170 58 170 54 C 170 50 166 48 164 52 C 162 48 158 50 158 54 Z"
      fill="#FF4081"
      opacity="0.7"
    />
    <path
      d="M 42 60 C 42 57 39 55 37 58 C 35 55 32 57 32 60 C 32 63 37 68 42 72 C 47 68 52 63 52 60 C 52 57 49 55 47 58 C 45 55 42 57 42 60 Z"
      fill="#FF4081"
      opacity="0.55"
    />
  </svg>
);
