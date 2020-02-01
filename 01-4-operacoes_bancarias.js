const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });
console.log(user.balance);

const higherTransaction1 = getHigherTransactionByType('credit');
const higherTransaction2 = getHigherTransactionByType('debit');
console.log(higherTransaction1);
console.log(higherTransaction2);

const averageTransactionValue = getAverageTransactionValue();
console.log(averageTransactionValue);

const transactionsCount = getTransactionsCount();
console.log(transactionsCount);

function createTransaction(transaction) {
  user.transactions.push(transaction);
  
  if (transaction.type === 'credit') {
    user.balance += transaction.value; 
  } else {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction = 0;

  for (const transaction of user.transactions) {
    if (transaction.type === transactionType) {
      if (transaction.value > higherTransaction) {
        higherTransaction = transaction.value;
      }
    }
  }

  const higherTransactionByType = {
    type: transactionType,
    value: higherTransaction
  };

  return higherTransactionByType;
}

function getAverageTransactionValue () {
  let sum = 0;

  for (const transaction of user.transactions) {
    sum += transaction.value;
  }

  const average = sum / user.transactions.length;

  return average;
}

function getTransactionsCount() {
  let creditTransactions = 0;
  let debitTransactions = 0;

  for (const transaction of user.transactions) {
    if (transaction.type === 'credit') {
      creditTransactions++;
    } else {
      debitTransactions++;
    }
  }

  const transactionsCount = {
    credit: creditTransactions,
    debit: debitTransactions
  };

  return transactionsCount;
}