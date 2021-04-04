// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//criar que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados , para nossas operações
db.serialize(() => {
    //criar uma tabela
//        db.run(`
//           CREATE TABLE IF NOT EXISTS places (
//               id INTEGER PRIMARY KEY AUTOINCREMENT,
//               image TEXT, 
 //              name TEXT,
//               address TEXT, 
//               address2 TEXT, 
//               state TEXT, 
//               city TEXT, 
//               items TEXT
 //          );

//        `)


    //inserir dados na tabela
    //    const query = `
    //            INSERT INTO places (
    //                image,
    //                name,
    //                address,
    //                address2,
    //                state,
    //                city,
    //                items
    //            ) VALUES (?,?,?,?,?,?,?);
    //    `
    //    const values = [

    //        "https://images.unsplash.com/photo-1528323273322-d81458248d40?//ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&//w=1101&q=80",
 //
    //        "Papersider",
 
    //        "Guilherme Gemballa",
 
    //        "Nº 260",
 
    //        "Santa Catarina",
 
    //        "RiO do Sul",
 
    //        "Resíduos Eletrônicos, Lâmpadas"
 
 
    //     ]

    //    function afterInsertData(error) {
    //        if(error) {
    //            return console.log(error)
    //        }

    //        console.log("Cadastrado com Sucesso")
    //        console.log(this)
    //    }


    //    db.run(query, values, afterInsertData)

       // Consultar os dados da tabela 
   //    db.all(` SELECT name FROM places`, function(error, rows) {
   //     if(error) {
   //         return console.log(error)
   //     }

   //     console.log("Aqui estão os seus Registros :")
   //     console.log(rows)
   // })   



    //Deletar um dado da tabela
  // db.run(`DELETE FROM places WHERE id = ?`, [2], function(error) {
 //      if(error) {
 //          return console.log(error)
 //      }
 //         console.log("Registro deletado com Sucesso :")
 //      })
 //
//})