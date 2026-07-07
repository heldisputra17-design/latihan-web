const mysql = require("mysql2")
require('dotenv').config()
require('../../dotenv/lib/main').config()

const connectionPool = mysql.createPool({
    host     : process.env.DB_HOST ,
    user     : process.env.DB_USER ,
    password : process.env.DB_PASS ,
    database : process.env.DB_DATABASE ,
    port     : process.env.DB_PORT
});

connectionPool.getConnection((err) => {
    if(err) {
        console.error(err)
    }
});

module.exports = connectionPool