const express = require('express');
const {readFile, readFileSync, writeFileSync} = require('fs');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

const dbPath = './db.txt';
app.use(express.json()); // Middleware to parse to json
app.use(cors()) // Allowing cross-origin

app.get("/contacts", (req, res) => {
    readFile(dbPath, (err, file) => {
        if (err) res.sendStatus(500);
        else {
            const contacts = JSON.parse(file);
            res.status(200).json({data: contacts, message: "Data Fetched Successfully"});
        }
    })
});

app.post("/contact", (req, res) => {
    const contacts = JSON.parse(readFileSync(dbPath, 'utf-8'));

    const newContact = req.body;
    newContact.id = uuidv4();

    contacts.push(newContact);
    writeFileSync(dbPath, JSON.stringify(contacts), 'utf-8');
    res.status(200).json({message: "Successfully Added contact"});
});

app.listen(5000, () => {
    console.log("Express APP is running at 5000 port");
});
