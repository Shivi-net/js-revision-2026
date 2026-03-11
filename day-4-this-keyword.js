// this in global scope

console.log(this)

// this inside a function

function test(){
    console.log("this is a function ",this)
}
test()

"use strict";
function test2(){
    console.log(this)
}
test2();

// this keyword in an object method:
const obj ={
    name: "react",
    show: function(){
        console.log(this.name)
    }
};
obj.show();

// example 2:
var person ={
    firstName: "john",
    lastName: "doe",
    id:"5566",
    getThis: function(){
        return this;
    }
};
console.log(person.getThis())