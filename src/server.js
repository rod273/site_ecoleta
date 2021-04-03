const express = require('express');
const server = express();


//CONFIGURAR PASTA PÚBLIC
server.use(express.static("public"))


//CONFIGURAR CAMINHOS DA MINHA APLICAÇÃO
//PAGINA INICIAL
//REQ : REQUISIÇÃO
// RES: RESPOSTA
server.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html")
})

//LIGAR O SERVIDOR
server.listen(3000)