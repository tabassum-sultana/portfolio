// Smooth scroll from Explore button
function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// Hire Me button
function showMessage() {
    alert("Thanks for visiting my portfolio! 😊");
}

// Fade animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial style
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s ease";
});

// Current year in footer (optional)
const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} Nabil Mahmud | All Rights Reserved`;