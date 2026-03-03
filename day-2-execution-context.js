console.log(this);

// console.log(a);
// let a = 20;

// function test (){
//     console.log(a);
// }

// test()

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