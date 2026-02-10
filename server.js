const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const JSON_FILE = path.join(__dirname, 'submissions.json');

app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve your HTML, CSS, JS

// Get all submissions
app.get('/api/contact', (req, res) => {
    fs.readFile(JSON_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.json([]);
        }
        try {
            const submissions = JSON.parse(data);
            res.json(submissions);
        } catch {
            res.json([]);
        }
    });
});

// Add new submission
app.post('/api/contact', (req, res) => {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
        return res.json({ success: false });
    }

    fs.readFile(JSON_FILE, 'utf8', (err, data) => {
        let submissions = [];
        if (!err) {
            try {
                submissions = JSON.parse(data);
            } catch {}
        }
        submissions.push({ name, phone, message, date: new Date().toISOString() });
        fs.writeFile(JSON_FILE, JSON.stringify(submissions, null, 2), (err) => {
            if (err) return res.json({ success: false });
            res.json({ success: true });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
