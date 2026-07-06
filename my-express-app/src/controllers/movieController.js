const express = require('express');
const { movieRouter } = require('../routes/movieRouter');
const app = express();
const port = 3000;

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

// --- 1. MIDDLEWARES ---
const loggerMiddleware = (req, res, next) => {
  console.log(` Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
};

const tokenMiddleware = (req, res, next) => {
  let { token } = req.query;

  if (token === "112233") {
    next();
  } else {
    res.status(401).json({ message: "Token tidak valid atau tidak ditemukan!" });
  }
};

const yearMiddleware = (req, res, next) => {
  let { year } = req.query;
  if (year !== undefined) {
    if (isNaN(Number(year))) {
      return res.status(400).json({ message: "Year harus berupa angka" });
    }
    console.log(`Filter by year: ${year}`);
  }
  next();
};

const timeMiddleware = (req, res, next) => {
  console.log(new Date);
  next();
};

// --- 2. HANDLERS UNTUK BROWSER (Respon HTML) ---
const getMovies = (req, res) => {
  let { title } = req.query;
  let result = "";

  if (!title || typeof title !== 'string' || title.trim() === "") {
    movies.forEach((item, index) => {
      result += `<h2>${index + 1}. ID: ${item.id} | ${item.title} (${item.year})</h2>`;
    });
  } else {
    movies.forEach((item, index) => {
      if (item.title.toLowerCase().includes(title.toLowerCase())) {
        result += `<h2>${index + 1}. ID: ${item.id} | ${item.title} (${item.year})</h2>`;
      }
    });
  }
  res.send(result || "<h2>Movies tidak ditemukan</h2>");
};

const getMovieById = (req, res) => {
  let { id } = req.params;
  let hasil = movies.find((item) => item.id === Number(id));

  if (hasil) {
    res.send(`<h2>Film Ditemukan: ${hasil.title} (Tahun ${hasil.year})</h2>`);
  } else {
    res.status(404).send(`<h2>Error: Film dengan ID ${id} tidak ditemukan!</h2>`);
  }
};

// --- 3. HANDLERS UNTUK THUNDER CLIENT / API (Respon JSON) ---

const getMovieApi = (req, res) => {
  let { title, year } = req.query;
  let result = movies.filter((item) => {
    let match = true;
    if (title) {
      match = match && item.title.toLowerCase().includes(title.toLowerCase());
    }
    if (year) {
      match = match && item.year === Number(year);
    }
    return match;
  });
  res.json(result);
};

const getMovieByIdApi = (req, res) => {
  let { id } = req.params;
  let hasil = movies.find((item) => item.id === Number(id));

  if (hasil) {
    res.json(hasil);
  } else {
    res.status(404).json({ message: `Film dengan ID ${id} tidak ditemukan!` });
  }
};

module.exports = {
   getMovieApi,
   getMovieById,
   getMovieByIdApi,
   getMovies,
   timeMiddleware,
   yearMiddleware,
   tokenMiddleware,
   loggerMiddleware
}
