// configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const livrosRoutes = require('./routes/livrosRoutes')

app.use('/livros', livrosRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostar req

    res.json({message: 'Oi Express!'})

})

// entregar uma porta
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
    .catch((err) => console.log(err))
