/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C
*/

function foo(callback) {
  setTimeout(function() {
    callback('A');
  }, Math.random()*100);
}

function bar(callback) {
  setTimeout(function() {
    callback('B');
  }, Math.random()*100);
}

function baz(callback) {
  setTimeout(function() {
    callback('C');
  }, Math.random()*100);
}

(async () => {
  const methods = [foo, bar, baz];
  const createPromise = func => new Promise(func);

  for (const f of methods) {
    console.log(await createPromise(f));
  }
})();
