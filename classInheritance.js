class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random() * 1000000000);
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
}

class CurrentAccount extends BankAccount{
    tranLimit;
    constructor(customerName,balance){
        super(customerName,balance);
        this.tranLimit=50000;
    }
    buisnessLoan(amount){
        console.log(`you have been given ${amount} as loan`);
    }
}
class SavingsAccount extends BankAccount{
    tranLimit;
    constructor(customerName,balance){
        super(customerName,balance);
        this.tranLimit=10000;
    }
    educationLoan(amount){
        console.log(`you have been given ${amount} as loan`);
    }
}

const vipulCurrentAccount = new CurrentAccount('vipul',50000);

console.log(vipulCurrentAccount);
