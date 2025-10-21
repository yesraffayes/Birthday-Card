// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. Cari tombol berdasarkan ID-nya
    const button = document.getElementById('surpriseButton');
    
    // 2. Cari kotak pesan kejutan berdasarkan ID-nya
    const message = document.getElementById('surpriseMessage');

    // 3. Tambahkan "event listener" (pendengar aksi) ke tombol
    //    Ini akan menjalankan fungsi saat tombol di-klik
    button.addEventListener('click', () => {
        
        // 4. Hapus class 'hidden' dari kotak pesan
        //    (Ini akan membuatnya terlihat, sesuai aturan di style.css)
        message.classList.remove('hidden');

        // 5. Sembunyikan tombolnya agar tidak bisa diklik lagi
        button.style.display = 'none';
    });

});