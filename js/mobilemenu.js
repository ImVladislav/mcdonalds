function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector(".navbar ul");

    menuToggle.classList.toggle("active"); // Toggle the "active" class

    // If you want to show/hide the ul:
    if (navUl.style.display === "flex") {
        navUl.style.display = "none";
    } else {
        navUl.style.display = "flex";
    }

}

// Reset menu display on window resize
function handleResize() {
    const navUl = document.querySelector(".navbar ul");
    const menuToggle = document.querySelector(".menu-toggle");

    if (window.innerWidth > 769) {
        navUl.style.display = "flex"; // Ensure it shows on larger screens
        menuToggle.classList.remove("active");
    } else if (navUl.style.display === "flex") {
        navUl.style.display = "none"; // Hide for smaller screens
        menuToggle.classList.remove("active");
    }
}

// Attach the resize listener
window.addEventListener("resize", handleResize);