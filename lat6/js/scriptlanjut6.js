// const tampilNama = function () {
//     return (`Halo, ${nama}`);
// }

// console.log(tampilNama('Sandhika'));



// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Erik', 'Malam'));



// IMPLISIT RETURN
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Doddy Ferdiansyah');




// const tampilNama = (nama, waktu) => {
//     return `Selamat ${nama}, ${waktu}`;
// }

// console.log(tampilNama('Erik', 'Malam'));



let mahasiswa = ['Sandhika', 'Doddy', 'Faris'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);