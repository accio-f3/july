let obj = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

// const updatedSayHello=sayHello.bind(obj);
// console.log(obj);
// func.bind -> will return the function which
// is having context of obj.

// sayHello('test1');

// __proto__ & prototype
// Bind

Function.prototype.myBind = function(obj,...args){
    obj.fn=this;
    const returnFn = function(...newArgs){
        const res = obj.fn(...args,...newArgs);
        return res;
    }
    return returnFn;
}

const updatedSayHello=sayHello.myBind(obj);
updatedSayHello('test1','test2');
updatedSayHello('t','q');

// function abc(){
//     //doing something
// }

// function test(){
//     return abc();
// }


function a(y,z){ // ...args 

}

function aClone(y,z){ // ...newArgs
    return a(y,z);
}