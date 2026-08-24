const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/recover', (req, res) => {
  res.json({
    message: 'AI Recovery Triggered Successfully!',
    data: {
      id: `#TXN_${Math.floor(100 + Math.random() * 900)}`,
      amount: '₹3,500',
      reason: 'UPI Timeout',
      action: 'AI Auto-Retry Triggered',
      status: 'Recovered'
    }
  });
});

app.listen(5000, () => {
  console.log('Backend Server running on http://localhost:5000');
});