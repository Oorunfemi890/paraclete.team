 // Loading Screen
 window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(function () {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 1000);
});
// Mobile Menu Toggle
document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('active');
});
// Image Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('imageSlider');
    let position = 0;
    function slideImages() {
        position = position <= -400 ? 0 : position - 100;
        slider.style.transform = `translateX(${position}%)`;
    }
    setInterval(slideImages, 4000);
});
let currentSlide = 0;
const sliderElement = document.getElementById('');
const sliderButtons = document.querySelectorAll('[data-index]');
function showSlide(index) {
    currentSlide = index;
    sliderElement.style.transform = `translateX(-${index * 100}%)`;

    // Update indicator buttons
    sliderButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.remove('bg-white/40');
            button.classList.add('bg-white/70');
        } else {
            button.classList.remove('bg-white/70');
            button.classList.add('bg-white/40');
        }
    });
}
// Set up click handlers for indicator buttons
sliderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.getAttribute('data-index'));
        showSlide(index);
    });
});
// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    showSlide(currentSlide);
}, 5000);
// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    // Add your form submission logic here
});