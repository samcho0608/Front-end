var x;
x = 6;

var str = 'Hello World';

// 7 data types offered by JS

// primitive data types
//      immutable
//      pass by value

// 1. numeric literals
//      all numeric data are processed as double
10.50
1001
// special values
Infinity // 10 / 0
-Infinity // 10 / -0
NaN // 1 * 'string', 0/0

// 2. string literal
//      immutable
//      may access each index like array but cannot alter it
'hello'
"world"

// 3. boolean literal
//      '', undefined, 0 are all false
true
false

// 4. null
//   not Null, or NULL (JS is case-sensitive)
//   used to intentionally note that there is no value
//   typeof doesn't work with null(returns Object instead)
//      so use === null to check if something is null
null

// 5. undefined
//      all declared but not initalized values are initialized with undefined
//      mainly used to note that a variable has never been initialized
//      when you need to assign an empty value, assign null not undefined
undefined

// 6. symbol
//      used to create a property key of an object that has no risk of collision
//      is unique and different from other keys
//      *** why is this a thing?
//          you can access properties using field name string but it's 귀찮아
//          so they created a data type just for accessing properties
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value



// object data type
//      mutable
//      pass by reference

// 7. object literal
var sam = {name: 'Sam', gender:'male'};


// array literal
[1,2,3]

// regex literal
/ab+c/

// function literal
function() {}





// variables

// Identifier
    // Must start with alphabet, underscore, or $
    // numbers allowed after it
    // case-sensitive

// Declaration:
    // Done with keywords var, let, const
    // Hoisted aka declaration is processed at the very top
    // If not declared, raises reference error
    // may repeat declaration of same identifier(however, not recommended)

// Dynamic Typing: type of a variable is dynamically determined by its value


// Issues with var-declared variables aka the reasons why we gotta use let and const
// 1. function-level scope
    // over-used global variables
    // variable declared in for loop may be accessed from outside of for loop or global scope
// 2. var keyword may be omitted
    // unintended globalization of a variable
// 3. repeated declaration allowed
    // may unintentionally alter values of variables
// 4. variable hoisting
    // variable may be accessed before declaration

// Extra Operator Info
// implicit casting into a Number type
+10 // 10
+'10' // 10, not '10'
-true // -1
-false // -0

1 + null // 1
1 + undefined // NaN

// === operator checks if both type and value are same
5 === '5' // false
5 === 5 // true

// NaN is an except!
NaN === NaN // false
// Therefore use isNaN() to check if something is NaN
isNaN(NaN)

// ***typeof null issue
typeof null // "object"
// Instead use ===
null === null

typeof function () {} // "function"
typeof undeclared // "undeclared"


// *** Implicit Casting issue
    // Symbol type cannot be converted into a string

[10,20] + '' // "10,20"



// Explicit Casting

// 1. String
console.log(String(1));
console.log((1).toString());
console.log(1 + '');

// 2. Number
console.log(Number('0'));
console.log(parseInt('0'));
console.log(+'0');
console.log('0' * 1);

// 3. Boolean
console.log(Boolean('x'));
console.log(!!'x');

// && and ||
// these return the value of the operand that determined the ultimate result
'Cat' && 'Dog' // Dog
'Cat' || 'Dog' // Cat

// This is useful when you want to check if smth is null b4 accessing the property
var elem = null;
console.log(elem.value); // Error raised bc value is not a property of null
console.log(elem && elem.value); // null

function getStringLength(str) {
    str = str || '';
    return str.length;
}

// from ES6 you can just do
function getStringLength(str = '') {
    return str.length;
}