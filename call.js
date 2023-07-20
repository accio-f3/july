let obj1 = {
    nam:'pc',
}


let obj2 = {
    nam:'prikshit',
}

// sayHello('test1','test2'); // window, undefined, undefined

// obj1, 
// sayHello.call(obj2,'testing1','test2');

// let obj1 = {
//     nam:'pc',
//     fn: this, // this keyword is following line # 25,26;
// }

function sayHello(arg1,arg2){
    return this;
}

sayHello.call(obj1,'test1','test2');


// let obj1 = {
//     nam:'pc',
//     fn: function(arg1,arg2){
//         console.log(this,arg1,arg2);
//     }
// }

// obj1.fn();

Function.prototype.myCall = function(obj,...args){ // rest operator
  // any this keyword will be storing definition of
  // function with which myCall is called
  obj.fn = this;
  const res = obj.fn(...args); // spread operator
  delete obj.fn;
  return res;
}

console.log(sayHello.myCall(obj1,'test1','test2'));


// function test(a,...args){
//     console.log(a);
//     console.log(args);
// }

 
// test(70,'test1','test2');

// Function.prototype.test = function(){
//     console.log(this);
// }

// function abc(){
//     // do some stuff;
// }

// myApply is same is myCall