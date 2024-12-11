// Exercise 1: Basic Closure
// Create a function that returns another function which remembers the original input

/*
function createGreetings(param1) {
  return function (name) {
    return `hi ${param1} + ${name}`;
  };
}


const newUser = createGreetings("Jozef");
console.log(newUser("sevas"));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 2: Counter Closure
// Create a function that generates a counter with private state

/*
function createCounter (initialValue = 0) {
    let counterValue = initialValue;

    return {
        increment () {
            counterValue++;
            return counterValue;
        },
        decrement () {
            counterValue--;
            return counterValue;
        },
        status () {
            counterValue;
            return counterValue;
        }
    }
}


const masterCounter = createCounter(5);

console.log(masterCounter.increment());
console.log(masterCounter.increment());
console.log(masterCounter.increment());

console.log(masterCounter.decrement());
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 3: Multiplier Closure
// Create a function that returns a function to multiply by a specific number

/*
function createMultiplier (factor) {
    return function (number) {
        return factor * number;
    }

}

const doubleMultiplier = createMultiplier(2);
const triple = createMultiplier(3);

console.log(doubleMultiplier(5));
console.log(triple(5));
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 5: Private Variables and Methods



/*
function createBankBalance(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "invalid deposit amount";
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
    },
    getBalance() {
      return balance;
    },
  };
}

const bankBalance = createBankBalance(1000);

bankBalance.deposit(120);
bankBalance.deposit(420);
bankBalance.withdraw(189);

console.log(bankBalance.getBalance());
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 7: Shopping Cart with Inventory Management






