// Difference between var, let, const

//var:
var x = 20;
var x = 15; // re-declare.
x = 25. // update

console.log(x); //output: 25

//let
let y =30;
//let y = 60; // let do not allow us to redeclare.
y =50; // update is allowed.

console.log(y);  //output = 50;

//const

const z = 10;
//const z = 15; // redeclare is not allowed.

// z = 30; // update is not allowed.

console.log(z); // output = 10;


// HOISTING:

// var
console.log(a);//var is hoisted and automatically initialized with undefined.
var a = 90;  

// let and const
console.log(b); // 
let b = 20;

console.log(c); //
const c = 40;

const d = 20;
console.log(d);

