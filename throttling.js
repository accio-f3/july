// sniper
// machine gun
// throttling -> it's a technique to limit the execution of an event
// event when this event triggers continuesly

let normalCount=0;

let throttleCount=0;

const normalCountDisplay = document.getElementById('normal-count');
const throttleCountDisplay = document.getElementById('throttle-count');

const button = document.getElementById('btn');

const brokenShotGun = () =>{
    throttleCountDisplay.innerHTML=++throttleCount;
}

// const magicFn = (callback,delay) =>{
//     // it will store a timer as 0 for the first fn call
//     let lastFuncExTime = 0;
//     return function(...args){
//         let currentTime = new Date().getTime();
//         if(currentTime-lastFuncExTime<delay) return;
//         else{
//             lastFuncExTime=currentTime;
//             return callback(...args);
//         }
//     }
// }

// const magicFn = (callback,delay) =>{
//     let execute = true;
//     return function(...args){
//         if(execute){
//             callback(...args);
//             execute=false;
//             setTimeout(()=>{
//                 execute=true;
//             },delay);
//         }
//     }
// }

const fixedShotGun = magicFn(brokenShotGun,700);

button.addEventListener('click',()=>{
    normalCountDisplay.innerHTML=++normalCount;
    fixedShotGun();
})


// 1st fn -> lastFuncExTime
// 2nd fn -> currentTime