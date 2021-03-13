// operators
// arithmetic
// + - / * %

// assignment
// = += -= /= *= %=

// increment
// ++ and -- available

// comparison
// == != > < >= <=
// === !== same thing as is and not is in python

// logical
// && || !

// ternary
// ? :


// Extra operators
// , : evaluates first operand and discard it, then evaluates the second and returns its result
// e.g.
for (var i = 0, j = 9; i <= j; i++, j--) {

    document.write("i의 값은 " + i + "이고, j의 값은 " + j + "입니다.<br>");

}

// delete
// deletes object, object's property or an element in array
// returns true when successful, false otherwise.
// e.g.
var arr = [1, 2, 3];          // 배열 생성

delete arr[2];                // 배열의 원소 중 인덱스가 2인 요소를 삭제함.

document.write(arr + "<br>"); // [1, 2, ]

// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정된 것은 아님.

document.write(arr[2] + "<br>"); // undefined

// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.

document.write(arr.length); // 3


// typeof()
// returns the typeof operand
// Number, NaN : "number"
// String : "string"
// true, false : "boolean"
// null : "object"
// undefined : "undefined"
// function : "function"
// object that's not a function : "object"

// instanceof() checks if operand is the instance of the given object

// void()
// always returns undefined










// for loops

// normal for loop is like that of c++

// for in
// enumerable
// basically for each but instead of value, it goes through properties
// e.g.
var arr = [3, 4, 5];

for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.

    document.write(i + " ");

}

for (var i in arr) { // 위와 같은 동작을 하는 for / in 문

    document.write(i + " ");

}

var obj = { name : "이순신", age : 20 };

for (var i in obj) {

    document.write(i + "<br>");

}

// for of
// iterable
// same as for each loop

// *** just like Java and C/C++ there is label!
// e.g.
arrIndex:       // label for the entire for loop after below it
for (var i in arr) {

    document.write(i);

}