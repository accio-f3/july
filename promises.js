// sync
// console.log('start');
// console.log('promise');
// console.log('end');

// async
// console.log('start');

// setTimeout(()=>{
//     console.log('promise');
// },0);

// console.log('end');


// function intro(name){
//     return `My Name is ${name}`;
// }

// function intro(name){
//     setTimeout(()=>{
//         return `i am ${name}`;
//     },1000);
// }

// const myIntro = intro('pc');

// console.log(myIntro);

// function intro(name, callback) {
//     setTimeout(() => {
//         callback(`i am ${name}`);
//     }, 1000);
// }

// function workingPlace(company, callback) {
//     setTimeout(() => {
//         callback(`works at ${company}`);
//     }, 500);
// }

// function birthPlace(city, callback) {
//     setTimeout(() => {
//         callback(`born in ${city}`);
//     }, 300);
// }

// function livesIn(city, callback) {
//     setTimeout(() => {
//         callback(`lives in ${city}`);
//     }, 100);
// }

// intro('pc', function (message) {
//     console.log(message);
//     workingPlace('walmart', function (message) {
//         console.log(message);
//         birthPlace('delhi', function (message) {
//             console.log(message);
//             livesIn('Bengaluru', function (message) {
//                 console.log(message);
//             })
//         })
//     })
// })

// Promise -> promise basically represents
// the upcoming completion or failure or an upcoming event
// it's result value.

// console.log('start');

// const prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) resolve('project completed');
//         else reject('why the project is not done');
//     }, 100);
// })

// console.log('end');
// console.log(prom1);

// prom1.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// prom1.then(res => console.log(res)).
// catch(err => console.log(err));


// initial function
// function intro(name){
//     setTimeout(()=>{
//         return `i am ${name}`;
//     },1000);
// }

// callback
// function intro(name, callback) {
//     setTimeout(() => {
//         callback(`i am ${name}`);
//     }, 1000);
// }

// promise
function intro(name,flag){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(flag) res(`my name is ${name}`);
            else rej('works at failed');
        },1000)
    })
}

function worksAt(company,flag){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(flag) res(`works at ${company}`);
            else rej('works at failed');
        },500)
    })
}

function livesIn(city,flag){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(flag) res(`lives in ${city}`);
            else rej('lives in city failed')
        },300)
    })
}

// // intro('pc').then(res => {
// //     console.log(res);
// //     worksAt('walmart').then(res => {
// //         console.log(res);
// //         livesIn('bengaluru').then(res => {
// //             console.log(res);
// //         })
// //     })
// // })

// // intro('pc').then(res=>{
// //     console.log(res);
// //     return worksAt('walmart');
// // }).then(res=>{
// //     console.log(res);
// //     return livesIn('bengalure');
// // }).then(res=>{
// //     console.log(res);
// // }).catch(err=> console.log(err));


// // async code
// // 1. callbacks -> drawback-> callback hell, no proper error handling
// // 2. promises (if not chaining) -> drawback -> promise hell
// // 3. promises chaining -> no drawbacks

// // promise combinations

// Promise.all([intro('pc', true), worksAt('walamrt', true), livesIn('blr', true)]).then(res => {
//     console.log(res);
// }).catch(err => console.log(err));


// if all are resolved -> array of results
// if any of the promises fails -> you will see the error of first promise

// Promise.all -> promise1 && promise2 && promise3;

// Promise.race([intro('pc', true), worksAt('walamrt', true), livesIn('blr', false)]).then(res=>{
//     console.log(res);
// }).catch(err=>console.log(err));

Promise.any([intro('pc', false), worksAt('walamrt', false), livesIn('blr', false)]).
then(res => console.log(res)).catch(err => console.log(err));

// Promise.any-> Promise1 || Promise2 || Promise3

