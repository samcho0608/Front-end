// 3 Ways to create an object

// 1. Object Literal
var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person);
console.log(person);

person.sayHello();

// 2. Object Constructor
var person = new Object();
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
}

console.log(typeof person);
console.log(person);

person.sayHello();

// 3. Constructor function
function Person(name, gender){
    var married = true; // private
    this.name = name;   // public
    this.gender = gender;   // public
    this.sayHello = function() {    // public
        console.log('Hi! My name is ' + this.name);
    }
}

// the new keyword signals that the function is a constructor
var person = new Person('Lee', 'male');

console.log(typeof person);
console.log(person);
person.sayHello();

console.log(person.gender);
console.log(person.married);

// properties
// uses string(if not string or symbol, casted into string) and symbol for identifier

// can be accessed with . method or [] method
// for [], USE STRING
// also person.1 doesn't work so use person['1']

// you can delete a property using delete keyword


// you can use for-in statement to iterate through the properties
for (var i in person) {
    console.log(i + ': ' + person[i])
}

// for arrays, for-in iterates through the indices, not the values
// it is preferred not to use for-in statement with arrays bc
// it may iterate through not just the indices
// e.g.
const array = [1,2,3]
array.name = 'my array'

for (var index in array) {
    console.log(index + ': ' + array[index]);
}

/*
0: 1
1: 2
2: 3
name: my array
*/

// Instead use for-of with arrays
const array = [1,2,3]
array.name = 'my array'

// basically for-each
for (const value of array) {
    console.log(value);
}

// basically enumerate in python
for (const [index, value] of array.entries()) {
    console.log(index, value);
}


// to copy an object(like copy constructor) you use Object.assign
// man)
//  Object.assign(target, ... sources)
// copies all properties in sources to target and returns target

// copy
const obj = {a: 1};
const copy = Object.assign({}, obj);

// merge
const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};
const merge1 = Object.assign(o1, o2, o3);
// merge1 === o1
delete o1.b;
delete o1.c;
const merge2 = Object.assign({}, o1, o2, o3);
// merge2 !== o1

// if there is a nested object, that one is shallow copied, not deep copied( aka properties point to the same object)
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // 새로운 빈 객체에 user1을 copy한다.
  const user2 = Object.assign({}, user1);
  // user1과 user2는 참조값이 다르다.
  console.log(user1 === user2); // false
  
  user2.name = 'Kim';
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim
  
  // 객체 내부의 객체(Nested Object)는 Shallow copy된다.
  console.log(user1.address === user2.address); // true
  
  user1.address.city = 'Busan';
  console.log(user1.address.city); // Busan
  console.log(user2.address.city); // Busan

// const declared variables will not be reinitialized
// but const declared objects' properties may be changed, they just cannot be reinitialized
