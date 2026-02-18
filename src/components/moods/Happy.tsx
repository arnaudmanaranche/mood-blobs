import React from 'react';
import { MoodComponentProps } from '../../types';

export const Happy: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-happy-bounce 650ms cubic-bezier(0.36,0.07,0.19,0.97) both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — round and upbeat */}
    <path
      d="M 100 18 C 142 16 182 56 182 100 C 182 144 143 184 100 184 C 57 184 18 144 18 100 C 18 56 58 20 100 18 Z"
      fill={color}
    />

    {/* Cheeks */}
    <ellipse cx="57" cy="118" rx="17" ry="12" fill="#FF8FAB" opacity="0.45" />
    <ellipse cx="143" cy="118" rx="17" ry="12" fill="#FF8FAB" opacity="0.45" />

    {/* Left eye — happy squint arc */}
    <path
      d="M 58 92 Q 72 76 86 92"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right eye — happy squint arc */}
    <path
      d="M 114 92 Q 128 76 142 92"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Big smile */}
    <path
      d="M 62 118 Q 100 155 138 118"
      stroke="#1a1a1a"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
