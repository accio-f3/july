// Debouncing -> it limits the execution of function call
// and waits for a certain amount of time. before running
// it again

const input = document.getElementById('input-value-1');
const input2 = document.getElementById('input-value-2');

const searchFn = () => {/// what ever I am passing here is ...args
    // searchFn
    console.log(input.value);
}

const searchFn2 = () => {
    console.log(input2.value);
}

const magicFn = (callback,delay) => {
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            callback(...args);
        }, delay);
    }
}

const optimisedSearchFn = magicFn(searchFn2,500);

// optimisedSearchFn('sams',500);
// optimisedSearchFn('samsung',500);



// server -> searchFn2('sams');
// ->searchFn2('samsung');



// clone of searchFn
// function clonseSearchFn(...args){
//     return searchFn(...args);
// }

// clonseSearchFn(event.target);

// searchFn(...args) -> MagicFn -> optimisedFn(...args)


//  S A M S U N G