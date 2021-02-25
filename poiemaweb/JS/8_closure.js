// function remembering its lexical scope context
// at its declaration

// this way, the program avoids using global variable
// which can be influence by an outsider.

// By using closure, the counter variable is not 'private'
// and this can only be changed by the increase function.

var incleaseBtn = document.getElementById('inclease');
var count = document.getElementById('count');

var increase = (function () {
    // 카운트 상태를 유지하기 위한 자유 변수
    var counter = 0;
    // 클로저를 반환
    return function () {
    return ++counter;
    };
}());

incleaseBtn.onclick = function () {
    count.innerHTML = increase();
};


// e.g.
// 함수를 인자로 전달받고 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 클로저로서 카운트 상태를 유지하기 위한 자유 변수 counter을 기억한다.
function makeCounter(predicate) {
// 카운트 상태를 유지하기 위한 자유 변수
var counter = 0;
// 클로저를 반환
return function () {
    counter = predicate(counter);
    return counter;
};
}

// 보조 함수
function increase(n) {
return ++n;
}

// 보조 함수
function decrease(n) {
return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2