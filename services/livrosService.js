const { off } = require('../models/Livros');
const Livros = require('../models/Livros');


adicionar = async (livro) => {
    try {
        const codigoLivro = await Livros.findOne({ codigoLivro: livro.codigoLivro });

        if (!livro.titulo) {
            return { success: false, msg: 'O titulo é obrigatório.' };
        }

        if (codigoLivro) {
            return { success: false, msg: 'Esse livro já existe no sistema, o código do livro não pode ser o mesmo.' }
        }

        
        await Livros.create(livro)

        return { success: true, msg: 'Livro cadastrado com sucesso!' };
        
    } catch (error) {
        return { success: false, msg: `Houve um erro ao adicionar o livro: ${error}` }
    }
}

remover = async (codigoLivro) => {
    try {
        
        if(!codigoLivro){
            return { success: false, msg: 'Houve um erro ao remover o livro, o código do livro é obrigatório.' };
        }

        const livroRemovido = await Livros.findOneAndDelete({ codigoLivro });

        if (!livroRemovido) {
           return { success: false, msg: 'Livro não encontrado para removê-lo.' }
        }

        return { success: true, msg: 'Livro removido com sucesso!' };

    } catch (error) {
        return { success: false, msg: `Houve um erro ao remover o livro: ${error}` }
    }

}

atualizar = async (livro) => {
    try {
        const { codigoLivro } = livro;

        if (!codigoLivro) {
            return { success: false, msg: 'Houve um erro ao atualizar o livro, o código do livro é obrigatório.' };
        }

        const livroAtualizado = await Livros.findOneAndUpdate({ codigoLivro }, livro);

        if (!livroAtualizado) {
           return { success: false, msg: 'Livro não encontrado para atualizá-lo' }
        }

        return { success: true, msg: 'Livro atualizado com sucesso!' }

    } catch(error) {
        return { success: false, msg: `Houve um erro ao atualizar o livro: ${error}` }
    }
}

listar = async () => {
    try {
        
        const livros = await Livros.find()

        const livrosRetornados = [];
        
        for (livro of livros) {
            const {
                __v,
                _id,
                ...livrosFormatados
            } = livro._doc; 

            livrosRetornados.push(livrosFormatados);
        }


        return livrosRetornados;
    } catch (error) {
        return { success: false, msg: `Houve um erro ao listar os livros: ${error}` }
    }

}

filtrar = async (codigoLivro) => {
    try {

        if (!codigoLivro){
            return { success: false, msg: 'Houve um erro ao listar o livro, o código do livro é obrigatório.' };
        }

        const livro = await Livros.findOne({ codigoLivro });

        if (!livro) {
            return { success: false, msg: 'Livro não encontrado.' };
        }
        
        const {
            __v,
            _id,
            ...livroRetornado
        } = livro._doc;

        return { success: true, livroRetornado }

    } catch (error) {
        return { success: false, msg: `Houve um erro ao listar o livro: ${error}` }
    }

}


module.exports = {
    adicionar,
    remover,
    atualizar,
    listar,
    filtrar
}