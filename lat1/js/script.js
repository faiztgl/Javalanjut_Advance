let mahasiswa = {
    nama : 'Sandhika',
    energi : 10,
    makan : function (porsi) {
        this.energi = this.energi + porsi;
        console.log (`Halo $(this.nama), Selamat makan!`);
    }
}