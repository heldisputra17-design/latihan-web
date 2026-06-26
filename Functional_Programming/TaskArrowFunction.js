const hitungPersegi = (sisi) => {
    const luas = (s) => s * s;
    const keliling = (s) => 4 * s;
    
    console.log("luas persegi = ", luas(sisi));
    console.log("keliling persegi = ", keliling(sisi));
};

hitungPersegi(10);

