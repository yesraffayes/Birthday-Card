document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen-elemen yang kita butuhkan
    const card = document.getElementById('birthdayCard');
    const cardCover = document.querySelector('.card-cover');
    const closeButton = document.getElementById('closeButton');
    const confettiCanvas = document.getElementById('confetti-canvas');

    // Buat "pabrik" konfeti yang nempel di canvas kita
    const myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    // Fungsi untuk memicu konfeti
    function fireConfetti() {
        myConfetti({
            particleCount: 150, // Jumlah konfeti
            spread: 90,       // Seberapa lebar sebarannya
            origin: { y: 0.6 }  // Mulai sedikit di bawah atas layar
        });
    }

    // Saat SAMPUL diklik
    cardCover.addEventListener('click', () => {
        // Tambah class 'open' ke kartu utama
        card.classList.add('open');
        // Tembakkan konfeti!
        fireConfetti();
    });

    // Saat tombol TUTUP diklik
    closeButton.addEventListener('click', () => {
        // Hapus class 'open' dari kartu utama
        card.classList.remove('open');
    });

});
