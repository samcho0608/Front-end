// function also ia data type
// JS function can be nested in anoter function

// syntax
function addNum(num1, num2){
    return num1 + num2;
}

var number = addNum(1,2); // 3

// assigning function into a variable
var add = addNum;
document.write(add(1,2) + "<br>");
document.write(addNum(1,2));

// scope
// without var, declaring variable in a function creates a global variable
// to specify global variable when there's a local one with the same identifier,
// you may use window.VARIABLE

var num = 10; // 전역 변수 num을 선언함.

function globalNum() {

    var num = 20; // 같은 이름의 지역 변수 num을 선언함.

    document.write("함수 내부에서 지역 변수 num의 값은 " + num + "입니다.<br>");

    document.write("함수 내부에서 전역 변수 num의 값은 " + window.num + "입니다.<br>");

}

globalNum(); // 함수 globalNum()을 호출함.

// function scope vs block scope
// block scope == {}
// function scope == the scope function is created in

// if function is global, it may access all global variables and functions
// if function is defined in another function, it may access only the variables and
// functions within the parent function

// x, y, name을 전역 변수로 선언함.

var x = 10, y = 20;

// sub()를 전역 함수로 선언함.

function sub() {

    return x - y;     // 전역 변수인 x, y에 접근함.

}

document.write(sub() + "<br>");

// parentFunc()을 전역 함수로 선언함.

function parentFunc() {

    var x = 1, y = 2; // 전역 변수와 같은 이름으로 선언하여 전역 변수의 범위를 제한함.

    function add() {  // add() 함수는 내부 함수로 선언됨.

        return x + y; // 전역 변수가 아닌 지역 변수 x, y에 접근함.

    }

    return add();

}

document.write(parentFunc());


// hoisting
// all variable declarations and initializations are "hoisted," or run at the beginning
// of the code, even before the definition.
// if accessed before definition, the variable will be undefined(initialized value).
// e.g.
// actual code
var globalNum = 10;     // globalNum을 전역 변수로 선언함.

function printNum() {

    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); // ①

    var globalNum = 20; // globalNum을 지역 변수로 선언함.

    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");

}

printNum();

// after hoisting
var globalNum = 10;

function printNum() {

    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동됨.

    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>");

    globalNum = 20;

    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");

}

printNum();

// parameter : the variable
// argument : the value

// in JS, one can input less arguments than parameters
// the parameters without an argument will attain undefined value

// arguments object
// one can use arguments object to access the arguments
// useful for the cases when there are more arguments than parameters
// e.g.

function addNum() {

    var sum = 0;                                // 합을 저장할 변수 sum을 선언함.

    for(var i = 0; i < arguments.length; i++) { // 전달받은 인수의 총 수만큼 반복함.

        sum += arguments[i];                    // 전달받은 각각의 인수를 sum에 더함.

    }

    return sum;

}

addNum(1, 2, 3); // 6

addNum(1, 2);    // 3

addNum(1);       // 1

addNum();        // 0

addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55


// there's default parameter

// rest parameter
// using ...VARIABLE, can store however many arguments there are starting from its index
// e.g.

function sub() {

    var firstNum = arguments[0];                  // 첫 번째 인수에서

    for(var i = 0; i < arguments.length-1; i++) { // 두 번째부터 마지막 인수까지를

        firstNum -= arguments[i+1];               // 뺌.

    }

    return firstNum;

}

sub(10, 2, 3);    // 10 - 2 - 3 = 5

sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

// 첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장함.

function sub(firstNum, ...restArgs) {

    for(var i = 0; i < restArgs.length; i++) {

        firstNum -= restArgs[i];

    }

    return firstNum;

}

sub(10, 2, 3);    // 10 - 2 - 3 = 5

sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4