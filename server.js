// Node.js Express server for login/signup
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sarrthi_portfolio'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (results.length > 0) {
      res.json({ success: false, message: 'Email already registered' });
    } else {
      db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error' });
        res.json({ success: true });
      });
    }
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, mobile, course } = req.body;
  db.query('INSERT INTO contacts (name, mobile, course) VALUES (?, ?, ?)', [name, mobile, course], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
