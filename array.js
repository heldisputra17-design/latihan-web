var angka = [2,5,1,3,4]
console.log(angka[1])
console.log(angka[0])
console.log(angka)

//length
console.log(angka.length)

//push
console.log("Sebelum push :"+ angka)
angka.push(9)
console.log("setelah push :"+ angka)

//pop
console.log("Sebelum pop :"+ angka)
angka.pop()
console.log("Setelah pop :"+ angka)

//unshift
console.log("Sebelum unshift :"+ angka)
angka.unshift(8)
console.log("Setelah unshift :"+ angka)

//shift
console.log("Sebelum shift :"+ angka)
angka.shift()
console.log("Setelah shift :"+ angka)

//join
var peserta = ["Andra","Taufik","Adit","Debi"]
console.log(peserta)

console.log("Sebelum join")
console.log(peserta)

console.log("Setelah Join")
console.log(peserta.join("-"))

//split
var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log("Sebelum split")
console.log(nama)
console.log("Sesudah Split")
console.log(nama.split(""))

var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log("Sebelum Split")
console.log(nama)
console.log("Sesudah split")
console.log(nama.length)

//sort
var newPeserta = ["Andra","Taufik","Adit","Debi"]
console.log("sebelum sort")
console.log(peserta)
console.log("sesudah di sort")
console.log(peserta.sort)


//Slice 
console.log("sebelum slice")
console.log(newPeserta)
console.log("sesudah slice")
var newPeserta = newPeserta.slice(2,3)
    console.log(newPeserta)

//Slice 
console.log("sebelum splice")
console.log(newPeserta)
console.log("sesudah splice")
newPeserta.splice(2,0,"Heldi","Huda")
    console.log(newPeserta)
