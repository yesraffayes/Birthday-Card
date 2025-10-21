document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen-elemen yang kita butuhkan
    const card = document.getElementById('birthdayCard');
    const cardCover = document.querySelector('.card-cover');
    const closeButton = document.getElementById('closeButton');

    // Cek dulu apakah elemennya ada
    if (card && cardCover && closeButton) {

        // Saat SAMPUL diklik
        cardCover.addEventListener('click', () => {
            // Tambah class 'open' ke kartu utama
            card.classList.add('open');
        });

        // Saat tombol TUTUP diklik
        closeButton.addEventListener('click', () => {
            // Hapus class 'open' dari kartu utama
            card.classList.remove('open');
        });

    } else {
        // Jika ada elemen yang tidak ditemukan, tampilkan error di console
        console.error("Error: Tidak bisa menemukan elemen kartu. Cek ID di HTML.");
    }

});
