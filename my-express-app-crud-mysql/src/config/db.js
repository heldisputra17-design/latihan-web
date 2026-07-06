const mysql = require("mysql2")

const connectionPool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'db_movie',
    port : 3306

});

connectionPool.getConnection((err) => {
    if (err) {
        throw err
    }
});

module.exports = connectionPool