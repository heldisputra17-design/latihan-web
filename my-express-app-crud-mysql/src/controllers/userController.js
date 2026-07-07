const connectionPool = require("../config/db")
const bcrypt = require("bcrypt")

const register = (req, res) => {
   let {email, nama, pass} = req.body
   let queryText = `SELECT * FROM tb_user WHERE email_tb_user = "${email}"`

   connectionPool.query(queryText, (err, result) => { 
      if(err) {
        console.log(err)
        return res.status(500).json({
         Status: "Failed",
         Message: err.message
        })
      }

      if(result.length > 0) {
        return res.status(500).json({
          Status : "Failed",
          Message: "Email user sudah terdaftar"
        })
      }
      bcrypt.hash(pass, 10, (err, hashedPassword) => {
      if(err) {
        console.log(err)
        return res.status(500).json({
         Status: "Failed",
         Message: err.message
        })
      }

      let insertQuery = `INSERT INTO tb_user(email_tb_user, nama_tb_user, pass_tb_user)
                         VALUES ('${email}', '${nama}', '${hashedPassword}')`

      connectionPool.query(insertQuery, (err, result) => {
          if(err) {
        console.log(err)
        return res.status(500).json({
         Status: "Failed",
         Message: err.message
        })
      }
     res.status(200)
     res.json({Message: "User Berhasil di Buat",
               Status : "Succes",
               Result : result
     })
   })
 })
   
})

}

const login = (req, res) => {
  let {email, pass} = req.body
  let queryText =`SELECT * FROM tb_user WHERE email_tb_user = ${email}`

  connectionPool.query(queryText, (err, result) => {
              if(err) {
        console.log(err)
        return res.status(500).json({
         Status: "Failed",
         Message: err.message
        })
      }
  })
}

module.exports = {login, register}