import React from 'react';
import { MoodComponentProps } from '../../types';

export const Cool: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-cool-swagger 900ms ease-in-out both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — smooth and relaxed */}
    <path
      d="M 100 22 C 140 18 180 52 182 92 C 184 134 158 174 118 184 C 108 188 92 188 82 184 C 42 174 16 134 18 92 C 20 52 60 26 100 22 Z"
      fill={color}
    />

    {/* Sunglasses — left lens */}
    <rect x="44" y="78" width="50" height="30" rx="10" fill="#1a1a1a" />
    {/* Sunglasses — right lens */}
    <rect x="106" y="78" width="50" height="30" rx="10" fill="#1a1a1a" />

    {/* Bridge between lenses */}
    <line x1="94" y1="93" x2="106" y2="93" stroke="#1a1a1a" strokeWidth="4" />

    {/* Left arm */}
    <line x1="44" y1="93" x2="30" y2="89" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
    {/* Right arm */}
    <line x1="156" y1="93" x2="170" y2="89" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />

    {/* Lens shine highlights */}
    <line x1="52" y1="84" x2="58" y2="90" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    <line x1="114" y1="84" x2="120" y2="90" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45" />

    {/* Smirk — asymmetric half-smile */}
    <path
      d="M 78 132 Q 108 150 128 132"
      stroke="#1a1a1a"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
