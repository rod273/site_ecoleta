const express = require('express');
const server = express();

//PEGAR O BANCO DE DADOS
 const db = require("./database/db.js");

//CONFIGURAR PASTA PÚBLIC
server.use(express.static("public"));


//URILIZANDO TEMPLATE ENGINE
const nunjucks = require('nunjucks');
nunjucks.configure("src/views", { 
    express: server,
    noCache: true
} )



//CONFIGURAR CAMINHOS DA MINHA APLICAÇÃO
//PAGINA INICIAL
//REQ : REQUISIÇÃO
// RES: RESPOSTA
server.get("/", (req, res) => {
  return res.render("index.html", { title:"um titulo"})
})


server.get("/create-point", (req, res) => {

   //req.query: Query strings da nossa url
    console.log(req.query) 


   return res.render("create-point.html")
 });


 server.get("/search", (req, res) => {

    // pegar os dados do abnco de dados
       db.all(` SELECT * FROM places`, function(error, rows) {
       if(error) {
           return console.log(error)
       }

       const total = rows.length

       //mostrar a pagina html com os dados do banco de dados
        return res.render("search.html", {places: rows , total: total})
    })  

    
  })
 

//LIGAR O SERVIDOR
server.listen(3000);