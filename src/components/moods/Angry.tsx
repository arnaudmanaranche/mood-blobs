import React from 'react';
import { MoodComponentProps } from '../../types';

export const Angry: React.FC<MoodComponentProps> = ({ color, size, className, style, isAnimating, onClick }) => (
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
      animation: isAnimating ? 'mb-angry-shake 600ms linear both' : undefined,
      ...(style ?? {}),
    }}
  >
    {/* Blob body — slightly compressed and tense */}
    <path
      d="M 100 26 C 136 22 174 46 178 82 C 182 118 162 158 128 172 C 116 178 100 180 82 172 C 46 156 20 114 20 78 C 20 44 64 30 100 26 Z"
      fill={color}
    />

    {/* Angry eyebrows — severe V inward */}
    <path
      d="M 50 70 L 86 84"
      stroke="#1a1a1a"
      strokeWidth="7.5"
      strokeLinecap="round"
    />
    <path
      d="M 114 84 L 150 70"
      stroke="#1a1a1a"
      strokeWidth="7.5"
      strokeLinecap="round"
    />

    {/* Eyes — narrowed to angry slits */}
    <path
      d="M 54 94 L 88 90"
      stroke="#1a1a1a"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M 112 90 L 146 94"
      stroke="#1a1a1a"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Tight angry frown */}
    <path
      d="M 68 138 Q 100 122 132 138"
      stroke="#1a1a1a"
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />

    {/* Forehead tension marks */}
    <path
      d="M 91 56 L 88 44"
      stroke="#1a1a1a"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.65"
    />
    <path
      d="M 109 56 L 112 44"
      stroke="#1a1a1a"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.65"
    />
  </svg>
);
