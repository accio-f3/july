// const nums = [1,2,3,4];

// const nums2 = [10,22,3111,49,1];

// // map -> returns a new array

// taking one element and returning a new element
// const callBackF = (oldNumber,index) => {
//   return oldNumber * 3; // based on logic
// };

// // const multiByThree = nums.map(callBackF);

// Array.prototype.myMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let element = callback(this[i], i);
//     newArr.push(element);
//   }
//   return newArr;
// };

// const nums = [1,2,3,4];
// const multiByThree2 = nums.myMap((currEle,i)=>{
//     console.log(currEle,i);
//     return (currEle*10)+i;
// });
// console.log(multiByThree2);

// nums.myMap

// Array.prototype.vipulFn = function(){
//     console.log(this);
//     return 'mohit'; // will throw undefined if not
//     //  written any thing here;
// }

// console.log(nums.vipulFn());
// console.log(nums2.vipulFn());

// console.log(Array.prototype);

// const nums3 = [1,2,3,4];

// function test(){
//     return 'chirag';
// }

// const valu = test();

// console.log(valu);

// const nums = [1,2,3,4];

// // // const moreThanTwo = nums.filter((currEle)=>{
// // //     return currEle>1;
// // // })

// // // console.log(moreThanTwo);

// Array.prototype.myFilter = function(callback){
//     let newArr=[];
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i)){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// const moreThanTwo = nums.myFilter((currEle)=>{
//     return currEle>1;
// })

// console.log(moreThanTwo);

// reduce, flat method, call, bind & apply polyfills

// let sum = 0; // initial value
// for(let i=0;i<nums.length;i++){
//   sum+=nums[i]; // this is my logic // callbackfn
// }
// reduce is a method
// const nums = [11,12,13,14]; // into single number
// const initialValue = 5;

// const sum = nums.reduce((accumulator,currEle, index)=>{
//   console.log('iteration ---->', index+1);
//   console.log('accumulator->',accumulator);
//   console.log('currEle->',currEle);
//   return accumulator+currEle; // accumulator is sum so far
// });

// console.log('final sum ->', sum);

// accumulator at any point is sum so far + initial value

//                  1, 2, 3 ,4
//  sum so far->0


// const nums = [11,12,13,14]; // into single number

// Array.prototype.myReduce = function (callback, initialValue) {
//   // initialValue -> value given by user || undefined
//   var accumulator = initialValue; // undefined || value given by user;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator !== undefined ? callback(accumulator, this[i], i) : this[i];
//   }
//   return accumulator;
// };


// const callback= (accumulator,currEle, index)=>{
//     console.log('iteration ---->', index+1);
//     console.log('accumulator->',accumulator);
//     console.log('currEle->',currEle);
//     return accumulator+currEle; // accumulator is sum so far
//   }

//   const sum = nums.myReduce(callback,0);

//   console.log(sum);

//   // flat, call, bind & apply

// let arr = [1, 2, 3, 4]; // depth was 0

// let arr2 = [1, [99, 3], [4, 5], 6]; // depth is 1

// let arr3 = [1, [99, [1, 2]], [4, 5], 6];

// console.log(arr3[1][1][0]);

const arr1 = [1, [2, 3], [4, 5], 99, [5, 6, [7, 8], 9], [10, 11, 12]];

function customFlat(arr,depth=1){
  let result = [];
  arr.forEach(element=>{
    if (Array.isArray(element) && depth > 0) {
      const miniArray = customFlat(element,depth-1);
      result.push(...miniArray);
    } else {
      result.push(element);
    }
  });
  return result;
}

const flattenedArr= customFlat(arr1,10);

console.log(flattenedArr);

// call bind apply polyfills -> sunday's extra class
// chat app -> tomorrow



// Sunday's agenda

// closures
// call bind apply polyfills
// prototype / oops revision
// oops assignments
// past week contest discussion (share the question)

