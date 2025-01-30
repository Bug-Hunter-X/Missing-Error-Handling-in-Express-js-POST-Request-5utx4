const express = require('express');
const app = express();
app.use(express.json());

app.post('/user', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }

  const { name, email } = req.body; 
  if (!name || !email) {    
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const user = req.body;
  console.log('Received user:', user);
  res.status(201).send();
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});