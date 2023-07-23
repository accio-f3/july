// // what is js?

// // JS is Sync and Single Threaded language.

// // Single Threaded -> it can excecute only 1
// // command at a time

// // sync single threaded -> J.S. can exceute 1 command at time
// // and in a specific order


// // callStack -> it handles everything related to Execution
// // context.
// // what is everything?
// // creation/ deletion /code control

// // function a(){
// //     var b=10;
// // }
// // a();
// // console.log(b);

// function a(){
//     // var b=10;
//     c();
//     console.log(b);
//     function c(){
//         var b=10;
//         console.log(b);
//         return b;
//     }
// }


// a();
// // var b=10;
// console.log(b);

// a is having exection context inside
// code block of GEC

// inside a's ec-> c's ec

// scope of a variable -> where you can access a variable

// scope is directly dependent on lexical env.
// lexical -> as a term means in heirchy or in a sequence

// Closure -> a function bind together with it's lexical environment

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var a=8;

// var z = x(); 
// // x() is returing closure of y
// // closure of y -> function y + lexical env of y

// // console.log(z);

// z();

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
// }

// x();


function x(){
    for(var i=1;i<=5;i++){ // value of i is 6
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}



{
    var i=// it was increasing with iterations
    function a(){
        console.log(i);
    }
    a();
}
x();

// 1 2 3 4 5
// 5 5 5 5 5
// 6 6 6 6 6

function a(){
    console.log(i);
}
// function-> time from starting point
// a       -> 1 sec // a will be executed
// a       -> 2 sec
// a       -> 3 sec
// a       -> 4 sec
// a       -> 5 sec

// value of i is 6