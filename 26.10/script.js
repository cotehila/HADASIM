class MediaItem {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }

  getSummary() {
    return `${this.title} (${this.year})`;
  }
}

class Book extends MediaItem {
  constructor(title, author, year, genre, pageCount) {
    super(title, year, genre);
    this.author = author;
    this.pageCount = pageCount;
  }

  getSummary() {
    return `Book: '${this.title}' by ${this.author}, ${this.pageCount} pages`;
  }
}

class Movie extends MediaItem {
  constructor(title, director, year, genre, durationMinutes) {
    super(title, year, genre);
    this.director = director;
    this.durationMinutes = durationMinutes;
  }

  getSummary() {
    return `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`;
  }
}

class Library {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  search(term) {
    const lowerTerm = term.toLowerCase();
    return this.items.filter(item => item.title.toLowerCase().includes(lowerTerm));
  }

  listByGenre(genre) {
    return this.items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
  }
}

//problem 2- bonus

const readline = require('readline-sync');

class BankAccount {
  constructor(owner, balance = 0, allowOverdraft = false) {
    this.owner = owner;
    this.balance = balance;
    this.allowOverdraft = allowOverdraft;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be greater than zero.");
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal amount must be greater than zero.");
    if (!this.allowOverdraft && this.balance < amount) {
      throw new Error(`Insufficient funds for account holder: ${this.owner}.`);
    }
    this.balance -= amount;
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  findAccount(ownerName) {
    return this.accounts.find(acc => acc.owner.toLowerCase() === ownerName.toLowerCase());
  }

  transfer(fromName, toName, amount) {
    const fromAcc = this.findAccount(fromName);
    const toAcc = this.findAccount(toName);

    if (!fromAcc || !toAcc) {
      console.log(" Transfer failed: One or both accounts could not be found.");
      return;
    }

    try {
      fromAcc.withdraw(amount);
      toAcc.deposit(amount);
      console.log(` Successfully transferred $${amount} from ${fromName} to ${toName}.`);
    } catch (error) {
      console.log(` Transfer error: ${error.message}`);
    }
  }

  showBalances() {
    console.log("\n--- Current Bank Balances ---");
    this.accounts.forEach(acc => {
      console.log(`Owner: ${acc.owner} | Balance: $${acc.balance}`);
    });
    console.log("-----------------------------\n");
  }


  startCLI() {
    let running = true;
    while (running) {
      console.log("\n=== Bank Management Menu ===");
      const options = ["Show Balances", "Create Account", "Transfer Funds", "Exit"];
      const index = readline.keyInSelect(options, "What would you like to do?");

      switch (index) {
        case 0:
          this.showBalances();
          break;
        case 1:
          const name = readline.question("Enter account owner name: ");
          const initialDeposit = parseFloat(readline.question("Enter initial balance: "));
          const allowOverdraft = readline.keyInYN("Allow overdraft? ");
          this.addAccount(new BankAccount(name, isNaN(initialDeposit) ? 0 : initialDeposit, allowOverdraft));
          console.log(`✅ Account created for ${name}!`);
          break;
        case 2:
          const from = readline.question("Sender name: ");
          const to = readline.question("Recipient name: ");
          const amount = parseFloat(readline.question("Amount to transfer: "));
          if (!isNaN(amount)) {
            this.transfer(from, to, amount);
          } else {
            console.log("Invalid amount entered.");
          }
          break;
        case 3:
          running = false;
          console.log("Goodbye!");
          break;
        default:
          running = false;
          break;
      }
    }
  }
}
