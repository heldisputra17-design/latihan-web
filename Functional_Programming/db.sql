create table mahasiswa(
nim INT(10) PRIMARY KEY,
nama CHAR(255) NOT NULL,
prodi CHAR(255) NOT NULL,
jenisKelamin ENUM ('Laki-laki','Perempuan'),
alamat TEXT() NOT NULL,
noHp CHAR(25)
);

    INSERT INTO mahasiswa(nama, nim, prodi, jenisKelamin, alamat, noHp)
    VALUES ("Heldi Saputra", 12345, "TIK", "Laki-laki", "Tenggarong", "0895636458178")

    INSERT INTO mahasiswa(nama, nim, prodi, jenisKelamin, alamat, noHp)
    VALUES ("Kiki", 52445, "PAUD", "Perempuan", "Tenggarong", "081363658179");

    INSERT INTO mahasiswa(nama, nim, prodi, jenisKelamin, alamat, noHp)
    VALUES ("Yanti", 73345, "Akutansi", "Perempuan", "Samarinda", "081163698179");

