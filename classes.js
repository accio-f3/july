class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    deposit(amount){
        this.balance+=amount;
    }
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random() * 1000000000);
        this.balance=balance;
    }
}
console.log(BankAccount);

const pcAccount = new BankAccount('pc',500);
console.log(pcAccount);
console.log(pcAccount.__proto__);

// pcAccount.deposit(400);
// console.log(pcAccount);

