
/* =================================
   CODEVERSE - INTERACTIVE JAVASCRIPT
================================= */

// 1. Typing Animation

const typingText = document.getElementById("typingText");

const roles = [
    "Developer.",
    "Creative Thinker.",
    "Tech Enthusiast.",
    "Problem Solver."
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 3. Dark / Light Theme Toggle

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("codeverseTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☼";

    localStorage.setItem(
        "codeverseTheme",
        isLight ? "light" : "dark"
    );

});


// 4. Scroll Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// 5. Active Navigation Link

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navItems.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);

sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// 6. Automatic Copyright Year

document.getElementById("year").textContent =
    new Date().getFullYear();


// 7. Console Welcome Message

console.log(
    "%c Welcome to CODEVERSE!",
    "color: #a78bfa; font-size: 20px; font-weight: bold;"
);

console.log("Built with creativity and code.");
