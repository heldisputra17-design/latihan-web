// const express = require('express');
// const app = express();
// const port = 3000;

// let movies = [
// {id: 1, title: "Spider-Man", year: 2002},
// {id: 2, title: "John Wick", year: 2014},
// {id: 3, title: "The Avengers", year: 2012},
// {id: 4, title: "Logan", year: 2017},
// ]

// const getMovies = (req, res) => {
//     let {title} = req.query;
//     let result = "";

//     console.log(title);
//     if(title == undefined){
//     result = ""
//     }

//      if(title === undefined || title.trim() === "") {
//     movies.forEach((item, index) => {
//       result += `<H2>${index + 1}. ID: ${item.id}, TITLE: ${item.title}, YEAR: ${item.year}</H2>`;
//     });
//     } else {
//     if (item.title.toLowerCase().includes(title.toLowerCase())) {
//       result += `<H2>${index + 1}. ID: ${item.id}, TITLE: ${item.title}, YEAR: ${item.year}</H2>`;
//       }
//     };
//   }    
//       res.send (result || "<H2>Movies not found</H2>")


// const getMovieById = (req, res) => {
//   let {id} = req.params;

//   res.send(`ID: ${id}`)
// }

// const getMovieByTitle = (req, res) => {
//   let {title} = req.params;
//   let hasil = movies.find((item) => {
//     return item.title === title;
//   });

//   res.send(`${hasil.year}`);
// }

// app.get('/movies', getMovies);
// app.get('/movies/:id', getMovieById);
// app.get('/movies/title/:title', getMovieByTitle);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// let movies = [
// {id: 1, title: "Spider-Man", year: 2002},
// {id: 2, title: "John Wick", year: 2014},
// {id: 3, title: "The Avengers", year: 2012},
// {id: 4, title: "Logan", year: 2017},
// ]

// const getMovies = (req, res) => {
//     let { title } = req.query

//     console.log(title)

//     let result = "";
//     movies.forEach((item, index) => {
//         result += `<h3>${index + 1}. ${item.title} (${item.year})</h3>`;
//     });
//     res.send(result);
// }

// // Method untuk mendapatkan file berdasarkan id
// const getMovieById = (req, res) => {
//  let { id } = req.params;
//  let result = movies.find((item) => item.id === Number(id));
//  if (!result) {
//     res.status(404).send(`Movie dengan ID ${id} tidak ditemukan`);
//     return;
//  }

//  res.send(`<h3>${result.title} (${result.year})</h3>`);
// }

// app.get('/movies', getMovies);
// app.get('/movies/:id', getMovieById);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

const loggerMiddleware = (req, res, next) => {
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`)
    next()

}

const tokenMiddleware = (req, res, next) => {

    const { token } = req.query;

    if (token === "12345") {
        next();
    } else {
        res.status(401).json({
            message: "Token tidak valid"
        });
    }
}

const checkMovieIdMiddleware = (req, res, next) => {
  let { id } = req.params
  let result = movies.find(item => item.id === Number(id))

  if (result) {
    next()
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" })
  }
}

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {
    let {title} = req.query

    console.log(title)

    let result = ""
    movies.forEach((item,index) => {
        if(item.title.toLowerCase().includes(title.toLowerCase())){
            result += `<H1> ${index+1}. ${item.title}. Tahun Rilis : ${item.year} </H1>`
        }
    })
    res.send(result)
}

const getMovieById = (req, res) => {
  let { id } = req.params;
  // console.log("Mencari ID:", id);
  let hasil = movies.find((item) => item.id === Number(id));
  if (!hasil) {
    res.status(404).send(`<h2>Error: Film dengan ID ${id} tidak ditemukan!</h2>`);
    return;
  }
  res.send(`<h2>Film Ditemukan: ${hasil.title} (Tahun ${hasil.year})</h2>`);
}

// const getMovieByTitle = (req, res) => {
//   let { title } = req.params;
//   console.log("Mencari Parameter Title:", title);
  
//   let hasil = movies.find((item) => item.title.toLowerCase() === title.toLowerCase());

//   if (hasil) {
//     res.send(`<h2>Tahun rilis film ${hasil.title} adalah: ${hasil.year}</h2>`);
//   } else {
//     res.status(404).send(`<h2>Error: Film dengan judul "${title}" tidak ditemukan!</h2>`);
//   }
// };


const getMovieApi = (req, res) => {
    let { title } = req.query;
    console.log(title);
    if (title == undefined ){
        title = ""

    }
    let result = movies.filter((item, index) => {
        return item.title.toLowerCase().includes(title.toLowerCase())
    })
    res.json(result) 
}

app.use(loggerMiddleware);

app.get('/movies', getMovies);
app.get('/movies/:id', getMovieById);

app.get('/api/movies', getMovieApi);
app.get('/api/movies/:id', getMovieById);

app.get('/api/movies/:id', checkMovieIdMiddleware, tokenMiddleware);

app.listen(port, () => {
console.log(`Server berjalan di http://localhost:${port}/movies`);
});

