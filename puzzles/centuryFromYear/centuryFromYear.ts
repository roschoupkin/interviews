/*
  Согласно григорианскому календарю,
  I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
  II век начался в 101 году, III век — в 201 и т. д.
*/

export default function centuryFromYear(year: number) {
  return Math.ceil(year / 100);
}
