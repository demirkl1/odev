document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    showSlide(0);

    // Otomatik geçiş için
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); // 3 saniyede bir geçiş yapar
});
