// inheritance in JS is a chain of prototypes
// prototype is an object instance
// When inheriting, it clones an already existing object
// and uses it as a prototype.

// Object.prototype is the top prototype in the prototype chain

var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 프로토타입으로 가집니다.


// constructing a prototype
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}


var myDog = new Dog("black", "깜순이", 1);

