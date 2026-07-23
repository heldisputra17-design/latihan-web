const connectionPool = require("../config/db.js")

const readCategory = (req, res) => {
   let queryText = 'SELECT * FROM tb_category';

   connectionPool.query(queryText, (err, data) => {
      if(err){
         console.log(err)
         return
      }
      res.json(data)
   })
}

const readCategoryById = (req, res) => {
   let {id} = req.params
   let queryText = `SELECT * FROM tb_category WHERE id_tb_category = ${id}`
      connectionPool.query(queryText, (err, data) => {
      if(err){
         console.log(err)
         return
      }
      res.json(data)
   })
}

const createCategory = (req, res) => {
   let {name, desc} = req.body
   let queryText = `INSERT INTO tb_category (name_tb_category, desc_tb_category)
                    VALUES ('${name}', '${desc}')`
   connectionPool.query(queryText, (err, data) => {
      if(err){
       console.log(err)
       return
      }
      res.json('Message : Berhasil')
   })
}

const updateCategory = (req, res) => {
   let {name, desc} = req.body
   let {id} = req.params
   let queryText = `UPDATE tb_category
                     SET name_tb_category = '${name}', desc_tb_category = '${desc}'
                    WHERE id_tb_category = ${id}`
      connectionPool.query(queryText, (err, data) => {
      if(err){
       console.log(err)
       return
      }
      res.json('Message : Update Berhasil')
   })
}

const deleteCategory = (req, res) => {
   let {id} = req.params
   let queryText = `DELETE FROM tb_category WHERE id_tb_category = ${id}`
       connectionPool.query(queryText, (err, data) => {
       if(err) {
         console.log(err)
         return
       }
       res.json('Category Berhasil di Hapus')
    })
}

module.exports = {readCategory, readCategoryById, createCategory, updateCategory, deleteCategory}