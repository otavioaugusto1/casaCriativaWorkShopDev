//usei o express para criar e configurar meu servidor
const express = require('express')
const server = express()
const db =require('./db')


//configurar arquivos estáticos(css´s,scripts,imagens)
server.use(express.static("public"))

//configuração do NunJucks
const nunjucks = require('nunjucks')
nunjucks.configure("views",{
    express: server,
    noCache: true,
})

// criei uma rota '/'
// e capturo o pedido do cliente para responder
server.get('/', function(req,resp){
    return resp.render("index.html")
})
server.get('/ideias', function(req,resp){
    return resp.render("ideais.html")
})


// liguei meu servidor na porta 3000 aqui em baixo
server.listen(3000)
//01:13:00 aula 4/5