// array
// array type not set so data of multiple data types can be stored
// elements' indices doesn't have to be consecutive so certain elements may be empty

var arrLit = [1,2,]; // using array literal
var arrObj = Array(1,2,); // using Array object constructor
var arrNewOBj = new Array(1,2,); // creating Array instance

// indexing using []
// works like R somewhat by creating new column by assigning into non-existant index

var arr = ["JS"];
arr[1] = 10;    // arr.length changes from 1 to 2; arr[1] now is 10

delete arr[1];  // deletes the 3rd element but arr.length doesn't change

arr[100] = 'Sam'; // arr.length now is 101
// can also use push method to add a new element

// empty indices contain undefined value


// Types of Arrays

// 1. Sparse Array
// arrays with elements placed in non-consecutive indices
// literally sparse

// 2. Multidimensional Array
// 2D arrays and so on
// e.g.
var arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.

for (var row = 0; row < 3; row++) {

    arr[row] = new Array(4); // 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.

    for (var column = 0; column < 4; column++) {

        arr[row][column] = "[" + row + "," + column + "]"; // 각각의 배열 요소를 생성함.

        document.write(arr[row][column] + " ");            // 각 배열 요소에 접근함.

    }

}


// 3. Associative Array
// basically map
// but bc it uses string instead of number for index(key), it is no longer an Array object
// but is a default object
// therefore, the array methods may not work correctly
var arr = [];     // 비어있는 배열을 생성함.

arr["하나"] = 1;  // 숫자 인덱스 대신에 문자열을 인덱스로 배열 요소를 추가함.

arr["참"] = true;

arr["자바스크립트"] = "JavaScript";

document.write(arr["참"]);  // 문자열을 인덱스로 배열 요소에 접근할 수 있음.

document.write(arr.length); // 연관 배열은 Array 객체가 아니므로 length 프로퍼티의 값이 0임.

document.write(arr[0]);     // undefined

// string
// string can be used like array(from indexing to array's methods)
// but they're different in that string is read only aka immutable.
var str = "안녕하세요!"; // 문자열 생성

str[0] = "";             // 자바스크립트의 문자열은 읽기 전용이므로, 이 문장은 오류를 발생시킵니다.

// To fix this issue, use split method to change into array then do the assignment



// How to check if a variable is an array
// 1. Array.isArray()
document.write(Array.isArray(arr));      // true

document.write(Array.isArray("문자열")); // false

// 2. instanceof
document.write(arr instanceof Array); // true

document.write(123 instanceof Array); // false

