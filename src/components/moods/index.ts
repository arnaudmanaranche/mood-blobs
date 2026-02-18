import { FC } from 'react';
import { Mood, MoodComponentProps } from '../../types';
import { Happy } from './Happy';
import { Sad } from './Sad';
import { Angry } from './Angry';
import { Surprised } from './Surprised';
import { Nervous } from './Nervous';
import { Cool } from './Cool';
import { Love } from './Love';
import { Disgusted } from './Disgusted';
import { Sleepy } from './Sleepy';
import { Excited } from './Excited';

export const moods: Record<Mood, FC<MoodComponentProps>> = {
  happy: Happy,
  sad: Sad,
  angry: Angry,
  surprised: Surprised,
  nervous: Nervous,
  cool: Cool,
  love: Love,
  disgusted: Disgusted,
  sleepy: Sleepy,
  excited: Excited,
};

export {
  Happy,
  Sad,
  Angry,
  Surprised,
  Nervous,
  Cool,
  Love,
  Disgusted,
  Sleepy,
  Excited,
};
