//preciso importar meu banco sql:
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'restaurante',
  password: 'dorajesse1712'
});

//preciso retornar essa execução pro arquivo que fez o require desse banco:
module.exports = connection;