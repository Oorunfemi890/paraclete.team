<script>
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show-sidebar");
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