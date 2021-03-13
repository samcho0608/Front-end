// VARIABLE
// *** type not declared when declaring variable
// var IDENTIFIER = VALUE;

var num = 10;
// can be reinitialized but not redeclared(redeclaration is ignored)


/// CASTING

// Implicit Casting

10 + "string" // 10 casted to String type for concatenation
"3" * "5" // both casted to Number for multiplication operation
1 - "string" // NaN : Not a Number; resulted when 0/0 or arithmetic opertion with uncastable value happens

// Explicit Casting

Number("10"); // 10
String(true); // "true"
Boolean(0); // false
Object(3); // == new Number(3); 3




// Number class casting methods
toExponential() // uses scientific notation with e; argument determines the lenghth
                // of the decimal digits

// Determines the length of the resulting String with argument
// if too long, rounds
// if too short, adds trailing 0's
toFixed()   // the length of decimal digits
toPrecision()   // the length of the entire number




// Date class casting methods
Date() // the current locale time on your computer

// can be changed to String with explicit casting or toString()

// methods casting to Number
getDate() // 1 ~ 31

getDay() // Sunday: 0 ~ Saturday: 6

getFullYear() // number yyyy

getMonth() // Jan: 0 ~ Dec: 11

getTime() // time from 1970/1/1 to now in ms

getHours() // 0 ~ 23

getMinutes() // 0 ~ 59

getSeconds() // 0 ~ 59

getMilliseconds() // 0 ~ 999




// String class casting methods
parseInt()
parseFloat()