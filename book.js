const express = require('express');
const path = require("path");
const router = express.Router();
const bodyParser = require('body-parser');
const rootDir = require("../util/path");

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, 'view', 'bookview.html'));
});
// Show add-book form

router.get("/add", (req, res) => {
    res.sendFile(path.join(rootDir, 'view', 'bookaddpage.html'));
});

// Handle form submission (POST)
router.post("/add", (req, res) => {
    console.log(req.body); // should log { bookId: '...', bookName: '...', author: '...' }

    // Match the form field names exactly
    const { bookId, bookName, author } = req.body;

    res.send(`
        <h1>Book Added Successfully!</h1>
        <p><b>ID:</b> ${bookId}</p>
        <p><b>Title:</b> ${bookName}</p>
        <p><b>Author:</b> ${author}</p>
        
    `);
    res.redirect('/');
});

module.exports = router;
