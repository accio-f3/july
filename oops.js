function BankAccount(customerName, balance){
    this.customerName=customerName;
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.balance = balance;
    this.withdraw = function(amount){
        this.balance-=amount;
    }
}

// console.log(BankAccount.prototype);
BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
}

const pcAccount = new BankAccount('pc',500);

pcAccount.deposit(1000);
console.log(pcAccount);

const surajAccount = new BankAccount('suraj',5000);
surajAccount.deposit(1000);
console.log(surajAccount);
