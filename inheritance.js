function BankAccount(customerName, balance){
    this.customerName=customerName;
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.balance = balance;
}
// console.log(BankAccount.prototype);
BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
} 
const shivaBankAccount = new BankAccount('shiva',1000);
function SavingsAccount(customerName,balance, limit){
    // this -> {}
    BankAccount.call(this,customerName,balance);
    this.transLimit = limit;
}

SavingsAccount.prototype.educationLoan = function(amount){
    console.log(`this much ${amount} is granted for educ`);
}
// SavingsAccount.prototype.__proto__=Object.prototype;
// SavingsAccount.prototype.__proto__=BankAccount.prototype;
SavingsAccount.prototype.__proto__=BankAccount.prototype;

// SavingsAccount -> SavingsAccount.prototype

const pcSavAcc = new SavingsAccount('pc',1000,5000);
console.log(SavingsAccount.prototype);
console.log(pcSavAcc.__proto__);
// pcSavAcc.deposit(10000);
// console.log(pcSavAcc);

// SavingsAccount.prototype was inherting methods from
// Object, instead of inherting things from Object
// it should inherit methods from BankAccount

// some oops
// array polyfills
// call bind apply polyfills

// chat app
// google sheet clone


// SavingsAccount.prototype.__proto__ = shivaBankAccount.__proto__