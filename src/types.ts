import { CSSProperties, MouseEventHandler } from 'react';

export type Mood =
  | 'happy'
  | 'sad'
  | 'angry'
  | 'surprised'
  | 'nervous'
  | 'cool'
  | 'love'
  | 'disgusted'
  | 'sleepy'
  | 'excited';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface MoodBlobProps {
  mood: Mood;
  size?: Size;
  color?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export interface MoodComponentProps {
  color: string;
  size: number;
  className?: string;
  style?: CSSProperties;
  isAnimating: boolean;
  onClick: MouseEventHandler<SVGSVGElement>;
}
