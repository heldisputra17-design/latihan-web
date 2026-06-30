//Recursive
function countDown(number) {
    console.log(number);
    var newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(10);

//First-class Function
 function hitungpersegi(sisi){
     function luas(s){
        return s * s;
    }
    function keliling(s){
        return 4 * s;
    }
  
    console.log("luas persegi = ",luas(sisi))
    console.log("keliling persegi = ",keliling(sisi))
 }
 hitungpersegi(10);

// function hitungPersegi(sisi) {
//     function luas(s) {
//         return s * s;
//     }
//     function keliling(s) {
//         return 4 * s;
//     }
  
//     console.log("Luas persegi = ", luas(sisi));
//     console.log("Keliling persegi = ", keliling(sisi));
// }

// hitungPersegi(6);

//CURRYING FUNCTION
// function tambah (a, b){
//     return a + b
// }

// console.log(tambah(2,5))

// function tambah (a){
//     return function (b){
//         return a+b
//     }
// }

// console.log(tambah(2)(5))

//