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



const readMovie = require('../controllers/movieController.js')

movieRouter.get('/movie', readMovie)


module.exports = {movieRouter}