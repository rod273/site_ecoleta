const express = require('express');
const server = express();


//CONFIGURAR CAMINHOS DA MINHA APLICAÇÃO
//PAGINA INICIAL
//REQ : REQUISIÇÃO
// RES: RESPOSTA
server.get("/", (req, res) => {

})

//LIGAR O SERVIDOR
server.listen(3000)