
// Logic for any interactive elements can go here.
// The Inquiry form is now handled directly by HTML via FormSubmit.co

console.log("Aadhya's visuals Site Loaded");

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
}