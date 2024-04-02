

const { v4: uuidv4 } = require('uuid'); 
const { createTransaction, listTransactions, updateTransaction, deleteTransaction } = require('../usecases/transactionUseCase');

exports.createTransaction = async (req, res) => {
  try {
    const { amount, description } = req.body;
    const id = uuidv4(); 
    
    const createdAt = new Date(); 
    const transaction = await createTransaction({ id, amount, description, createdAt });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar transação' });
  }
};

exports.listTransactions = async (req, res) => {
  try {
    const transactions = await listTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar transações' });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, description } = req.body;
    const updatedTransaction = await updateTransaction(id, amount, description);
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar transação' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTransaction(id);
    res.status(200).json({ message: 'Transação deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar transação' });
  }
};
