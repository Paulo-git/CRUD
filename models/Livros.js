const mongoose = require('mongoose')

const Livros = mongoose.model('Livros', {
    codigoLivro: Number,
    titulo: String,
    autor: String,
    sinopse: String,
    capaDura: Boolean,
    codigoISBN: Number,
    valorLivro: Number,
})

module.exports = Livros