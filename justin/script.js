// Komentar: Mengambil elemen yang dibutuhkan dari DOM
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-list a');
const garageButtons = document.querySelectorAll('.add-to-garage');

// Komentar: Fungsi untuk mengaktifkan/menonaktifkan menu mobile
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Mengubah ikon menu dari burger ke close dan sebaliknya
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Komentar: Menutup menu mobile saat salah satu link diklik (UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            // Mengembalikan ikon ke burger
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Komentar: Fungsi untuk tombol 'Add to Garage' (keranjang sederhana)
garageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ambil nama produk dari elemen terdekat
        const productName = button.closest('.product-card').querySelector('.product-name').textContent;
        
        // Logika sederhana: Menampilkan alert konfirmasi
        alert(`Product "${productName}" has been added to your 911 Garage! Drive to checkout.`);
        
        // Komentar: Di lingkungan produksi, di sini akan ada kode untuk:
        // 1. Menambah produk ke keranjang (array/local storage)
        // 2. Mengupdate jumlah item di ikon keranjang
    });
});