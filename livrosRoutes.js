const router = require('express').Router()

const Livros = require('../models/Livros')

// create
router.post('/', async (req, res) => {

    // req.body
    const livro = {
        cod_livro,
        titulo,
        autor,
        Sinopse,
        capa_dura,
        cod_isbn,
        valor_livro,
    } = req.body;

    if (!livro.titulo) {
        res.status(422).json({ error: 'o titulo é obrigatório' })
        return
    }


    // create 
    try {
        // criando dados
        await Livros.create(livro)

        res.status(201).json({message: 'Livro cadastrado com sucesso'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }


})

// Read - leitura de dados
router.get('/', async (req, res) => {
    try {
        
        const livros = await Livros.find()

        res.status(200).json(livros)
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        
        const livros = await Livros.findOne({ _id: id})

        if(!livros){
            res.status(422).json({message: 'O livro não foi encontrado'})
            return
        }

        res.status(200).json(livros)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// update - atualização de dados
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { cod_livro, titulo, autor, Sinopse, capa_dura, cod_isbn, valor_livro } = req.body

    const livros = {
        cod_livro,
        titulo,
        autor,
        Sinopse,
        capa_dura,
        cod_isbn,
        valor_livro,
    }

    try {
        
        const updatedLivros = await Livros.updateOne({_id: id}, livros)

    

        if(updatedLivros.matchedCount === 0) {
            res.status(422).json({message: 'O livro não foi encontrado'})
            return
        }

        res.status(200).json({ message: 'O livro foi atualizado com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Delete - deletar dados
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const livros = await Livros.findOne({ _id: id})

        if(!livros){
            res.status(422).json({message: 'O livro não foi encontrado'})
            return
        }

    try {
        
        await Livros.deleteOne({_id: id})

        res.status(200).json({ message: ' livro removido com sucesso!'})

    } catch (error) {
        res.status(500).json({ error: error })
    }

})


module.exports = router