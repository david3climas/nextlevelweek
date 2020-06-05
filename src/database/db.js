//importa a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()
//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para nossas operações
//db.serialize(() => {
//     // 1 - Criar a tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            Items TEXT 
//         );
//     `)

//     // 2 - Inserir dados
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Colectoria",
//         "Guilherme Gamballa, Jardim América",
//         "Número 260",
//         "Santa Cataria",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }

//    db.run(query, values, afterInsertData)

//     // 3 - Consultar dados
//     db.all(`SELECT * FROM places`, function(err, rows){
//          if(err) {
//              return console.log(err)
//          }

//          console.log("Aqui estão seus registros: ")
//          console.log(rows)
//     })

    // // 4 - Deletar dados

//     db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })

  
// })