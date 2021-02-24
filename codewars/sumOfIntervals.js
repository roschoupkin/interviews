/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 * Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 */

function sumIntervals(intervals) {
  const merge = ranges => {
    const result = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
      const last = result[result.length - 1];
      const range = ranges[i];
      if (!last || range[0] > last[1]) {
        result.push(range);
      } else if (range[1] > last[1]) {
        last[1] = range[1];
      }
    }

    return result;
  };
  const ranges = merge(intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]));
  return ranges.reduce((sum, val) => sum + (val[1] - val[0]), 0);
}

function sumIntervals2(intervals) {
  const ranges = new Set();

  intervals.forEach(([start, end]) => {
    for (let i = start; i < end; i++) ranges.add(i);
  });

  return ranges.size;
}

function sumIntervals3(intervals){
  const numbers = [];
  intervals.forEach( function(interval) {
    for (let i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) === -1) numbers.push(i);
    }
  });
  return numbers.length;
}

function sumIntervals4(intervals){
  const numbers = {};
  intervals.forEach((x) => {
    for (let i = x[0]; i < x[1]; i++) {
      numbers[i] = i;
    }
  });
  return Object.keys(numbers).length;
}

sumIntervals([[1,5]]); // 4
sumIntervals2([[1,5],[6,10]]); // 8
sumIntervals3([[1,5],[1,5]]); // 4
sumIntervals4([[1,4],[7, 10],[3, 5]]); // 7
