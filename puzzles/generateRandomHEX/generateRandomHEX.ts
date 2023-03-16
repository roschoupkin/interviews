const MAX_NUMBER_16 = 0xffffff; // Максимальное шестнадцатиричное число

export default function generateRandomHEX() {
  return '#' + Math.floor(Math.random() * MAX_NUMBER_16).toString(16);
}
