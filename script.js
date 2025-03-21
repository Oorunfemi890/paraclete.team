// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Carousel Functionality
let index = 0;
let direction = 1;

function moveCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-image");

    index += direction;

    if (index >= images.length) {
        direction = -1;
        index = images.length - 2;
    } else if (index < 0) {
        direction = 1;
        index = 1;
    }

    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000);

// Sidebar Toggle for Mobile
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}
