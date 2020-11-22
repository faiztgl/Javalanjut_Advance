// HTML fragments
// const mhs = {
//     nama: 'Faiz Farisman',
//     umur: 22,
//     nrp: 1008,
//     email: 'faiz@gmail.com'

// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;



// 2. LOOPING
// const mhs = [{
//         nama: 'Faiz Farisman',
//         email: 'faiz@gmail.com'
//     },
//     {
//         nama: 'Angga',
//         email: 'angga@gmail.com'
//     },
//     {
//         nama: 'Amin',
//         email: 'amin@gmail.com'
//     },
//     {
//         nama: 'Toni',
//         email: 'toni@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;



// 3. CONDITIONIS
// ternary
// const lagu = {
//     judul: 'Tetap dalam jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>  
//     </ul>
// </div>`;



// 4. NESTED
// HTML fragments bersarang

const mhs = {
    nama: 'Faiz.F',
    semester: 5,
    matkul: [
        'Rekayasa web',
        'Sistem informasi',
        'Manajemen bisnis',
        'Agama'
    ]
};

function cetakMatKul(matkul) {
    return `
        <ol>
            ${matkul.map(mk => `<li>${mk}</li>`)}
        </ol>    
    `;

}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMatKul(mhs.matkul)}
</div>`;


document.body.innerHTML = el;