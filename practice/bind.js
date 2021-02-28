function sum(a) {
  console.log(a + this.a);
}

sum(2); // NaN

// Current solution
const sum1 = sum.bind({ a: 1 });
sum1(2); // 3

// Solution with apply or call
function bindApply(func, context) {
  return (...values) => func.apply(context, values);
}

const sum2 = bindApply(sum, { a: 2 });
sum2(2); // 4

// Solution without apply or call
function bindSymbol(func, context) {
  const id = Symbol('func');
  const obj = { ...context, [id]: func };
  return obj[id];
}

const sum3 = bindSymbol(sum, { a: 3 });
sum3(2); // 5
