function outer(){
    let a =10;

    return function inner(){
        console.log(a)
    }
}

const fn = outer();
fn();

for( var i = 0; i<3; i++){
    setTimeout(function (){
        console.log(i);
    }, 1000)
}

for(let x = 0; x<3; x++){
    setTimeout(function (){
        console.log(x);
    },1000)
}

// another method:

for(var y = 0; y<3; y++){
    (function (z){
        setTimeout(function (){
            console.log(z);
        },1000)
    })(y)
}