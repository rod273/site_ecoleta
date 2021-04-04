const express = require('express')
const server = express()

//PEGAR O BANCO DE DADOS
 const db = require("./database/db.js")

//CONFIGURAR PASTA PÚBLIC
server.use(express.static("public"))

// HABILITAR O USO DO req.body NA NOSSA APLICAÇÃO
server.use(express.urlencoded({extended: true}))


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
   // console.log(req.query) 


   return res.render("create-point.html", {saved: true})
 })


 server.post("/savepoint", (req, res) => {

  // req.body: O corpo do nosso formulario
  // console.log(req.body)

  //INSERIR DADOS NO BANCO DE DADOS
          const query = `
                INSERT INTO places (
                    image,
                    name,
                    address,
                    address2,
                    state,
                    city,
                    items
                ) VALUES (?,?,?,?,?,?,?);
        `
        const values = [

          req.body.image,
          req.body.name,
          req.body.address,
          req.body.address2,
          req.body.state,
          req.body.city,
          req.body.items

 
      ]

        function afterInsertData(error) {
           if(error) {
               return console.log(error)
           }

           console.log("Cadastrado com Sucesso")
            console.log(this)

            return res.render("create-point-html", {saved: true})
        }


     db.run(query, values, afterInsertData)

      //  Consultar os dados da tabela 
       db.all(` SELECT name FROM places`, function(error, rows) {
        if(error) {
            return console.log(error)
       }

       console.log("Aqui estão os seus Registros :")
       console.log(rows)
    })  


  
 })


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