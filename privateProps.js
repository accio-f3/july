class BankAccount{
    customerName;
    accountNumber;
    #balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random() * 1000000000);
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    withDraw(amount,atmPin){
        if(atmPin==='6498' && amount<this.#balance){
            this.#balance-=amount;
        }
    }
    setBalance(amount){ // setter fn
        this.#balance = amount;
    }
    get balance(){ // special better way of writting getter
        return this.#balance;
    }
}

const pcAccount = new BankAccount('pc',500);

console.log(pcAccount.balance);

// pcAccount.balance=10000;

console.log(pcAccount.balance);

console.log(pcAccount);


// sunday
// proto and prototype (oops revision)

// polyfills of array methods
// map, reduce & filter and flat
// call, bind & apply polyfills

// Tuesday 
// chat app

// wednesday

// 2 assignment
// mcqs based on oops
// questions based on oops
