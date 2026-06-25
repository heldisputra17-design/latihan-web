// contoh 1
 var arr = ["jeruk","Mangga","Apel","Strawberry"];
 for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
 }

  // contoh 2
 var names = ["John","Doe","Jack","Heldi"]
 var i = 0
 while(i < names.length){
    console.log (arr[i])
    i++
 }

 //function
 //contoh1
 function tampilkan() {
    console.log("halo!");
 }
 tampilkan();

//contoh2
 function munculkanAngkaSeratus() {
    return 100
 }

 var tampung = munculkanAngkaSeratus();
 console.log(tampung)

  function munculkanAngkaSeratus() {
    return 100
 }

 console.log(munculkanAngkaSeratus())

 //contoh 3
 function kalikanDua(angka) {
    return angka * 2
 }

 var tampung = kalikanDua(2);
 console.log(tampung)


 //contoh 4
 function tampilkanAngka(angkaPertama, angkaKedua=2) {
    return angkaPertama + angkaKedua
 }

 console.log(tampilkanAngka(5,3))
 console.log(tampilkanAngka(6))


//function 1
  
function tampilkan(nama = "Heldi Saputra") {
console.log("Halo!" + (nama));
 }

 tampilkan();

 //Anonymous function
 var fungsiPerkalian = function(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
 }

 console.log(fungsiPerkalian(5,3))

 function tampilkanAngka(angkaPertama,angkaKedua){
    return angkaPertama + angkaKedua
 }

 console.log(tampilkanAngka(5,3))