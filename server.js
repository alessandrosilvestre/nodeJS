const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const transactionController = require('./controllers/transactionController');

app.use(express.json());

app.post('/transactions', transactionController.createTransaction);
app.get('/transactions', transactionController.listTransactions);
app.put('/transactions/:id', transactionController.updateTransaction);
app.delete('/transactions/:id', transactionController.deleteTransaction);

app.get('/', (req, res) => {
  res.send('Bem Vindo ao Sistema Financeiro');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
