// this uses the es22 syntax of private properties
class Wallet {
    #balance = 0;
    #transactions = [];

    deposit(amount) {
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Not enough funds!');
            return;
        }

        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount) {
        //This is a private method because the user has no
        // reason to access this.
        // it is happening behind the scenes.
        console.log(`Depositing ${amount}`);        
        this.#transactions.push({
            type: 'deposit',
            amount
        })
    }

    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`);        
        this.#transactions.push({
            type: 'withdraw',
            amount
        })
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet = new Wallet();

wallet.deposit(500);
wallet.withdraw(200);

console.log(wallet.balance);
console.log(wallet.transactions);