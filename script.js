// Atur Tanggal Pernikahan di sini (Format: Bulan Tanggal, Tahun Jam:Menit:Detik)
const weddingDate = new Date("April 16, 2030 00:00:00").getTime();

// Update hitungan mundur setiap 1 detik
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Rumus konversi waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Menampilkan hasil ke elemen HTML dengan ID masing-masing
    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    // Pastikan elemen ada sebelum diisi (mencegah error)
    if (elDays && elHours && elMinutes && elSeconds) {
        elDays.innerText = days;
        elHours.innerText = hours;
        elMinutes.innerText = minutes;
        elSeconds.innerText = seconds;
    }

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-grid").innerHTML = "<h3>The Wedding is Today!</h3>";
    }
}, 1000);

// Script untuk Smooth Scroll saat klik Menu Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});