// Что будет в консоли после выполнения фрагмента кода?

(function() {
  var array = [];
  var i = 10;

  while (i--) {
    array.push(function() {
      return i + i;
    });
  }

  console.log([
    array[0](),
    array[1](),
  ]); // [-2, -2]
})();

// Вывести из предыдущей задачи [18, 16]

(function() {
  const array = [];
  let i = 10;

  while (i--) {
    let j = i;
    array.push(function() {
      return j + j;
    });
  }

  console.log([
    array[0](),
    array[1](),
  ]); // [18,16]
})();

// Вывести из предыдущей задачи [18, 16]

(function() {
  var array = [];
  var i = 10;

  while (i--) {
    (function(j) {
      array.push(function() {
        return j + j;
      })
    })(i);
  }

  console.log([
    array[0](),
    array[1](),
  ]); // [18,16]
})();

// Какой будет результат выполнения строк, отмеченных коментариями?

var a = {
  name: 'a',
  foo: function () {
    console.log(this.name);
  }
};

a.foo(); // a

var bar = a.foo;
bar(); // undefined

var b = {
  name: 'b'
};
b.foo = a.foo;
b.foo(); // b

var c = {
  name: 'c'
};

bar.call(c); // c
a.foo.apply(b); // b
a.foo.bind(b).call(c); // b
a.foo.bind(b).bind(c)(); // b
