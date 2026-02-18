import React, { useState, useEffect } from 'react';
import { MoodBlobProps } from '../types';
import { SIZES, DEFAULT_COLORS, ANIMATION_DURATIONS } from '../constants';
import { KEYFRAMES_CSS } from '../animations';
import { moods } from './moods';

let stylesInjected = false;

export const MoodBlob: React.FC<MoodBlobProps> = ({
  mood,
  size = 'm',
  color,
  className,
  style,
  onClick,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined' || stylesInjected) return;
    stylesInjected = true;
    const el = document.createElement('style');
    el.setAttribute('data-mood-blobs', '');
    el.textContent = KEYFRAMES_CSS;
    document.head.appendChild(el);
  }, []);

  const handleClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATIONS[mood]);
    }
    onClick?.(e);
  };

  const pixelSize = SIZES[size];
  const blobColor = color ?? DEFAULT_COLORS[mood];
  const MoodComponent = moods[mood];

  return (
    <MoodComponent
      color={blobColor}
      size={pixelSize}
      className={className}
      style={style}
      isAnimating={isAnimating}
      onClick={handleClick}
    />
  );
};
