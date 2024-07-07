const express = require('express');
const app = express();
const path = require('path');
const Collection = require('./mongo');

// Define the directory where your static files (including CSS) are located
const publicDirectoryPath = path.join(__dirname, 'home');

// Use express.static middleware to serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define the path to your templates directory
const templatePath = path.join(__dirname, './tempelates');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.set('views', templatePath);

app.get('/', (req, res) => {
    res.render('home');
});

// Route to check if data exists in MongoDB
app.post('/checkData', async (req, res) => {
    try {
        const { name, regNo, transactionID } = req.body;

        // Check if the entry with the given name, registration number, and transaction ID exists
        const existingEntry = await Collection.findOne({ name, regNo, transactionID });

        if (existingEntry) {
            res.send('Data exists in the database.');
        } else {
            res.status(400).send('Invalid data. Entry does not exist in the database.');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error.');
    }
});

// Route to save data to MongoDB
app.post('/sendMsg', async (req, res) => {
    try {
        const { name, regNo, transactionID } = req.body;

        // Check if the entry with the given name, registration number, and transaction ID already exists
        const existingEntry = await Collection.findOne({ name, regNo, transactionID });

        if (existingEntry) {
            res.send('Entry already exists in the database.');
        } else {
            // If the entry doesn't exist, send a message indicating invalid data
            res.status(400).send('Invalid data. Entry does not exist in the database.');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error.');
    }
});

app.listen(3000, () => {    
    console.log('listening on port 3000');
});