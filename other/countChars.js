function counter(str) {
  return str.replace(/([a-z])\1+/g, (m) => `${m[0]}${m.length}`);
}

console.log(counter('aaaaasssddffghh')); // a5s3d2f2gh2
