// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//criar que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados , para nossas operações
db.serialize(() => {
    //criar uma tabela
        db.run(`
           CREATE TABLE IF NOT EXISTS places (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               image TEXT, 
               name TEXT,
               address TEXT, 
               address2 TEXT, 
               state TEXT, 
               city TEXT, 
               items TEXT
           );

        `)


    //inserir dados na tabela
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

            "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
 
            "Colectoria",
 
            "Guilherme Gemballa",
 
            "Nº 260",
 
            "Santa Catarina",
 
            "RiO do Sul",
 
            "Resíduos Eletrônicos, Lâmpadas"
 
 
         ]

        function afterInsertData(error) {
            if(error) {
                return console.log(error)
            }

            console.log("Cadastrado com Sucesso")
            console.log(this)
        }


       // db.run(query, values, afterInsertData)
        db.all(` SELECT * FROM places`, function(err))

    // Consultar os dados da tabela 


    //Deletar um dado da tabela
})