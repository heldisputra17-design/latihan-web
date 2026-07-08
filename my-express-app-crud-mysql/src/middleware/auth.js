require('dotenv').config()
const jwt = require('jsonwebtoken')
const { authPlugins } = require('mysql2')

const authJWT = (req, res, next) => {
   const authHeader = req.header('Authorization')
  
   if(!authHeader){
      res.setHeader('WWW-Authenticate','bearer')

      return res.status(401).json({
         Status  : "Halaman tidak tersedia",
         Message : "Silahkan LOGIN kembali"
      })
   }

   // console.log(authHeader)
   const token = authHeader.split(" ")[1]
   if(!token){
      return res.status(401).json({
         Status  : "Ditolak",
         Message : "Format token anda salah 'Bearer <token>'"
      })
   }

   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if(err){
         return res.status(401).json({
            Status  : "Ditolak",
            Message : err.message
         })
      }else{
      req.user = user
      console.log(user)

      next()

      }
   })

}

module.exports = {authJWT}