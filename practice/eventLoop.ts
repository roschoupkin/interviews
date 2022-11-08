console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');

// V8: script start, script end, promise1, promise2, setTimeout
// Edge or Safari@8 or Firefox@40: script start, script end, setTimeout, promise1, promise2

try {
  Promise.reject();
} catch (e) {
  console.log('reject');
}
