document.addEventListener('DOMContentLoaded', (event) => {
    const cardContainer = document.querySelector('.card-container');
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const closeButton = document.getElementById('closeButton');

    // Fungsi untuk membuka kartu
    function openCard() {
        cardContainer.classList.add('open');
        cardContainer.removeEventListener('click', openCard); // Hapus event listener di container setelah dibuka
    }

    // Fungsi untuk menutup kartu
    function closeCard() {
        cardContainer.classList.remove('open');
        // Tambahkan kembali event listener ke cardFront agar bisa dibuka lagi
        // Atau kamu bisa biarkan event listener di cardContainer agar bisa dibuka lagi dengan mengklik mana saja
        cardContainer.addEventListener('click', openCard);
    }

    // Ketika bagian depan kartu (atau container) diklik, buka kartu
    cardContainer.addEventListener('click', openCard);

    // Ketika tombol tutup di bagian belakang diklik, tutup kartu
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah event click menyebar ke cardContainer
        closeCard();
    });
});
