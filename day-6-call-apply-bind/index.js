// using call

const person ={
    name:"shivalika",
    greet: function (){
        console.log("hello " + this.name);
    }
};

const greetFn = person.greet;
greetFn.call(person);

// using apply

function greet1 (age,city){
    console.log(this.name, age, city)
}

const person1 = {
    name:"Shivalika"
}

greet1.apply(person1, [25, "delhi"])