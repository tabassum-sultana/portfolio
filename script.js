const title = document.querySelector("[data-type-text]");

const themeToggle = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("portfolio-theme");

function setTheme(mode) {
    const isDark = mode === "dark";
    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {
        themeToggle.innerHTML = isDark
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
        themeToggle.setAttribute("aria-label", isDark ? "Switch to white mode" : "Switch to dark mode");
    }
}

setTheme(savedTheme || "light");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        localStorage.setItem("portfolio-theme", nextTheme);
        setTheme(nextTheme);
    });
}

if (title) {
    const text = title.dataset.typeText;
    let index = 0;

    function typeText() {
        title.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(typeText, 95);
        }
    }

    typeText();
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach(item => observer.observe(item));
} else {
    revealItems.forEach(item => item.classList.add("show"));
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thanks! Your message has been sent.");
        contactForm.reset();
    });
}
