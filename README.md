1- instale o nodeJs na sua maquina
2- instale o postman ou o insomnia na sua maquina para testar as rotas
3- de um "git clone" para clonar o projeto 
4- de um "npm i" para instalar as dependencias de bibliotecas
5- crie um arquivo ".env" e armazene as seguintes variaveis dentro dele: 

DB_USER:Paulo
DB_PASSWORD:Paulo123

5- de um "npm start" para iniciar o servidor
6- abra o postman ou o insomnia para testar as rotas

rota /adicionarlivro
metodo post:
adicionar livro
{
    codigoLivro: Number, (obrigatório) 
    titulo: String,(obrigatório)
    autor: String,
    sinopse: String,
    capaDura: Boolean,
    codigoISBN: Number,
    preocLivro: Number

}

rota /listarlivros
metodo get: retorna todos os livros

rota /listarlivro
metodo get: retorna um livro
{
    codigoLivro: Number, (obrigatório)
}

rota /atualizarlivro
metodo patch: 
{
    codigoLivro: Number (obrigatório)
    titulo: String,(opcional)
    autor: String,(opcional)
    sinopse: String,(opcional)
    capaDura: Boolean,(opcional)
    codigoISBN: Number,(opcional)
    valorLivro: Number"(opcional)
}

rota /removerlivro
metodo delete:
{
    codigoLivro: Number (obrigatório)
}

