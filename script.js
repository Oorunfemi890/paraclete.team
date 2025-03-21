function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

let index = 0;

function moveCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-image");
    index++;

    if (index >= images.length) {
        index = 0;
    }

    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000);

// Sidebar Functionality
function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}
