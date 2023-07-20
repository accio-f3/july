// // Inheritance is like one object trying to access
// // properties & methods of another object

// let arr = ['1','2'];

// let obj = {
//     nam: 'pc',
//     city: 'blr',
//     getIntro: function (){
//         console.log(this.nam + ' from '+ this.city);
//     }
// }

// // whenever we create an object, js engine
// // automatically attaches your object with hidden
// // properties & methods. these are the methods you
// // can access by just doing obj.

// function test(){
//     console.log('test');
// }

// arr.__proto__ -> Array.prototype
// arr.__proto__.__proto__ -> Object.prototype
// Array was formed via Object

// child instance -> __proto__
// parent class -> prototype obj(hidden properties)

// arr.__proto__.__proto__.__proto__
// prototype chaining
// let poiuy='test';

// Closures on this sunday -> 2-3 hours
// Saturday as test ->
// Sundays 11-12 discussion (this will be done by TA)

let obj1 = {
    nam: 'pc',
    city: 'delhi',
    getIntro(){
        console.log(this.nam, ' is from ', this.city);
        // return true;
    }
}
let obj2 = {
    nam: 'Prikshit',
    city: 'Blr',
    // nam: 'pc',
    // city: 'delhi',
    // getIntro(){
    //     console.log(this.nam, ' is from ', this.city);
    //     return true;
    // }
}
obj2.__proto__ = obj1;

// Prikshit is from blr
