// different from Java's this keyword

// *** global variable is also counted as a property of the global object

var foo = function () {
console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();
// this refers to the global object
// this includes any internal functions(not methods but within methods, callback or normal)
// in browser, it refers to window
// in terminal, it refers to global

var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this;  // Workaround : this === obj

    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ",  that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  }
};

obj.foo();

// or you may use call, apply, or bind

var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar(a, b) {
      console.log("bar's this: ",  this); // obj
      console.log("bar's this.value: ", this.value); // 100
      console.log("bar's arguments: ", arguments);
    }
    bar.apply(obj, [1, 2]);
    bar.call(obj, 1, 2);
    bar.bind(obj)(1, 2);
  }
};

obj.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj
// refers to the object that contains method

// 3. 생성자 함수 호출
var instance = new foo(); // instance
// refers to the instance created

// Scope-Safe Constructor Pattern
function A(arg) {
// 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

/*
this가 호출된 함수(arguments.callee, 본 예제의 경우 A)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로 이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
arguments.callee는 호출된 함수의 이름을 나타낸다. 이 예제의 경우 A로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
*/
if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arg);
}

// 프로퍼티 생성과 값의 할당
this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);


// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar

// apply makes the function call but specifies what 'this' will refer to
var Person = function (name) {
this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }

// One of its main use is when you want to use array method on
// 유사 arrays(e.g. arguments)
function convertArgsToArray() {
console.log(arguments);

// arguments 객체를 배열로 변환
// slice: 배열의 특정 부분에 대한 복사본을 생성한다.
var arr = Array.prototype.slice.apply(arguments); // arguments.slice
// var arr = [].slice.apply(arguments);

console.log(arr);
return arr;
}

convertArgsToArray(1, 2, 3);

// call and apply are same except that apply has to use an array for second argument
// while call just employs variable argument
Person.apply(foo, [1, 2, 3]);

Person.call(foo, 1, 2, 3);

// also useful in call back functions
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    callback.call(this);
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'

// if this is also too much work, you can use bind
function Person(name) {
this.name = name;
}

Person.prototype.doSomething = function (callback) {
if (typeof callback == 'function') {
    // callback.call(this);
    // this가 바인딩된 새로운 함수를 호출
    callback.bind(this)();
}
};

function foo() {
console.log('#', this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'