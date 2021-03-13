// eval()
// runs the JS code written in string
var x = 10, y = 20;

var a = eval("x + y"); // 30

var b = eval("y * 3"); // 60

document.write(a + "<br>" + b);


// isFinite()
// checks if argument is a finite number
// e.g.
isFinite(123);       // true

isFinite(123e100);   // true

isFinite(0);         // true

isFinite(true);      // true

isFinite(false);     // true

isFinite(null);      // true

isFinite("123");     // true

isFinite("");        // true

 

isFinite("문자열");  // false

isFinite(undefined); // false

isFinite(NaN);       // false



// isNaN()
// checks if the argument is NaN
isNaN(123);       // false

isNaN(123e100);   // false

isNaN(0);         // false

isNaN(true);      // false

isNaN(false);     // false

isNaN(null);      // false

isNaN("123");     // false

isNaN("");        // false

 

isNaN("문자열");  // true

isNaN(undefined); // true

isNaN(NaN);       // true

// *** due to the unexpected behavior casting to Number
// recommmend to use Number.isNaN() instead


// parseFloat()
// parses string into a float
parseFloat("123");        // 123

parseFloat("123.000");    // 123

parseFloat("123.456");    // 123.456

parseFloat("12 34 56");   // 12

parseFloat(" 123 ");      // 123

parseFloat("123 초콜릿"); // 123

parseFloat("초콜릿 123"); // NaN


// parseInt()
// parses string into an integer
parseInt("123");        // 123

parseInt("123.000");    // 123

parseInt("123.456");    // 123

parseInt("12 34 56");   // 12

parseInt(" 123 ");      // 123

parseInt("123 초콜릿"); // 123

parseInt("초콜릿 123"); // NaN

 

parseInt("10", 10);     // 10

parseInt("10", 8);      // 8

parseInt("10", 16);     // 16

parseInt("0x10");       // 16


// encodeURI() and encodeURIComponent()
// encodes URI(URL) into a hexadecimal escape sequence
// encodeURIComponent() encodes even the ones not encoded by encodeURI()
var uri = "http://google.com/search.php?name=홍길동&city=서울";

 

var enc1 = encodeURI(uri);

var enc2 = encodeURIComponent(uri); // http://google.com/search.php?name=%ED%99%8D%EA%B8%B8%EB%8F%99&city=%EC%84%9C%EC%9A%B8


document.write(enc1 + "<br>" + enc2); // http%3A%2F%2Fgoogle.com%2Fsearch.php%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26city%3D%EC%84%9C%EC%9A%B8

// decodeURI() and decodeURIComponent()
// decodes the hexadecimal escape characters
// basically reverses the above functions' results