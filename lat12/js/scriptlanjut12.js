// const nama = 'Faiz';
// const umur = 23;

// function coba(kata, ...values) {
//     // let str = '';
//     // kata.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return kata.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);


// HIGHLIGHT
const nama = 'Faiz';
const umur = 23;

function highlight(kata, ...values) {
    // let str = '';
    // kata.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return kata.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''}</span>`, '');
}

const str = highlight `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
document.body.innerHTML = str;