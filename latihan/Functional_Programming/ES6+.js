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

// const hitungPersegi = (sisi) => {
//     const luas = (s) => s * s;
//     const keliling = (s) => 4 * s;

//      console.log("luas persegi = ", luas(sisi));
// console.log("keliling persegi = ", keliling(sisi));
// };

// hitungPersegi(10);


// let nama = "Heldi Saputra";

// // 1. Menggunakan koma (Otomatis menambah spasi)
// console.log("Hallo, selamat datang.", nama); 

// // 2. Menggunakan operator + (Harus ditambah spasi manual sebelum tanda kutip tutup)
// console.log("Hallo, selamat datang. " + nama); 

// // 3. Menggunakan Template Literals (Wajib pakai backtick ` )
// console.log(`Hallo, ${nama}. Selamat Datang`);

//Enchanced Object Literal
// let names = "Heldi Saputra"
// let person = {
//     nama : names,
//     umur : 24,
//     tinggi : 170
// }

// let namaPerson = person.nama
// let umurPerson = person.umur
// let tinggiPerson = person.tinggi

// let {nama, umur, tinggi} = person

// console.log(person)

// Destructuring Array
// let number = [1,5,6,7,8]

// // let number1 = number[0]
// // let number2 = number[1]
// // let number3 = number[2]
// // let number4 = number[3]
// // let number5 = number[4]

let [num1, num2, num3, num4, lastNum] = [1,5,6,7,8]
 console.log(lastNum)

//Rest Parameter Array
// let [num1, , , , lastNum] = [1,5,6,7,8]

// let footballs = ["Messi", "Ronaldo", "Mbappe", "Halland", "Neymar"]
// let [foot1, foot2,...restFoot] = footballs

// console.log([foot1], [foot2], [restFoot])
// console.log(foot1)
// console.log(foot2)
// console.log(restFoot)

//Rest Parameter Object
// let names = "Heldi Saputra"
// let person = {
//     nama : names,
//     umur : 24,
//     tinggi : 170
// }

// let {nama, ...restPerson} = person

// console.log(nama)
// console.log(restPerson)

//Spread Operator
// let buah = ["Strawberry", "Mangga", "Apel"]

// buah.unshift("Mangga")
// buah.push("Durian")
// console.log(buah)

// buah = ["Mangga", ...buah, "Jeruk", "Manggis"]
// console.log(buah)

// let botol = {
//     merk : "Aqua",
//     ukuran : "500ml",
//     harga : 5000
// }
// // botol.warna = "Biru"
// // botol.kemasan = "Plastik"

// botol = {...botol, warna: "Biru", kemasan: "Plastik", bentuk: "Bulat"}
// console.log(botol)