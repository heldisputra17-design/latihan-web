const jwt = require('jsonwebtoken')

const authJWT = (req, res, next) => {
   const authHeader = req.header('Authorization')

   if(!authHeader){
      res.setHeader('WWW-Authenticate', 'bearer')

      return res.status(401).json({
         Status  : "Halaman tidak tersedia",
         Message : "Silahkan LOGIN kembali"
      })
   }
 
}

module.exports = {authJWT}