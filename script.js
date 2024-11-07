// Dynamic Greeting
const greeting = document.getElementById('greeting');
if (greeting) {
    const hour = new Date().getHours();
    greeting.textContent = hour < 12 ? 'Good Morning!' : hour < 18 ? 'Good Afternoon!' : 'Good Evening!';
}

// Simple Image Carousel
let currentImageIndex = 0;
function nextImage() {
    const images = document.querySelectorAll('.carousel img');
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    nextImage(); // Show the first image
});
