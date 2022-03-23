require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const livros = require('./routes/livros');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use('/', livros)

app.get('/', (req, res) => {
    res.json({message: 'Oi Express!'});
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.sstsw.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao MongoDb!')
        app.listen(3000)
    })
    .catch((err) => console.log(err));