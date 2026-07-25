const mysql = require("mysql2")
require('dotenv').config()

const connectionPool = mysql.createPool({
    host     : process.env.DB_HOST ,
    user     : process.env.DB_USER ,
    password : process.env.DB_PASS ,
    database : process.env.DB_DATABASE ,
    port     : parseInt(process.env.DB_PORT) || 3306
});

connectionPool.getConnection((err) => {
    if(err) {
        console.error('Database connection failed:', err)
    } else {
        console.log('Connected to MySQL database')
    }
});

module.exports = connectionPool