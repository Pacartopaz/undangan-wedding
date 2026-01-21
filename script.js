// --- FUNGSI URUTAN SIHIR ---
function startMagicSequence() {
    const magicCircle = document.querySelector('.magic-circle-wrapper');
    const envelope = document.querySelector('.envelope-container');
    const overlay = document.getElementById('envelope-overlay');
    
    // 1. FASE CHARGING (Mengisi Tenaga)
    // Munculkan lingkaran sihir dan mulai putar
    magicCircle.classList.add('charging');
    envelope.classList.add('charging'); // Amplop bergetar
    
    // Suara efek sihir bisa ditambahkan di sini jika ada file audio
    
    // 2. FASE CLIMAX (Setelah 2 detik charging)
    setTimeout(() => {
        // Hentikan getaran amplop, buat amplop menghilang
        envelope.classList.remove('charging');
        envelope.classList.add('vanish');
        
        // Buat lingkaran sihir meledak (Flash terang)
        magicCircle.classList.remove('charging');
        magicCircle.classList.add('flash');
        
        // 3. FASE SELESAI (Buka Website)
        setTimeout(() => {
            overlay.classList.add('finished'); // Hilangkan overlay
            document.body.classList.remove('locked-scroll'); // Izinkan scroll
        }, 500); // Waktu flash berlangsung
        
    }, 2000); // Durasi charging (2 detik)
}

// --- COUNTDOWN TIMER (Logic Standar) ---
const weddingDate = new Date("April 16, 2030 00:00:00").getTime();
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    if(elDays) elDays.innerText = String(days).padStart(2, '0');
    if(elHours) elHours.innerText = String(hours).padStart(2, '0');
    if(elMinutes) elMinutes.innerText = String(minutes).padStart(2, '0');
    if(elSeconds) elSeconds.innerText = String(seconds).padStart(2, '0');
}, 1000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
