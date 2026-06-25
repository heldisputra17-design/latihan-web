// let nama = "John"

// if (true){
// let nama = "Doe"
// console.log(nama)
// }

// console.log(nama)

// const pi = 3.14

// pi = 22/7

// console.log(pi)

// console.log("=============================")


// //ANNONYMOUS FUNCTION
// var tampilkanNama = function(a){
//  console.log("Hallo,"+ a)
// }

//  tampilkanNama("Huda")

 //ARROWS FUNCTION 
// const tampilkanNama = (nama) => {
//     console.log("Hallo, ${nama}");
// };

// tampilkanNama("Huda");

// const tampilkanNama = (nama) => console.log(`Hallo, ${nama}`);

// tampilkanNama("Huda");

//  const hitungpersegi(sisi) => {
//      function luas(s){
//         return s * s;
//     }
//     function keliling(s){
//         return 10 * s;
//     }
  
//     console.log("luas persegi = ",luas(sisi))
//     console.log("keliling persegi = ",keliling(sisi))
//  }
//  hitungpersegi(10);

//  const hitungPersegi = (sisi) => {
//     // Mengubah fungsi dalam menjadi arrow functions singel-line
//     const luas = (s) => s * s;
//     const keliling = (s) => 4 * s; // Dikembalikan ke 4 * s karena keliling persegi memiliki 4 sisi

//     console.log("luas persegi = ", luas(sisi));
//     console.log("keliling persegi = ", keliling(sisi));
// };

// hitungPersegi(5);

const hitungPersegi = (sisi) => {
    const luas = (s) => s * s;
    const keliling = (s) => 4 * s;
    
     console.log("luas persegi = ", luas(sisi));
console.log("keliling persegi = ", keliling(sisi));
};

hitungPersegi(10);
