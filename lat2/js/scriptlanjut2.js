// 1. Object Literal
// let mahasiswa = {
//     nama: 'Sandhika',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log("Halo " + this.nama + " Selamat makan");
//     }
// }


// 2. Object Function Declaration

const MethodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log('Halo ' + this.nama + ' Selamat makan...!');
    },

    main: function (jam) {
        this.energi -= jam;
        console.log('Halo ' + this.nama + '  selamat bermain...');
    },

    tidur: function (jam) {
        this.energi += jam;
        console.log('Halo ' + this.nama + '  selamat tidur...');
    }
}


function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    return mahasiswa;
}

let Sandhika = Mahasiswa('Sandhika', 10);
let Doddy = Mahasiswa('Doddy', 20);


// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log('Halo ' + this.nama + ' Selamat makan...!');
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log('Halo ' + this.nama + '  selamat bermain...');
//     }

// }

// let Sandhika = Mahasiswa('Sandhika', 10);