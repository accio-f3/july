// Today's topic is THIS keyword


// implicit binding is applied when you invoke a function
// in an object using (.) notation. THIS keyword
// in such cases will point towards the object.


// THIS keyword is used to refer something like an object.
// what is value of THIS keyword will depend on the context 
// we are in.


// let obj = {
//     a: 10,
//     test() {
//       console.log(this);
//       //   we are printing THIS keyword
//     },
//   };

  
// obj.test();


// test();

// this.a=5;
// console.log(a);

// function getParam(){
//     console.log(this.a);
// }
// getParam();

// const getParam=()=> {
//     console.log(this.a);
// }
// getParam();
// this.name='pc';
// let user = {
//     // name: 'Prikshit',
//     age: 23,
//     getDetails(){
//         console.log(this.name);
//     }
// }
// user.getDetails();

// let user = {
//     nam:'Prikshit',
//     age: 22,
//     childObj: {
//         newName:'pc',
//         getDetails(){
//             console.log(this.newName);
//         }
//     }
// }
// // name keyword??

// user.childObj.getDetails();


// let user = {
//     name: 'Prikshit',
//     age: 23,
//     getDetails: () => {
//         console.log(this);
//     }
// }

// user.getDetails();

// let user = {
//     nam: 'prikshit',
//     age: 23,
//     getDetails(){
//         // the this inside my arrow fn
//         // will point towards this inside
//         // outer normal fn.
//         console.log(this);
//         const nestedArrow = () => console.log(this);
//         nestedArrow();
//     }
// }

// user.getDetails();

// const user = {
//     firstName: 'prikshit',
//     getName(){
//         const firstName='pc';
//         return this.firstName;
//     }
// }

// // console.log(user.getName());

// const user = {
//     nam: 'pc',
//     logMessage(){
//         console.log('test');
//         console.log(this);
//     }
// }

// // user.logMessage();

// // setTimeout(user.logMessage,1000);
// setTimeout(()=>{
//     console.log('test');
//     console.log(this);
// },1000)

// const user = {
//     nam: 'pc',
//     logMessage(){
//         // console.log('test');
//         console.log(this.nam);
//     }
// }
// // user.logMessage();

// setTimeout(()=>{
//     user.logMessage();
// },1000);

