const express = require('express');
const server = express();


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
});


server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
 });


 server.get("/search", (req, res) => {
    return res.render("search.html")
  });
 

//LIGAR O SERVIDOR
server.listen(3000);