// function-level scope
// unlike other languages, js's scope is not dependent
// on the block({}) but on the function.

// if you use the let keyword instead of var, you can
// still use the block scope

var x = 0;
{
  var x = 1; // global variable
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1; // local variable
  console.log(y); // 1
}
console.log(y);   // 0


if (true) {
var x = 5; // global variable
}
console.log(x);


// Lexical Scope
// a scope is determined where the function is declared not where it is called

// when you don't declare a variable but initialize a value
// it's considered to be in the global scope
// plus, it is actually a global property, not a variable
// therefore you can delete it(you cannot delete a variable)