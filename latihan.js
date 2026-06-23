console.log("Hello, World!");     
var name = "John Doe";
var nomorUrut = 12
var hari = "Senin"

console.log(name)
console.log(nomorUrut)
console.log(hari)

var open = true 
if(open == true){
    console.log("open the door")
}

// Operator Aritmatika
var a = 5
var b = 5
var tambah = a + b 
var kurang = a - b
var kali = a * b
var bagi = a / b
var modulus = a % b

console.log("Hasil Penjumlahan:", tambah)
console.log("Hasil Pengurangan:", kurang)
console.log("Hasil Perkalian:", kali)
console.log("Hasil Pembagian:", bagi)
console.log("Hasil Modulus:", modulus)

// Operator Perbandingan
console.log("Operator Pebandingan")
console.log(">>>>>>>>>>>>>>>>>>>>>")

console.log(1 != 1)
console.log(1 !== 2)
console.log(1 >= 2)

console.log("Operator Kondisional")
console.log(">>>>>>>>>>>>>>>>>>>>>")

// && (AND) || (OR) ! (NOT)
var status = open
var jamBuka = 9
var jamTutup = 22

if(status == true && jamBuka <= 8 && 9 <= jamTutup){
    console.log("Toko sedang buka")
} else {
    console.log("Toko sedang tutup")
}

// Operator String
console.log("Operator String")
console.log(">>>>>>>>>>>>>>>>>>>>>")

var word = "Web Programing"
console.log(word)
console.log(word.length)   
console.log(word.charAt(1))
console.log(`${word} Tahun 2026`)

var word3 = word.substring(3)
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.toString())
console.log(word.toWellFormed())
console.log(word.trim())
console.log(word.replaceAll("r", "R"))


console.log("Mengubah menjadi String dan Angka")
console.log(">>>>>>>>>>>>>>>>>>>>>")

// Mengubah menjadi String
// .toString()
// String(namaVariable)

var angka = 10
console.log(angka)
console.log(angka+angka)

console.log(String(angka))
console.log(angka.toString())

// Mengubah jadi angka/number
// .parseInt(namaVariable)
var angkaString = 20
console.log(angkaString)
console.log(angkaString+angkaString)

console.log(Number(angkaString))
console.log(parseInt(angkaString))

var angka1 = 30.7
var angka2 = 30.9
 
 console.log(angka1)
 console.log(angka2)

 


