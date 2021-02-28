/*
Согласно григорианскому календарю,
I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
II век начался в 101 году, III век — в 201 и т. д.
*/

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

centuryFromYear(1705) // 18
centuryFromYear(1900) // 19
centuryFromYear(1601) // 17
centuryFromYear(2000) // 20