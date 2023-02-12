import { signal, computed } from '@preact/signals';

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

export const fieldSize = computed(() => ({
  height: field.value.length,
  width: field.value[0].length,
}));

export function setHeight(newHeight) {
  const { width, height } = fieldSize.value;
  if(newHeight <= 0) return;

  if(newHeight < height) {
    field.value = field.value.slice(0, newHeight);
  } else if(newHeight > height) {
    const newRowsCount = newHeight - height;
    const newRows = Array(newRowsCount).fill().map(() => Array(width).fill(background.value));
    field.value = [...field.value, ...newRows];
  }
}
