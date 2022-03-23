const router = require('express').Router()
const { send } = require('express/lib/response');
const Livros = require('../models/Livros')
const livrosService = require('../services/livrosService');

router.post('/adicionarlivro', async (req, res) => {
    const livro = req.body;
    try {
        const serviceReturn = await livrosService.adicionar(livro);

        if (!serviceReturn.success) {
            return res.status(422).send({ success: false, errors: serviceReturn.msg });
        }

        return res.status(200).send(serviceReturn);

    } catch(error) {
        return res.status(400).send({ success: false, msg: `Houve um erro ao adicionar o livro: ${error}` });
    }
});

router.get('/listarlivros', async (req, res) => {
    try {
        const livros = await livrosService.listar();
        
        if (livros.length < 1) {
            return res.status(404).send({ success: false, msg: 'Não há livros no sistema.' });
        }

        return res.status(200).send(livros);

    } catch (error) {
        return res.status(400).send({ success: false, msg: `Houve um erro ao listar o livro: ${error}` });
    }

});

router.get('/listarlivro', async (req, res) => {
    const { codigoLivro } = req.body;
    try {
        const { success, msg, livroRetornado } = await livrosService.filtrar(codigoLivro);

        if (!success) {
            return res.status(422).send({ success: false, errors: msg });
        }

        return res.status(200).send(livroRetornado);

    } catch(error) {
        return res.status(400).send({ success: false, msg: `Houve um erro ao listar o livro: ${error}` });
    }
});

router.patch('/atualizarlivro', async (req, res) => {
    const livro = req.body;
    try {
        const serviceReturn = await livrosService.atualizar(livro);

        if (!serviceReturn.success) {
            return res.status(422).send({ success: false, errors: serviceReturn.msg });
        }

        return res.status(200).send(serviceReturn);

    } catch (error) {
        return res.status(400).send({ success: false, msg: `Houve um erro ao adicionar o livro: ${error}` });
    }

});

router.delete('/removerlivro', async (req, res) => {
    const { codigoLivro } = req.body;
    try {
        const serviceReturn = await livrosService.remover(codigoLivro);

        if (!serviceReturn.success) {
            return res.status(422).send({ success: false, errors: serviceReturn.msg });
        }

        return res.status(200).send(serviceReturn);

    } catch(error) {
        return res.status(400).send({ success: false, msg: `Houve um erro ao remover o livro: ${error}` });
    }
});

module.exports = router