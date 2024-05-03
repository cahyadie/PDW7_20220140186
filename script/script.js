// Ambil semua tombol di dalam carousel indicators
const carouselButtons = document.querySelectorAll('.carousel-indicators button');

// Tambahkan event listener ke setiap tombol
carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Ambil indeks slide dari atribut data-bs-slide-to
    const slideIndex = button.getAttribute('data-bs-slide-to');
    // Geser carousel ke slide yang sesuai dengan indeks
    $('#carouselExampleIndicators').carousel(parseInt(slideIndex));
  });
});
