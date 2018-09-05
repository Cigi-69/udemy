// P1
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> John Doe has $1250 in expenses

// P2
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary
// John Doe has a balance of $10. $100 in income. $90 in expenses.

const account = {
    name: 'John Doe',
    incomes: [],
    expenses: [],

    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function () {
        let totalIncomes = 0;
        let totalExpenses = 0;
        let accountBalance = 0;

        this.incomes.forEach(function (income) {
            totalIncomes += income.amount;
        });
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });
        accountBalance = totalIncomes - totalExpenses;
        return(`${this.name} has a ballance of $${accountBalance}. $${totalIncomes} in income. $${totalExpenses} in expenses.`);
    }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());




