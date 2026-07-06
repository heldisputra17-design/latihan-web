const express = require ("express")
const movieRouter = express.Router()

const {
   getMovieApi,
   getMovieById,
   getMovieByIdApi,
   getMovies,
   timeMiddleware,
   yearMiddleware,
   tokenMiddleware,
   loggerMiddleware
} = require ('../controllers/movieController')

movieRouter.get('/movies', getMovieApi)
movieRouter.get('/movies:id', getMovieByIdApi)

module.exports = { movieRouter }