// const express = require('express');
// const app = express();
// const port = 3000;

// let movies = [
//   { id: 1, title: "Spider-Man", year: 2002 },
//   { id: 2, title: "John Wick", year: 2014 },
//   { id: 3, title: "The Avengers", year: 2012 },
//   { id: 4, title: "Logan", year: 2017 },
// ];

// // --- 1. MIDDLEWARES ---
// const loggerMiddleware = (req, res, next) => {
//   console.log(`[LOG] Request Method: ${req.method}, Request URL: ${req.url}`);
//   next();
// };

// const tokenMiddleware = (req, res, next) => {
//   let { token } = req.query;

//   if (token === "112233") {
//     next();
//   } else {
//     res.status(401).json({ message: "Token tidak valid atau tidak ditemukan!" });
//   }
// };

// // --- 2. HANDLERS UNTUK BROWSER (Respon HTML) ---
// const getMoviesHtml = (req, res) => {
//   let { title } = req.query;
//   let result = "";

//   if (!title || typeof title !== 'string' || title.trim() === "") {
//     movies.forEach((item, index) => {
//       result += `<h2>${index + 1}. ID: ${item.id} | ${item.title} (${item.year})</h2>`;
//     });
//   } else {
//     movies.forEach((item, index) => {
//       if (item.title.toLowerCase().includes(title.toLowerCase())) {
//         result += `<h2>${index + 1}. ID: ${item.id} | ${item.title} (${item.year})</h2>`;
//       }
//     });
//   }
//   res.send(result || "<h2>Movies tidak ditemukan</h2>");
// };

// const getMovieByIdHtml = (req, res) => {
//   let { id } = req.params;
//   let hasil = movies.find((item) => item.id === Number(id));

//   if (hasil) {
//     res.send(`<h2>Film Ditemukan: ${hasil.title} (Tahun ${hasil.year})</h2>`);
//   } else {
//     res.status(404).send(`<h2>Error: Film dengan ID ${id} tidak ditemukan!</h2>`);
//   }
// };

// // --- 3. HANDLERS UNTUK THUNDER CLIENT / API (Respon JSON) ---
// const getMovieApi = (req, res) => {
//   let { title } = req.query;
  
//   // Memperbaiki bug: mencegah error "toLowerCase is not a function" jika title kosong (undefined)
//   let searchTitle = title ? title.toLowerCase() : ""; 
  
//   let result = movies.filter((item) => {
//     return item.title.toLowerCase().includes(searchTitle);
//   });
  
//   res.json(result); 
// };

// const getMovieByIdApi = (req, res) => {
//   let { id } = req.params;
//   let hasil = movies.find((item) => item.id === Number(id));

//   if (hasil) {
//     res.json(hasil); // Mengembalikan JSON, bukan HTML
//   } else {
//     res.status(404).json({ message: `Film dengan ID ${id} tidak ditemukan!` });
//   }
// };

// // --- 4. ROUTE DEFINITIONS ---

// // A. Endpoint Web (Buka di Browser biasa)
// app.get('/movies', getMoviesHtml);
// app.get('/movies/:id', getMovieByIdHtml);

// // B. Endpoint API (Gunakan Thunder Client di sini)
// // Kita pasang loggerMiddleware untuk semua route yang berawalan '/api'
// // app.use('/api', loggerMiddleware); 

// app.get('/api/movies', getMovieApi);

// // Kita pasang tokenMiddleware khusus untuk route pencarian ID API
// app.get('/api/movies/:id', tokenMiddleware, getMovieByIdApi);

// // --- 5. START SERVER ---
// app.listen(port, () => {
//   console.log(`Server berjalan lancar di http://localhost:${port}`);
//   console.log(`Silakan buka di Thunder Client: http://localhost:${port}/api/movies`);
// });