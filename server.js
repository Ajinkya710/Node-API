console.log("Hello");

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Node API!");
});

app.get('/blog', (req, res) => {
    res.send("Hello Blog! My Name is BroCODE");
});

app.post('/product', (req, res) => {
    console.log(req.body);
});

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Listening to port 3000...");
        }
        )
    }).catch((error) => {
        console.log(error);
    })