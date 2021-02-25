// DOM : Document Object Mode
// Basically a tree of tags, attributes, and text that is created based
// on html file to render them on a browser

// Node types:

// Document Node aka the root
// Element Node : tags in html
// Attribute Node : attributes of tags in html
// Text Node : Text of tags in html

// How JS manipulates web page

// 1. searches for the element to manipulate
// 2. manipulates the content or attribute of the element chosen

// DOM Query of a single node

// document.getElementById(id)
// returns an HTMLElement inherited object
const elem = document.getElementById('one');
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = 'blue';

// 그림: DOM tree의 객체 구성 참고
console.log(elem); // <li id="one" class="blue">Seoul</li>
console.log(elem.__proto__);           // HTMLLIElement
console.log(elem.__proto__.__proto__); // HTMLElement
console.log(elem.__proto__.__proto__.__proto__);           // Element
console.log(elem.__proto__.__proto__.__proto__.__proto__); // Node

// document.querySelector(cssSelector)
// CSS 셀렉터를 이용해 요소를 선택한다
const elem = document.querySelector('li.red');
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = 'blue';


// DOM Query of multiple nodes
// document.getElementsByClassName(class)
// returns all nodes(HTMLCollection) with the same class attribute value
// *** HTMLCollection is live, meaning its content simultaneously changes
// based on the current status of the tags in HTML(once you change something,
// it may be removed from HTMLCollection). Therefore use reverse for loop, while, or 
// conversion into an Array(***).

const elems = document.getElementsByClassName('red');

// 유사 배열 객체인 HTMLCollection을 배열로 변환한다.
// 배열로 변환된 HTMLCollection은 더 이상 live하지 않다.
console.log([...elems]); // [li#one.red, li#two.red, li#three.red]

[...elems].forEach(elem => elem.className = 'blue');

// querySelectorAll
// returns a non-live NodeList
// querySelectorAll는 Nodelist(non-live)를 반환한다. IE8+
const elems = document.querySelectorAll('.red');

[...elems].forEach(elem => elem.className = 'blue');

// document.getElementsByTagName(tagName)
// returns a HTMLCollection of all nodes with the argument tagName

// document.querySelectorAll(selector)
// selects all nodes based on its CSS selector
// Nodelist를 반환한다.
const elems = document.querySelectorAll('li.red');

[...elems].forEach(elem => elem.className = 'blue');


// Traversal


// parentNode
// returns HTMLElement-inherited object
const elem = document.querySelector('#two');

elem.parentNode.className = 'blue';

// firstChild, lastChild
//  returns child node
//  
// may not work properly bc of the newline or space used
// to separate tags(the whitespace text is saved as a textNode)

// Instead, you can use the following
// firstElementChild, lastElementChild
