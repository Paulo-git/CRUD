const mongoose = require('mongoose')

const Livros = mongoose.model('Livros', {
    cod_livro: Number,
    titulo: String,
    autor: String,
    Sinopse: String,
    capa_dura: Boolean,
    cod_isbn: Number,
    valor_livro: Number,
})

module.exports = Livros
