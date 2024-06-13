const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Load transactions from JSON file
  const transactionsData = fs.readFileSync('transactions.json', 'utf8');
  const transactions = JSON.parse(transactionsData);

  // Define schema and model
  const transactionSchema = new mongoose.Schema({
    id: Number,
    date: Date,
    sender: {
      firstName: String,
      lastName: String,
      dateOfBirth: Date,
      IDNumber: String
    },
    recipient: {
      firstName: String,
      lastName: String,
      email: String,
      accountNumber: String,
      bank: String
    },
    amount: Number,
    currencyCd: String,
    comments: String,
    status: String
  });

  const Transaction = mongoose.model('Transaction', transactionSchema);

  // Insert transactions into MongoDB
  await Transaction.insertMany(transactions);
  console.log('Initial transactions inserted successfully');

  // Define API routes
  app.get('/api/transactions', async (req, res) => {
    const { startDate, endDate } = req.query;
    const filter = {
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
      status: { $in: ["COMPLETED", "IN PROGRESS", "REJECTED"] }
    };

    try {
      const transactions = await Transaction.find(filter).sort({ date: 1 });
      res.json(transactions);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
