// prototype oop

// inherited through "prototype"
// inhertance chain == prototype chain
function Person(name) {
this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.

// prototype property of a function(constructor)
// points to the prototype object of the object constructed with it
// For instance, Person() has a prototype of Person.prototype
// foo is a Person instance
// therefore it shares the same prototype as Person

// Person.prototype.constructor refers to the constructor that creates
// a Person instance

console.log(Person.__proto__ === Function.prototype); // Person is a Function object

console.log(Person.prototype === foo.__proto__); // foo is of a Person object


console.log(Person.prototype.constructor === Person)


// Since prototype also is an object, when a property/method can be added,
// and this addition will projected onto the prototype chain
function Person(name) {
this.name = name;
}

var foo = new Person('Lee');

Person.prototype.sayHello = function(){
console.log('Hi! my name is ' + this.name);
};

foo.sayHello();

// primitives are not objects so you cannot add a property/method to it
// but you can add those to its prototype to add a custom property/method
// for em

// when you add a method/property to a prototype, it only shows up to
// instances/variables was declared after the addition
// the variables created after the addition no longer is binded to the
// original constructor. Instead its constructor is that of the original's
// prototype(following the prototype chain)

function Person(name) {
this.name = name;
}

var foo = new Person('Lee');

// 프로토타입 객체의 변경
Person.prototype = { gender: 'male' };

var bar = new Person('Kim');

console.log(foo.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // ① Person(name)
console.log(bar.constructor); // ② Object()