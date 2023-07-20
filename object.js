// Object is a collection of properites
// properties -> key value


// An Object is a collection of properties & 
// Property is an association between a key & value.

// a property value can also be function -> method.

// let a={
//     b:10,
//     c:13,
// };

// console.log(a);

// const user = {
//     nam: 'pc',
//     age: 23,
// }

// delete user.age;

// console.log(user);
// function abc(a){
//     delete a;
//     return a;
// }

// const func = (function (a){
//     delete a;
//     return a;
// })(99);

// console.log(func);

// // Key with space
// const user = {
//   nam: "PC",
//   age: 23,
//   "work at acciojob": true,
//   workAtAccioJob: true,
// };

// console.log(user["work at acciojob"]);
// console.log(user['workAtAccioJob']);

// console.log(user['nam']);
// console.log(user['age']);

// Dynamic keys

// const property='firstName';
// const nam = 'PC';

// const user = {
//     [property]:nam,
// }

// let a = 10;
// console.log(a);
// console.log(user);


// looping through objects

// const user = {
//     nam: 'pc',
//     age: 23,
//     isWorking: true,
// }

// For in loop
// for(key in user){
//     // this thing is in string
//     // console.log(key);
//     console.log(key, "---->", user[key]);
// }

// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three',
// };

// console.log(obj);

// let num = {
//     a:100,
//     b:200,
//     title:'my nums',
// }
// num -> fn
// num.a ->200
// eventual
// let num2 = {
//     a:200,
//     b:400,
//     title:'my nums',
// }


// function multiByTwo(obj){
//     for (x in obj) {
//       if (typeof(obj[x])==='number') {
//         obj[x] = obj[x] * 2;
//       }
//     }
// }
// multiByTwo(num);

// console.log(num);

// let num2 = {
//     a:200,
//     b:400,
//     title:'my nums',
// }

// // localStorage.setItem('num2',JSON.stringify(num2));
// let stringNum2= JSON.stringify(num2);

// // console.log(stringNum2);

// let num = JSON.parse(stringNum2);
// console.log(num);

// Spread operator

// const user = {
//     nam:'pc',
//     age:23,
// }

// const admin = {
//     ...user,
//     isAdmin:true,
// }

// console.log(admin);

// let c = {
//   greeting: "Hey!",
// };
 
// let d;
// d = c;

// c.greeting = 'hello';

// console.log(d.greeting); 

// let person = {nam:'pc'};
// const members = ['test',person]; // members[0] = person
// // members[0].nam=null
// console.log(members);

// Deep shallow copy

// Shallow vs Deep Copy?
// Shallow
// when we copy an object to another object
// but that particular object has still got
// some reference to atleast some of the properties
// of original object.

// let a = {
//     p:100,
// }
// let b=a;

// // b.p=59;
// {
//     p:100,
//   }
// console.log(a);
// console.log(b);
// let a ={
//     p:100,
//   }
//   let b = {};
//   b.s =50; 
//   b = a; 
//   a.d = 40;

//   console.log(a);
//   console.log(b);

// let a ={
//     p:100,
// };

// let b = {
//     ...a, // spreading
// };

// a.p=79;
// b.p = 59;


// console.log(a);
// console.log(b);

// let a ={
//     p:100,
// };

// let b = {
//     ...a, // spreading
// };

// a.p=79;
// b.p = 59;


// console.log(a);
// console.log(b);

// let a = {
//    b:100,
// }
// a=200;
// console.log(a);

// const a=100;
// a=10;
// console.log(a);

// 
// here p:100 but what if p : 
// { prop : value } then if we spread 
// a, will variable b and a 
// then point towards the same ref p or different ref?


// let a = {
//     p:100,
//     g:{
//         q:10,
//         r:60,
//     }
// }

// let b = {
//     ...a,
// };

// a.p=10;
// a.g.q=300;

// console.log(a);
// console.log(b);

// spread operator will deep copy only if
// there's no nested object inside the object.
// else it'll be shallow

let a = {
    p:100,
    g:{
        q:10,
        r:60,
    }
}

let strA = JSON.stringify(a);
console.log(strA);

let deepA = JSON.parse(strA);

deepA.g.q = 900;

console.log('object a--->',a);
console.log('object deep copy a--->',deepA);

// Prototypes
// Call bind apply
// Array methods (polyfills)
