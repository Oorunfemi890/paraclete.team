function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");

    const menuIcon = document.querySelector(".menu-icon");
    menuIcon.innerHTML = navLinks.classList.contains("show") ? "&#10005;" : "&#9776;";
}

let index = 0;

function moveCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-image");
    index++;

    if (index >= images.length) {
        index = 0;
    }

    const offset = -index * 100; // Adjust for one image at a time
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000);