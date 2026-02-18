import React from 'react';
import { MoodComponentProps } from '../../types';

export const Excited: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-excited-burst 700ms cubic-bezier(0.36,0.07,0.19,0.97) both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — energetic, slightly expanded */}
    <path
      d="M 100 14 C 140 10 182 42 186 82 C 190 124 168 166 132 180 C 118 188 82 188 68 180 C 32 166 10 124 14 82 C 18 42 60 18 100 14 Z"
      fill={color}
    />

    {/* Star left eye */}
    <path
      d="M 72 70 L 75.5 81 L 87 81 L 77.5 88 L 81 99 L 72 92 L 63 99 L 66.5 88 L 57 81 L 68.5 81 Z"
      fill="#1a1a1a"
    />
    {/* Star right eye */}
    <path
      d="M 128 70 L 131.5 81 L 143 81 L 133.5 88 L 137 99 L 128 92 L 119 99 L 122.5 88 L 113 81 L 124.5 81 Z"
      fill="#1a1a1a"
    />

    {/* Huge open grin — filled arc = open mouth */}
    <path
      d="M 52 124 Q 100 170 148 124 Z"
      fill="#1a1a1a"
    />
    {/* Teeth */}
    <line x1="58" y1="130" x2="142" y2="130" stroke="white" strokeWidth="10" strokeLinecap="round" />

    {/* Sparkle top-left */}
    <path
      d="M 30 56 L 32 44 L 34 56 L 46 58 L 34 60 L 32 72 L 30 60 L 18 58 Z"
      fill="white"
      opacity="0.8"
    />
    {/* Sparkle top-right */}
    <path
      d="M 170 42 L 172 32 L 174 42 L 184 44 L 174 46 L 172 56 L 170 46 L 160 44 Z"
      fill="white"
      opacity="0.7"
    />
  </svg>
);
