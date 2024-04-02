let transactions = [];

exports.createTransaction = async (amount, description) => {
  const transaction = { id: transactions.length + 1, amount, description };
  transactions.push(transaction);
  return transaction;
};

exports.listTransactions = async () => {
  return transactions;
};

exports.updateTransaction = async (id, amount, description) => {
  const index = transactions.findIndex(transaction => transaction.id === parseInt(id));
  if (index === -1) {
    throw new Error('Transação não encontrada');
  }

  transactions[index].amount = amount;
  transactions[index].description = description;

  return transactions[index];
};

exports.deleteTransaction = async (id) => {
  const index = transactions.findIndex(transaction => transaction.id === parseInt(id));
  if (index === -1) {
    throw new Error('Transação não encontrada');
  }

  transactions.splice(index, 1);
};
