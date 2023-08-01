// // // Currying is a function that takes one argument
// // // at a time and returns a new function expecting
// // // a next argument

// // function f(a,b){
// //     console.log(a,b);
// // }
// // f(1,2);


// function curryF(a){
//     return function(b){
//         console.log(a,b);
//     }
// }

// console.log(curryF(1));

// function sum(a,b,c){
//     return a+b+c;
// }


// function currySum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// const sum1=sum(1,2,3);
// console.log(sum1);

// const sum2 = currySum(1)(2)(3);

// console.log(sum2);

// sum / div / multiply / sub
// 

// function eval1(op){
//     return function(a){
//         return function(b){
//             return eval(a+op+b);
//         }
//      }
// }

// console.log(eval1('*')(10)(20));

// eval('operation')(num1)(num2);

// function eval(operation){
//     return function(a){
//         return function(b){
//             if(operation==='sum') return a+b;
//             else if(operation==='div') return a/b;
//             else if(operation==='multiply') return a*b;
//             else if(operation==='sub') return a-b;
//         }
//     }
// }

// console.log(eval('sub')(2)(3));

// infiniteCurryFn(5)(); // -> 5
// infiniteCurryFn(5)(2)(); // -> 7
// infiniteCurryFn(7)(); // -> 7
// infiniteCurryFn(5)(2)(8)(); // -> 15

// infiniteCurryFn(15)();

// function infiniteCurryFn(a){
//     return function(b){
//         if(b){
//             return infiniteCurryFn(a+b);
//         }
//         else {
//             return a;
//         }
//     }
// }

// a -> 5+2

// console.log(infiniteCurryFn(1)(2)(3)(4));

// sum(1)(2)(3)(4)(5)();

// function sum(a){
//     return function(b){
//         if(b){
//             const tempSum = a+b;
//             return sum(tempSum);
//         }
//         else{
//             return a;
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)());
// 1st -> sum(1)();
// 2nd -> sum(1)(2)();

// partial curry

// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }

// console.log(sum(2)(3,5));


