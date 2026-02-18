export const KEYFRAMES_CSS: string = `
@keyframes mb-happy-bounce {
  0%   { transform: translateY(0) scaleX(1) scaleY(1); }
  20%  { transform: translateY(-30%) scaleX(0.9) scaleY(1.1); }
  40%  { transform: translateY(0) scaleX(1.15) scaleY(0.85); }
  55%  { transform: translateY(-15%) scaleX(0.95) scaleY(1.05); }
  70%  { transform: translateY(0) scaleX(1.05) scaleY(0.95); }
  85%  { transform: translateY(-5%) scaleX(1) scaleY(1); }
  100% { transform: translateY(0) scaleX(1) scaleY(1); }
}

@keyframes mb-sad-slump {
  0%   { transform: translateY(0) scaleX(1) scaleY(1); }
  30%  { transform: translateY(15%) scaleX(1.1) scaleY(0.85); }
  50%  { transform: translateY(20%) scaleX(1.15) scaleY(0.8); }
  65%  { transform: translateY(10%) scaleX(1.05) scaleY(0.9); }
  80%  { transform: translateY(5%) scaleX(1.02) scaleY(0.97); }
  100% { transform: translateY(0) scaleX(1) scaleY(1); }
}

@keyframes mb-angry-shake {
  0%   { transform: translateX(0) rotate(0deg) scale(1); }
  10%  { transform: translateX(-8%) rotate(-3deg) scale(1.05); }
  20%  { transform: translateX(8%) rotate(3deg) scale(1.05); }
  30%  { transform: translateX(-8%) rotate(-3deg) scale(1.05); }
  40%  { transform: translateX(8%) rotate(3deg) scale(1.05); }
  50%  { transform: translateX(-6%) rotate(-2deg) scale(1.02); }
  60%  { transform: translateX(6%) rotate(2deg) scale(1.02); }
  70%  { transform: translateX(-4%) rotate(-1deg) scale(1); }
  80%  { transform: translateX(4%) rotate(1deg) scale(1); }
  90%  { transform: translateX(-2%) rotate(0deg) scale(1); }
  100% { transform: translateX(0) rotate(0deg) scale(1); }
}

@keyframes mb-surprised-pop {
  0%   { transform: scale(1); }
  15%  { transform: scale(0.85); }
  35%  { transform: scale(1.3); }
  55%  { transform: scale(0.95); }
  70%  { transform: scale(1.05); }
  85%  { transform: scale(0.98); }
  100% { transform: scale(1); }
}

@keyframes mb-nervous-jitter {
  0%   { transform: translate(0, 0) rotate(0deg); }
  10%  { transform: translate(-3%, 2%) rotate(-1deg); }
  20%  { transform: translate(3%, -2%) rotate(1deg); }
  30%  { transform: translate(-2%, -3%) rotate(-1.5deg); }
  40%  { transform: translate(2%, 3%) rotate(1deg); }
  50%  { transform: translate(-3%, -1%) rotate(-0.5deg); }
  60%  { transform: translate(3%, 1%) rotate(1.5deg); }
  70%  { transform: translate(-1%, 2%) rotate(-1deg); }
  80%  { transform: translate(1%, -2%) rotate(0.5deg); }
  90%  { transform: translate(-2%, 1%) rotate(-0.5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes mb-cool-swagger {
  0%   { transform: translateX(0) rotate(0deg); }
  25%  { transform: translateX(-8%) rotate(-4deg); }
  50%  { transform: translateX(0) rotate(0deg); }
  75%  { transform: translateX(8%) rotate(4deg); }
  100% { transform: translateX(0) rotate(0deg); }
}

@keyframes mb-love-pulse {
  0%   { transform: scale(1); }
  15%  { transform: scale(1.15); }
  30%  { transform: scale(1); }
  45%  { transform: scale(1.2); }
  60%  { transform: scale(1); }
  80%  { transform: scale(1.02); }
  100% { transform: scale(1); }
}

@keyframes mb-disgusted-recoil {
  0%   { transform: translate(0, 0) rotate(0deg); }
  20%  { transform: translate(-15%, -10%) rotate(-8deg); }
  40%  { transform: translate(-10%, -5%) rotate(-5deg); }
  55%  { transform: translate(-5%, 0) rotate(-2deg) scaleX(1.05); }
  65%  { transform: translate(3%, 2%) rotate(2deg); }
  75%  { transform: translate(-2%, -1%) rotate(-1deg); }
  85%  { transform: translate(1%, 0) rotate(0.5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes mb-sleepy-nod {
  0%   { transform: translateY(0) rotate(0deg); }
  30%  { transform: translateY(10%) rotate(10deg); }
  60%  { transform: translateY(15%) rotate(15deg); }
  80%  { transform: translateY(8%) rotate(8deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes mb-excited-burst {
  0%   { transform: translateY(0) rotate(0deg) scale(1); }
  15%  { transform: translateY(-25%) rotate(8deg) scale(1.1); }
  30%  { transform: translateY(0) rotate(-4deg) scale(0.95); }
  45%  { transform: translateY(-18%) rotate(6deg) scale(1.08); }
  60%  { transform: translateY(0) rotate(-3deg) scale(0.97); }
  75%  { transform: translateY(-10%) rotate(4deg) scale(1.04); }
  88%  { transform: translateY(0) rotate(-2deg) scale(0.99); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
}
`;
