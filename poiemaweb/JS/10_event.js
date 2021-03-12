// Asynchronous Processing Model
// Instead of happening top to bottom,
// we run the program in a parallel fashion


function func1() {
    console.log('func1');
    func2();
}
  
function func2() {
    setTimeout(function() {
      console.log('func2');
    }, 0);

    func3();
}
  
function func3() {
    console.log('func3');
}

func1();


// func1 func3 func2
// this is bc the function called in call stack is run first
// and the call back function only happens after the task running is done
// call back function waits in event queue until the running task terminates


// addEventListener() binds an event and call back function with target DOM element
addEventListener('click', function () {
    alert('Clicked!');
});
// when node not specified, the window is bound with event and function
const input = document.querySelector('input[type=text]');

input.addEventListener('blur', function () {
    alert('blur event occurred!');
});


// How to work around with a frequently used function

const MIN_USER_NAME_LENGTH = 2; // 이름 최소 길이

const input = document.querySelector('input[type=text]');
const msg = document.querySelector('.message');

function checkUserNameLength(n) {
    if (input.value.length < n) {
        msg.innerHTML = '이름은 ' + n + '자 이상이어야 합니다';
    } else {
        msg.innerHTML = '';
    }
}

input.addEventListener('blur', function () {
    // 이벤트 핸들러 내부에서 함수를 호출하면서 인수를 전달한다.
    checkUserNameLength(MIN_USER_NAME_LENGTH);
});

// 이벤트 핸들러 프로퍼티 방식도 동일한 방식으로 인수를 전달할 수 있다.
// input.onblur = function () {
//   // 이벤트 핸들러 내부에서 함수를 호출하면서 인수를 전달한다.
//   checkUserNameLength(MIN_USER_NAME_LENGTH);
// };

// this in an event handler

const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    console.log(this); // <button id="btn">Button</button>
    console.log(e.currentTarget); // <button id="btn">Button</button>
    console.log(this === e.currentTarget); // true
});

// Capturing and Bubbling
// When an event happens,
// event response in chain reaction from parent to target is called capture process
// and event response in chain reaction from target to parent is called bubbling
// At every occurrence of an event, they both happen.
// Capturing -> bubbling

// true: capturing / false: bubbling
const useCature = true;

const handler = function (e) {
  const phases = ['capturing', 'target', 'bubbling'];
  const node = this.nodeName + (this.className ? '.' + this.className : '');
  // eventPhase: 이벤트 흐름 상에서 어느 phase에 있는지를 반환한다.
  // 0 : 이벤트 없음 / 1 : 캡처링 단계 / 2 : 타깃 / 3 : 버블링 단계
  console.log(node, phases[e.eventPhase - 1]);
  alert(node + ' : ' + phases[e.eventPhase - 1]);
};

document.querySelector('html').addEventListener('click', handler, useCature);
document.querySelector('body').addEventListener('click', handler, useCature);

document.querySelector('div.top').addEventListener('click', handler, useCature);
document.querySelector('div.middle').addEventListener('click', handler, useCature);
document.querySelector('div.bottom').addEventListener('click', handler, useCature);



// Event object
// implicit argument passing
function showCoords(e) { // e: event object
    const msg = document.querySelector('.message');
    msg.innerHTML =
        'clientX value: ' + e.clientX + '<br>' +
        'clientY value: ' + e.clientY;
}
addEventListener('click', showCoords);


// better to explicitly show that event will be assigned to e
function showCoords(e, msg) {
    msg.innerHTML =
    'clientX value: ' + e.clientX + '<br>' +
    'clientY value: ' + e.clientY;
}

const msg = document.querySelector('.message');

addEventListener('click', function (e) {
showCoords(e, msg);
});


  // Properties of Event object
  // target
    // The element that caused the event

// for each element
function hide(e) {
    e.target.style.visibility = 'hidden';
    // 동일하게 동작한다.
    // this.style.visibility = 'hidden';
}

document.getElementById('btn1').addEventListener('click', hide);
document.getElementById('btn2').addEventListener('click', hide);

// for multiple elements
const container = document.querySelector('.container');

function hide(e) {
  // e.target은 실제로 이벤트를 발생시킨 DOM 요소를 가리킨다.
  e.target.style.visibility = 'hidden';
  // this는 이벤트에 바인딩된 DOM 요소(.container)를 가리킨다. 따라서 .container 요소를 감춘다.
  // this.style.visibility = 'hidden';
}

container.addEventListener('click', hide);


// currentTarget : the DOM element bound to the event, aka what's in front of
//                 addEventListener
/*
<div>
    <button>배경색 변경</button>
</div>
*/
function bluify(e) {
    // this: 이벤트에 바인딩된 DOM 요소(div 요소)
    console.log('this: ', this);
    // target: 실제로 이벤트를 발생시킨 요소(button 요소 또는 div 요소)
    console.log('e.target:', e.target);
    // currentTarget: 이벤트에 바인딩된 DOM 요소(div 요소)
    console.log('e.currentTarget: ', e.currentTarget);

    // 언제나 true
    console.log(this === e.currentTarget);
    // currentTarget과 target이 같은 객체일 때 true
    console.log(this === e.target);

    // click 이벤트가 발생하면 이벤트를 발생시킨 요소(target)과는 상관없이 this(이벤트에 바인딩된 div 요소)의 배경색이 변경된다.
    this.style.backgroundColor = '#A5D9F3';
}

// div 요소에 이벤트 핸들러가 바인딩되어 있다.
// 자식 요소인 button이 발생시킨 이벤트가 버블링되어 div 요소에도 전파된다.
// 따라서 div 요소에 이벤트 핸들러가 바인딩되어 있으면 자식 요소인 button이 발생시킨 이벤트를 div 요소에서도 핸들링할 수 있다.
document.querySelector('div').addEventListener('click', bluify);


// type
    // returns the string describing the type of event

const body = document.querySelector('body');

function getEventType(e) {
    console.log(e);
    document.querySelector('.message').innerHTML = `${e.type} : ${e.keyCode}`;
}

body.addEventListener('keydown', getEventType);
body.addEventListener('keyup', getEventType);


// cancelable
// shows if the default action of the element can be canceled
const elem = document.querySelector('a');

elem.addEventListener('click', function (e) {
    console.log(e.cancelable);

    // 기본 동작을 중단시킨다.
    e.preventDefault();
});

// eventPhase
    // property for eventPhase the event is in
// 0 : No event
// 1 : Capturing
// 2 : target
// 3 : Bubbling


// Event delegation
    // creating a parent element for elements that should all work the same
    // you can specify each of them using e.target
const msg = document.querySelector('.msg');
const list = document.querySelector('.post-list')

list.addEventListener('click', function (e) {
    // 이벤트를 발생시킨 요소
    console.log('[target]: ' + e.target);
    // 이벤트를 발생시킨 요소의 nodeName
    console.log('[target.nodeName]: ' + e.target.nodeName);

    // li 요소 이외의 요소에서 발생한 이벤트는 대응하지 않는다.
    if (e.target && e.target.nodeName === 'LI') {
    msg.innerHTML = 'li#' + e.target.id + ' was clicked!';
    }
});

// preventDefault() method
    // prevents the element from doing its default action

// stopPropagation() method
    // prevents the event propagating(capturing and bubbling)

// In JQuery
// you can do the above two by simply returning false in the call back function