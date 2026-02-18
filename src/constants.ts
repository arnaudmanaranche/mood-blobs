import { Mood, Size } from './types';

export const SIZES: Record<Size, number> = {
  xs: 80,
  s: 120,
  m: 160,
  l: 220,
  xl: 300,
};

export const DEFAULT_COLORS: Record<Mood, string> = {
  happy: '#FFD93D',
  sad: '#74B9FF',
  angry: '#FF6B6B',
  surprised: '#A29BFE',
  nervous: '#55EFC4',
  cool: '#636E72',
  love: '#FD79A8',
  disgusted: '#6C5CE7',
  sleepy: '#B2BEC3',
  excited: '#FDCB6E',
};

export const ANIMATION_DURATIONS: Record<Mood, number> = {
  happy: 650,
  sad: 900,
  angry: 600,
  surprised: 550,
  nervous: 750,
  cool: 900,
  love: 850,
  disgusted: 700,
  sleepy: 1100,
  excited: 700,
};
