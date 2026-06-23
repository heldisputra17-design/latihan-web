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
var jamTutup = 17

if(status == true && jamBuka <= 9 && 9 <= jamTutup){
    console.log("Toko sedang buka")
} else {
    console.log("Toko sedang tutup")
}
