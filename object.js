// var orang = { 
//     nama: "Jarwo",
//     warnaKulit: "Sawo Matang",
//     jenisKelamin: "Laki-laki",
//     beratBadan: 70,
//     usia: 45
// }
//  console.log(orang.nama)
//  console.log(orang.jenisKelamin)
//  console.log(orang.usia)
 
//  console.log('===================================');
//  console.log("ARRAY OF OBJECT");
//  //array of object

var orang = [ { 
    nama: "Mba kew",
    warnaKulit: "Hitam Manis",
    jenisKelamin: "Perempuan",
    beratBadan: 70,
    usia: 18,
},{
    nama: "Harry Potter",
    warnaKulit: "Putih",
    jenisKelamin: "Laki-laki",
    beratBadan: 60,
    usia: 17,
},{
    nama: "Mia",
    warnaKulit: "Putih",
    jenisKelamin: "Perempuan",
    beratBadan: 60,
    usia: 20,
},{
    nama: "Harry Grey",
    warnaKulit: "Putih",
    jenisKelamin: "Laki-laki",
    beratBadan: 60,
    usia: 20,
},{
    nama: "Parryger",
    warnaKulit: "Putih",
    jenisKelamin: "Laki-laki",
    beratBadan: 60,
    usia: 19,
}
]   

// console.log(orang)
// console.log(orang[1].nama)
// console.log(orang[1].jenisKelamin)
// console.log(orang[1].usia)
// console.log(orang[0].nama)
// console.log(orang[0].jenisKelamin)
// console.log(orang[0].usia)


//  console.log('===================================')
//  console.log("ARRAY OF OBJECT")

// //forEach
// orang.forEach(function(item){
//     console.log(item.warnaKulit)
// })

// //map
// var warnaKulit = orang.map(function(item){
//     return item.warnaKulit
// })
// console.log(warnaKulit)

//.filter()
var filterusia = orang.filter(function(item){
    return item.usia < 20;
})

console.log(filterusia)

