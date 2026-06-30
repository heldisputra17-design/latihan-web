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

 console.log("================================")
console.log("CONDITIONAL STATEMENT")

var mood = 1
if(mood == "1"){
    console.log("muncul angka 1")
}

var mood = "happy"    
if(mood == "sad"){
    console.log("saya lagi senang")
}else{
    console.log("saya lagi sedih")
}


var mood = "kesel"    
if(mood == "happy"){
    console.log("saya lagi senang")
}else if(mood == "kesel"){
    console.log("saya lagi kesel")
}else{
    console.log("saya lagi sedih")
}

console.log("================================")

var minimarketStatus = "buka"
var telur = 'ready'
var buah = 'ready'
if ( minimarketStatus == "buka" ) { 
    console.log("Saya akan membeli buah dan telur")
    if ( telur == 'kosong' || buah == 'kosong' ) {
        console.log("Belanja saya masih kurang")
    }else if ( telur == 'ready' ) {
        console.log("Telur tersedia")
    }else if ( buah == 'soldout' ) {
        console.log("Buah habis")
    }
}else{
    console.log("Minimarket masih tutup, saya akan pergi lagi kembali")
}


console.log("================================")

var umur = 35

if(umur >= 17){
    console.log("Sudah memiliki ktp")
    if (umur < 20){
        console.log("Masih dibawah 20 tahun")
    }else if (umur < 30){
        console.log("Usia antara 20 dan 30 tahun")
    }else if (umur < 40){
        console.log("Usia antara 30 dan 40 tahun")
    }else{
        console.log("Sudah pasti memiliki ktp dan sudah tua")
    }
}else{
    console.log("Belum memiliki ktp")
}

console.log("================================")

var warna = "biru"
switch(warna){
    case "merah":
        console.log("Warna yang dipilih adalah merah")
        break
    case "biru":
        console.log("Warna yang dipilih adalah biru")
        break
    default:
        console.log("Warna tidak dikenal")
}

var jumlah = 0
for (deret = 5; deret > 0; deret--){jumlah += deret
    console.log("Jumlah saat ini :"+ jumlah)
}
console.log("Jumlah akhir :"+ jumlah)

console.log("================================")

//cara 1
var flag = 1;
while(flag < 10){
    console.log("Iterasi ke :" + flag)
    flag++;
}
console.log("================================")
//cara 2 
var flag = 0;
do {
    console.log("Iterasi ke :" + flag)
    flag++;
} while(flag < 10)

    console.log("================================")

    var flag = 2;
while(flag <= 10){
    console.log("Iterasi ke :" + flag)
    flag += 2;
}
console.log("================================")
for (var angka = 2; angka < 10; angka++){
    console.log("Iterasi ke :", angka)
}
