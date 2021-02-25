// function is a first class object
// First-class object
//   1. 무명의 리터럴로 표현이 가능하다.
//   2. 변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
//   3. 함수의 파라미터로 전달할 수 있다.
//   4. 반환값(return value)으로 사용할 수 있다.

// function declaration
function square(number) {
    return number * number;
}

// is process by JS like below
var square = function square(number) {
    return number * number;
};

square(2);

// function expression
var square = function(number) {
    return number * number;
};

  // 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
};

// 익명 함수 표현식(anonymous function expression)
var bar = function(a, b) {
return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined


// Hoisting with these happen a bit differently

// function declaration processes declaration, initialization, and definition all at the same time
// however, function expression processes only the variable declaration and initialization. Therefore,
// functions created with function expression will raise error if accessed b4 definition

// recommended to use function expression for better program structure and readability




// First-class Object

// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
return --num;
};

var predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
var num = 0;

return function () {
    num = predicate(num);
    return num;
};
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// Properties

// arguments
// argument object contains all arguments passed in at the call
function sum() {
var res = 0;

for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
}

return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6

// caller : function that called this function
function foo(func) {
var res = func();
return res;
}

function bar() {
return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // null (browser에서의 실행 결과)

// length
// length argument is the number of arguments written at the definition of the function
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2

// name
// literally the name of the function

// __proto__
// points to the prototype of the current object

// prototype
// when function is a constructor, prototype is the prototype of the instance constructor creates


// IIFE
// single-use purpose function

// JS has an issue where all files share one global scope
// and therefore one may not know if a function of same name exists
// one can avoid such issue with IIFE
// ***to avoid identifier conflict with both functiona and variables

// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
var a = 3;
var b = 5;
return a * b;
}());

// 익명 즉시 실행 함수(immediately-invoked function expression)
(function () {
var a = 3;
var b = 5;
return a * b;
}());

// call back function
// a function called at an event
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('button clicked!');
});

// it is a closure, meaning it remembers the data from wherever it was declared
// so it can access those data when the it is executed

function doSomething() {
var name = 'Lee';

setTimeout(function () {
    console.log('My name is ' + name);
}, 100);
}

doSomething(); // My name is Lee