export function getRandomNumber(min: number, total: number): number {
  return Math.floor(Math.random() * total) + min;
}

export function sortNumberASC(array: Array<number>) {
  return array.sort((a, b) => a - b);
}

export function sortNumberDESC(array: Array<number>) {
  return array.sort((a, b) => b - a);
}
