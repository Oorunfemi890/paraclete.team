function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Sidebar Functionality
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

function openSidebar() {
    sidebar.classList.add("active");
    openSidebarBtn.style.display = "none"; // Hide button when sidebar is open
}

function closeSidebar() {
    sidebar.classList.remove("active");
    openSidebarBtn.style.display = "block"; // Show button when sidebar is closed
}

// Event Listeners
openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);

// Carousel Functionality
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
