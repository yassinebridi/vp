export function randomFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomsFromArray<T>(array: T[], number?: number) {
  return array.sort(() => Math.random() - Math.random()).slice(0, number);
}

export function hasProperties(obj): boolean {
  return obj && obj.constructor === Object && Object.keys(obj).length >= 1;
}

export const getTodayStart = () => {
  const today = new Date();
  today.setUTCHours(20, 0, 0, 0);
  today.setUTCDate(today.getDate() - 1);
  return today.toISOString();
};

export const getTodayEnd = () => {
  const today = new Date();
  today.setUTCHours(4, 0, 0, 0);
  today.setUTCDate(today.getDate() + 1);
  return today.toISOString();
};

export const getTomorrowStart = () => {
  const today = new Date();
  today.setUTCHours(20, 0, 0, 0);
  today.setUTCDate(today.getDate());
  return today.toISOString();
};

export const getTomorrowEnd = () => {
  const today = new Date();
  today.setUTCHours(4, 0, 0, 0);
  today.setUTCDate(today.getDate() + 2);
  return today.toISOString();
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const isProd = process.env.NODE_ENV === 'production';

export const range = (s: number, e: number) =>
  Array.from('x'.repeat(e - s), (_, i) => s + i);
