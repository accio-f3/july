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

  
// // Function.prototype.myBind = function(obj,...args){
// //     obj.fn=this;
// //     const returnFn = function(...newArgs){
// //         const res = obj.fn(...args,...newArgs);
// //         return res;
// //     }
// //     return returnFn;
// // }

Function.prototype.myBind = function(obj,...args){
    let fn=this; // saved function defi in fn
    const returnFn = function(...newArgs){
        // this should have defi of fn
        // call, apply
        return fn.call(obj,...args,...newArgs); // binded function
        // defi in my function
    }
    return returnFn;
}

const updatedSayHello=sayHello.myBind(obj);
// updatedSayHello = function(...newArgs){
//     // this should have defi of fn
//     // call, apply
//     return fn.call(obj,...args,...newArgs); // binded function
//     // defi in my function
// }
updatedSayHello('test1','test2');
updatedSayHello('t','q');

// Bind ??? it's .call method in a function


// function abc(){
//     //doing something
// }

// function test(){
//     return abc();
// }


// function a(y,z){ // ...args 

// }

// function aClone(y,z){ // ...newArgs
//     return a(y,z);
// }

// priority of any frontend project
// functionality
// optimisation
// style

// - [ ] Promises (Sunday)
// - [ ] Contest discussion(tuesday)
// - [ ] Signup Page +razor pay(28th July)
// - [ ] Debounce and throttle (Monday)
// - [ ] Event delegation (Monday)