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
    // returns child node(text, element, etc.)
//  
// may not work properly bc of the newline or space used
// to separate tags(the whitespace text is saved as a textNode)

// Instead, you can use the following
// firstElementChild, lastElementChild
    // returns the child element
const elem = document.querySelector('ul');

// first Child
elem.firstElementChild.className = 'blue';
// last Child
elem.lastElementChild.className = 'blue';

// hasChildNodes()
    // checks if there is a child node

// childNodes()
    // returns a collection of all child nodes(non-live)

// children()
    // returns a collection of all child element nodes(live)

const elem = document.querySelector('ul');

if (elem.hasChildNodes()) {
    console.log(elem.childNodes);
    // 텍스트 요소를 포함한 모든 자식 요소를 반환한다.
    // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text]

    console.log(elem.children);
    // 자식 요소 중에서 Element type 요소만을 반환한다.
    // HTMLCollection(4) [li#one.red, li#two.red, li#three.red, li#four, one: li#one.red, two: li#two.red, three: li#three.red, four: li#four]
    [...elem.children].forEach(el => console.log(el.nodeType)); // 1 (=> Element node)
}


// previousSibling, nextSibling
// returns a sibling node

// previousElementSibling, nextElementSibling
// returns a sibling element node
const elem = document.querySelector('ul');

elem.firstElementChild.nextElementSibling.className = 'blue';
elem.firstElementChild.nextElementSibling.previousElementSibling.className = 'blue';



// Manipulation

// Manipulation of a text
// 1. Find the element whose text we want to change
// 2. Find the text node using firstChild
// 3. Manipulate the text with nodeValue property
const one = document.getElementById('one');
one.firstChild.nodeValue = 'Busan';

// nodeValue
    // returns the value of the node
    // string for textNode, null for Element Node

// you can obtain the node's info using nodeValue, nodeName, and nodeType
const one = document.getElementById('one');
console.dir(one); // displays an interactive list of the properties of the given object

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(one.nodeName); // LI
console.log(one.nodeType); // 1: Element node

// firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
const textNode = one.firstChild;

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(textNode.nodeName); // #text
console.log(textNode.nodeType); // 3: Text node

// nodeValue 프로퍼티를 사용하여 노드의 값을 취득한다.
console.log(textNode.nodeValue); // Seoul

// nodeValue 프로퍼티를 이용하여 텍스트를 수정한다.
textNode.nodeValue = 'Pusan';


// Attribute Node manipulation
// className : property referring to class attribute
// classList :
    // offers add, remove, item, toggle, contains, replace methods

const elems = document.querySelectorAll('li');

// className
[...elems].forEach(elem => {
    // class 어트리뷰트 값을 취득하여 확인
    if (elem.className === 'red') {
    // class 어트리뷰트 값을 변경한다.
    elem.className = 'blue';
    }
});

// classList
[...elems].forEach(elem => {
    // class 어트리뷰트 값 확인
    if (elem.classList.contains('blue')) {
    // class 어트리뷰트 값 변경한다.
    elem.classList.replace('blue', 'red');
    }
});

// id
    // property referring to the id of the element
    // creates a new one at assignment if previously didn't exist

// hasAttribute(attribute)
// getAttribute(attribute)
// setAttribute(attribute, value)
// removeAttribute(attribute)


// Content Manipulation

// textContent
    // element's property referring to its string content
    // markup is also shown as a string

// innerHTML
    // refers to a string containing all of its content including its child elements
    // you can change this to add a new element inside it
    // but it's preferred not to use this bc it's prone to XSS attack

// DOM Manipulation

// adding a new content without using innerHTML property

// 1. createElement() method to create a new element
// 2. createTextNode() method to create a new text node
// 3. appendChild() method to add the new node to an existing node
// 4. removeChild() method to remove a child node from a parent node
// 태그이름을 인자로 전달하여 요소를 생성
const newElem = document.createElement('li');
// const newElem = document.createElement('<li>test</li>');
// Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('<li>test</li>') is not a valid name.

// 텍스트 노드를 생성
const newText = document.createTextNode('Beijing');

// 텍스트 노드를 newElem 자식으로 DOM 트리에 추가
newElem.appendChild(newText);

const container = document.querySelector('ul');

// newElem을 container의 자식으로 DOM 트리에 추가. 마지막 요소로 추가된다.
container.appendChild(newElem);

const removeElem = document.getElementById('one');

// container의 자식인 removeElem 요소를 DOM 트리에 제거한다.
container.removeChild(removeElem);

// insertAdjacentHTML()

// inserAdjacentHTML(position, string)
//  position = 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
const one = document.getElementById('one');

// 마크업이 포함된 요소 추가
one.insertAdjacentHTML('beforeend', '<em class="blue">, Korea</em>');

// *** use textContent when changing text
//     use DOM manipulation when adding/removing a new element

// style property declares an 'inline' style 
const four = document.getElementById('four');

// inline 스타일 선언을 생성
four.style.color = 'blue';

// font-size와 같이 '-'으로 구분되는 프로퍼티는 카멜케이스로 변환하여 사용한다.
four.style.fontSize = '2em';

/**
 * 요소에 적용된 CSS 프로퍼티를 반환한다.
 * @param {HTTPElement} elem - 대상 요소 노드.
 * @param {string} prop - 대상 CSS 프로퍼티.
 * @returns {string} CSS 프로퍼티의 값.
 */
function getStyle(elem, prop) {
    return window.getComputedStyle(elem, null).getPropertyValue(prop);
}