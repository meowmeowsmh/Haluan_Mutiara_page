const express = require('express');
const path = require('path');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose(); // For later

const app = express();

// --- Middleware ---
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'dev-secret-change-later',  // Change for production
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'strict'
  }
}));

// --- Serve static HTML/CSS/JS ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Health check route ---
app.get('/health', (req, res) => res.send('Server is running!'));

// --- Minimal admin login (offline demo) ---
app.get('/admin', (req, res) => {
  if (req.session.isAdmin) {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  } else {
    res.redirect('/login.html');
  }
});

// --- Login route ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Minimal offline demo credentials
  if (username === 'admin' && password === 'password123') {
    req.session.isAdmin = true;
    return res.redirect('/admin');
  }

  res.send('Invalid credentials');
});

// --- Logout route ---
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// --- Start server (localhost only) ---
app.listen(3000, '127.0.0.1', () => {
  console.log('✅ Server running at http://localhost:3000');
});

// ===== SQLite Setup =====
const db = new sqlite3.Database('./quotes.db', (err) => {
  if (err) console.error('DB error:', err.message);
  else console.log('Connected to SQLite database');
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  wood_type TEXT NOT NULL,
  message TEXT NOT NULL,
  date TEXT DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'new'
)`);

// ===== POST route for form =====
app.post('/submit-quote', (req, res) => {
  const { name, phone, email, wood_type, message } = req.body;

  if (!name || !phone || !wood_type || !message) {
    return res.json({ success: false, error: 'All required fields must be filled.' });
  }

  db.run(`INSERT INTO quotes (name, phone, email, wood_type, message) VALUES (?, ?, ?, ?, ?)`,
         [name, phone, email || '', wood_type, message], function(err) {
    if (err) return res.json({ success: false, error: 'Database error' });
    res.json({ success: true, id: this.lastID });
  });
});

