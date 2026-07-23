const express = require ("express")
const movieRouter = express.Router()

// const {
//    getMovieApi,
//    getMovieById,
//    getMovieByIdApi,
//    getMovies,
//    timeMiddleware,
//    yearMiddleware,
//    tokenMiddleware,
//    loggerMiddleware
// } = require ('../controllers/movieController.js')

// movieRouter.get('/movies', getMovieApi)
// movieRouter.get('/movies:id', getMovieByIdApi)


const {readMovie, readMovieById, createMovie, updateMovie, deleteMovie} = require('../controllers/movieController.js')
// const { authJWT } = require("../middleware/auth.js")

movieRouter.get('/movie', readMovie)
movieRouter.get('/movie/:id', readMovieById)

movieRouter.post('/movie', createMovie)
movieRouter.put('/movie/:id', updateMovie)
movieRouter.delete('/movie/:id', deleteMovie)

module.exports = movieRouter