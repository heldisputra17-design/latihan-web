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