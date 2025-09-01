

class BankAccount{
    #balance = 0;
    constructor(owner,amount) {
        this.#balance += amount;
        this.owner = owner;
    }

    set balance(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Please deposit valid amount.");
        }
    }
    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount('Akhil', 1000);
console.log(account);
account.balance = 500;
console.log(account.balance);