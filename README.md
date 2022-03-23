1- instale o nodeJs na sua maquina <br />
2- instale o postman ou o insomnia na sua maquina para testar as rotas <br />
3- de um "git clone" para clonar o projeto <br />
4- de um "npm i" para instalar as dependencias de bibliotecas <br />
5- crie um arquivo ".env" e armazene as seguintes variaveis dentro dele: <br />

DB_USER:Paulo <br />
DB_PASSWORD:Paulo123 <br />

5- de um "npm start" para iniciar o servidor <br />
6- abra o postman ou o insomnia para testar as rotas <br />

rota /adicionarlivro <br />
metodo post: <br />
adicionar livro <br />
{ <br />
    codigoLivro: Number, (obrigatório) <br />
    titulo: String,(obrigatório) <br />
    autor: String, <br />
    sinopse: String, <br />
    capaDura: Boolean, <br />
    codigoISBN: Number, <br />
    preocLivro: Number <br />

} <br />

rota /listarlivros <br />
metodo get: retorna todos os livros <br />

rota /listarlivro <br />
metodo get: retorna um livro <br />
{ <br />
    codigoLivro: Number, (obrigatório) <br />
} <br />

rota /atualizarlivro <br />
metodo patch: <br />
{ <br />
    codigoLivro: Number (obrigatório) <br />
    titulo: String,(opcional) <br />
    autor: String,(opcional) <br />
    sinopse: String,(opcional) <br />
    capaDura: Boolean,(opcional) <br />
    codigoISBN: Number,(opcional) <br />
    valorLivro: Number"(opcional) <br />
} <br />

rota /removerlivro <br />
metodo delete: <br />
{ <br />
    codigoLivro: Number (obrigatório) <br />
} 

