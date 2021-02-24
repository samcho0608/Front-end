// property == member variable
// method == member function

// default data type in JS is object

// can access properties using the following methods:
// OBJECT.PROPERTY
// OBJECT["PROPERTY"]

// 3 Different ways of creating an instance
// 1. literal notation
// e.g.
var kitty = {

    name: "나비",

    family: "코리안 숏 헤어",

    age: 1,

    weight: 0.1

};

// 2. using new and constructor
// e.g.
var day = new Date();

// 3. using Object.create()
// e.g.
var obj = Object.create(null, {             // null 프로토타입을 사용하여 새로운 객체를 만들고

    x: { value: 100, enumerable: true },    // x좌표를 나타내는 열거할 수 있는 프로퍼티와

    y: { value: 200, enumerable: true }     // y좌표를 나타내는 열거할 수 있는 프로퍼티를 추가함.

});

// instead of class inheritance like in C++, JS uses prototype inheritance
// in class inheritance, the child basically copies the parent class' definition when inheriting
// where as in prototype inheritance, the child refers to an already existing object instance
// and calls it its prototype


// you can also use class syntax for easier approach
class Dog extends Object{
    constructor(color, name, age){
        this.color = color;
        this.name = name;
        this.age = age;
    }
}
