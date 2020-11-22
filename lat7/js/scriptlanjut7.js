// Konsep THIS pada ARROW FUNCTION



// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const sandhika = new Mahasiswa();



// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const sandhika = new Mahasiswa();



// Object Literal
// const mhs1 = {
//     nama: 'Sandhika',
//     umur: 33,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }



// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const sandhika = new Mahasiswa();




// ------- TO BE CONTINUE... --------- //
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});