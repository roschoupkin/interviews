/**
 * Написать функцию которая возвращает случайный цвет.
 * getRandomHexColor() #0f19ab;
 * getRandomHexColor() #e99064;
 */

// Максимальное шестнадцатиричное число 0xffffff
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

console.log(getRandomHexColor());
