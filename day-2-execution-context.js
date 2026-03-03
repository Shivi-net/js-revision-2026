console.log(this);



var a = 10;
function test(){
    console.log(a);
}

function demo(){
    var a = 20;
    return test;
}

var fn = demo();
fn();

console.log(x);
let x = 20;

function test2 (){
    console.log(a);
}

test2()