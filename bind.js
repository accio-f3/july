let obj = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

const updatedSayHello=sayHello.bind(obj);
// func.bind -> will return the function which
// is having context of obj.

updatedSayHello('test1');

// sayHello('test1');

// __proto__ & prototype
// Bind