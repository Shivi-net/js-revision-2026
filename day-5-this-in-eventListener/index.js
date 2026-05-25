// const button = document.getElementById('btn')

// button.addEventListener("click", function(){
//     console.log(this)
// })

// button.addEventListener("click", ()=>{
//     console.log(this)
// })

const obj={
    name:"react",
    init:function(){
        document.getElementById("btn").addEventListener("click",function(){
            console.log(this.name);
        });
    }
    
};

obj.init();