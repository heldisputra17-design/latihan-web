const express = require('express');
const app = express();
const port = 3000;

// let mahasiswa = [ 'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko' ];

// const getMahasiswa = (req, res) => {
//   let result = ""

  // mahasiswa.forEach(function(item){
  //   result = `${item}`
//   })

//   res.send(`Hello, ini adalah daftar mahasiswa: ${result}`);
// }

// app.get('/mahasiswa', getMahasiswa);

// const express = require('express');
// const app = express();
// const port = 3000;

// let mahasiswa = [ 'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko' ];

// const getMahasiswa = (req, res) => {
//   let result = mahasiswa.join(', ');

//   mahasiswa.forEach(function(item){
//   result += `<br>${item}<br>`

//   res.send(`Hello, ini adalah daftar mahasiswa: ${result}`);
//   });
// }

// app.get('/mahasiswa', getMahasiswa);

// app.listen(port, () => {
//   console.log(`Server berjalan di http://localhost:${port}`);
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// let mahasiswa = [ 'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko' ];

// const getMahasiswa = (req, res) => {
//   let result = "<ol>";

//   mahasiswa.forEach(function(item) {
//     result += `<h1><li>${item}</li></h1>`;
//   });

//   result += "</ol>";

//   res.send(`<h3>Hello, ini adalah daftar mahasiswa:</h3> ${result}`);
// };

// app.get('/mahasiswa', getMahasiswa);

// app.listen(port, () => {
// console.log(`App listening on port http://localhost:${port}`)
// })

// const express = require('express');
// const app = express();
// const port = 3000;

let mahasiswa = [ 'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko' ];
let objectMahasiswa = [
  { nama: 'Ahmad Taufik', nim: 2120, jurusan: 'Teknik Informatika' },
  { nama: 'Budi Santoso', nim: 2121, jurusan: 'Teknik Informatika' },
  { nama: 'Citra Dewi', nim: 2122, jurusan: 'Teknik Informatika' },
  { nama: 'Dewi Lestari', nim: 2123, jurusan: 'Teknik Informatika' },
  { nama: 'Eko Prasetyo', nim: 2124, jurusan: 'Teknik Informatika' }
];

const getObjectMahasiswa = (req, res) => {
  let {nama} = req.query;
  let result = "";

  console.log(nama);
  if(nama == undefined){
    result = ""
  }

 if (nama === undefined || nama.trim() === "") {
    objectMahasiswa.forEach((item, index) => {
      result += `<H2>${index + 1}. Nama: ${item.nama}, NIM: ${item.nim}, Jurusan: ${item.jurusan}</H2>`;
    });
  } 
  else {
    objectMahasiswa.forEach((item, index) => {
      if (item.nama.toLowerCase().includes(nama.toLowerCase())) {
        result += `<H2>${index + 1}. Nama: ${item.nama}, NIM: ${item.nim}, Jurusan: ${item.jurusan}</H2>`;
      }
    });
  }

  res.send(result || "<H3>Error: Data tidak ditemukan</H3>");
};

// const getObjectMahasiswabyNim = (req, res) => {
//   // let nim = req.params.nim
//   let {nim} = req.params;

//   res.send(`NIM: ${nim}`)

// const getObjectMahasiswabyNama = (req, res) => {
//   let {nama} = req.params;
//   let hasil = objectMahasiswa.find((item) => {
//     return item.nama === nama;
//   });
//   res.send(`${hasil.nim}`);
// }

app.get('/objectmahasiswa', getObjectMahasiswa);
// app.get('/objectmahasiswa/:nim', getObjectMahasiswabyNim);
// app.get('/objectmahasiswa/:nama', getObjectMahasiswabyNama);


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
