const express = require('express');
const path = require("path");
const router = express.Router();
const bodyParser = require('body-parser');  
const rootDir = require("../util/path");

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, 'view', 'userview.html'));
});

router.get("/add", (req, res) => {
    res.sendFile(path.join(rootDir, 'view', 'useradd.html'));
});


// Handle form submission (POST)
router.post("/add", (req, res) => {
    console.log(req.body);  
    const { userId, fullName, email} = req.body;  // match form field names

    res.send(`
        <h1>User Added Successfully!</h1>
        <p><b>ID:</b> ${userId}</p>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
    `);
});

module.exports = router;
