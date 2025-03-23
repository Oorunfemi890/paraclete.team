function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");

    const menuIcon = document.querySelector(".menu-icon");
    menuIcon.innerHTML = navLinks.classList.contains("show") ? "&#10005;" : "&#9776;";
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    let index = 0;
    let direction = 1; // 1 for forward, -1 for backward

    function showImage() {
        images.forEach((img, i) => img.classList.remove("active"));
        images[index].classList.add("active");

        index += direction;

        // Reverse direction at start and end
        if (index >= images.length) {
            index = images.length - 2;
            direction = -1;
        } else if (index < 0) {
            index = 1;
            direction = 1;
        }
    }

    // Start the cycle
    showImage();
    setInterval(showImage, 3000); // Change every 3 seconds
});