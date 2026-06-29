//Asyncrhoronus Janji 
// var isMomHappy = true

// var willIGetNewPhone = new Promise (
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: "Samsung",
//                 tipe: "S25 Pro",
//                 color: "Black",
//                 harga: "Rp20000000"
//             };
//             resolve(phone);
//         } else {
//             var reason = new Error('mom is not happy')
//             reject(reason);
//         }    
//     }

// )

// function askMom() {
//     willIGetNewPhone
//         .then(function (terpenuhi) {
//             console.log(terpenuhi);
//         })
//         .catch(function (error) {
//             console.log(error.message);
//         });
// }

// askMom()

// function periksaDataPasien(nomorIdPasien) {
//     var dataPasien = [
//         {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
//         {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
//         {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
//         {id: 4, nama: "Franky", jenisKelamin: "Laki-laki"}
//     ]
// return new Promise( function (resolve, reject){
//     var pasien = dataPasien.find( x => x.id === nomorIdPasien)
//     if (pasien === undefined){
//         reject("data pasien tidak ada")
//     }else{
//         resolve(pasien)
//     }    
// })

// }

// periksaDataPasien(3).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })

//Async/Await

// function doAsync() {
//     return new Promise( function (resolve, reject){
//         var check = false
//         if (check){
//             resolve("berhasil")
//         }else{
//             reject("gagal")
//         }
//     })
// }

// async function hello() {
//     try{
//         var result = await doAsync()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// hello()

// async function  periksaDataPasien(nomorIdPasien) {
//     var dataPasien = [
//         {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
//         {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
//         {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
//         {id: 4, nama: "Franky", jenisKelamin: "Laki-laki"}
//     ]
//     var pasien = dataPasien.find( x => x.id === nomorIdPasien) ;
//     if (pasien === undefined) {
//         throw "data pasien tidak ada";
//     } else {
//         return pasien
//     }
// }

// async function eksekusi() {
//     try {
//         const data = await periksaDataPasien(1);
//         console.log(data);
//     }catch(err) {
//         console.log(err);
//     }
// }

// eksekusi(0);


// Object Oriented Programming (OOP)
// class Car {
//     constructor(brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk!vroomvroom"
//     }
// }
// var ferarri = new Car("Ferrari", "Ferrari Company")
// console.log(ferarri)

// 1. Method
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }

// mycar = new Car ("Ford");
// console.log(mycar.present())

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + ", I have a " + this.carname;
//     }
// }

// mycar = new Car ("Ford");
// console.log(mycar.present("Hello"))

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + ", I have a " + this.carname;
//     }
// }
// mycar = new Car ("Ford");
// console.log(mycar.present("Hello"));
// myFerrari = new Car ("Ferrari");
// console.log(myFerrari.present("Hello"));
// myMercedez = new Car ("Mercedez");
// console.log(myMercedez.present("Hello"));
// myZenvo = new Car ("Zenvo");
// console.log(myZenvo.present("Hello"));
// myHilux = new Car ("Hilux");
// console.log(myHilux.present("Hello"));

// 2. Getters dan Setters

// class Car {
//     constructor(brand) {
//     this._carname = brand
// }
// get carcolor() {
//     return this._carname;
// }
// set carcolor(x) {
//     this._carname = x;
// }
// }
//  mycar = new Car ("Ford");
//  mycar.carname = "Volvo";
//  console.log(mycar.carname);

// 3. Static Method
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    static hello() {
        return "Hello!!";
    }
}

mycar = new Car ("Ford");
console.log(Car.hello());

//Inheritance atau Pewarisan

class Person{
    constructor(nama){
        this.nama = nama
        this._mapel = ""
    }
    get personMapel(){
        return this._mapel
    }
    set personMapel(mapel){
        this._mapel = mapel
    }
    berjalan(){
        return "Prok Prok Prok!!"
    }
}

class School extends Person{
    constructor(nama){
        super(nama)
        this.School = ""
    }
}


var guru = new School("Pak Budi")
guru.personMapel = "Matematika" 
console.log(guru)
console.log(guru.berjalan())
// console.log(Person.berjalan())

class Person{
    constructor(nama){
        this.nama = nama
        this.mapel = ""
    }
    berjalan(){
        return "Prok Prok Prok!!"
    }
}

var guru = new Person("Pak Budi")
guru.personMapel = "Matematika" 
console.log(guru)
console.log(guru.berjalan())
