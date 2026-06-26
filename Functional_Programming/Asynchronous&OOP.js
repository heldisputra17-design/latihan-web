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

async function  periksaDataPasien(nomorIdPasien) {
    var dataPasien = [
        {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
        {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
        {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
        {id: 4, nama: "Franky", jenisKelamin: "Laki-laki"}
    ]
    var pasien = dataPasien.find( x => x.id === nomorIdPasien) ;
    if (pasien === undefined) {
        throw "data pasien tidak ada";
    } else {
        return pasien
    }
}

async function eksekusi() {
    try {
        const data = await periksaDataPasien(3);
        console.log(data);
    }catch(err) {
        console.log(err);
    }
}

eksekusi();