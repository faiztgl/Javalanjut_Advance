// Template Literals / Template String
// const nama = 'Sandhika';
// const umur = 33;

// console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`);


// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 12;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML FRAGMENT
const mhs = {
    nama: 'Faiz',
    umur: 22,
    nrp: 1008,
    email: 'faiz@gmail.com'

};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);