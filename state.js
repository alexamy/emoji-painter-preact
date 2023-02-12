import { signal } from '@preact/signals';

export const brush = signal(':smile:');
export const background = signal(':white_square:');

export const images = signal({
  ':smile:': './smile.png',
  ':white_square:': './white_square.png',
});

export const field = signal([
  [':white_square:', ':smile:'],
  [':smile:', ':white_square:'],
]);
