let obj = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

// sayHello('test1','test2');

// // to be bind with obj object;
// sayHello.apply(obj,[]);
// sayHello.call(obj,'tes1','tes2');
let dbArray=['test1','test2','test3'];
// sayHello.apply(obj,dbArray);
// sayHello.call(obj,dbArray);
// console.log(sayHello);

// sayHello();

// obj.sayHello();

// sayHello.call(obj,'amruth','raj');
// sayHello();
// console.log(obj);

Function.prototype.myApply = function(obj,argsArray){
    obj.fn=this; // I gave my defi of function to fn
    const res = obj.fn(...argsArray);
    delete obj.fn;
    return res;
}

sayHello.myApply(obj,dbArray);

// (argArray) -> ['abc',1];
// Function.prototype.test = function(){
//     console.log(this);
// }

// function abc(){

// }

// function random(){

// }