document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initSectionSwitching();
    initScrolling();
    initAutoScroll();
    initFormSubmission();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const darkModeEnabled = body.classList.toggle("dark-theme");
    localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");
    themeToggle.innerHTML = darkModeEnabled ? "☀️" : "🌙";
    document.body.style.backgroundImage = `url('bg/${darkModeEnabled ? "darkmode" : "lightmode"}.jpg')`;
}

function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
    document.body.classList.toggle("dark-theme", darkModeEnabled);
    themeToggle.innerHTML = darkModeEnabled ? "☀️" : "🌙";
    document.body.style.backgroundImage = `url('bg/${darkModeEnabled ? "darkmode" : "lightmode"}.jpg')`;
}

function loadSection(sectionId, btn) {
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
    document.querySelectorAll(".nav-link").forEach(button => button.classList.remove("active"));
    if (btn) btn.classList.add("active");
}

function initSectionSwitching() {
    loadSection("home");
    window.addEventListener("popstate", (event) => {
        if (event.state?.section) loadSection(event.state.section);
    });
}

function downloadCV() {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey || event.key.startsWith("F")) event.preventDefault();
});

setInterval(() => {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = `<h1>Unauthorized Access Detected!</h1>`;
        setTimeout(() => window.close(), 2000);
    }
}, 1000);

function initScrolling() {
    document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
        const scrollContainer = wrapper.querySelector(".scroll-container");
        wrapper.querySelector(".left-arrow").addEventListener("click", () => scrollContainer.scrollBy({ left: -300, behavior: "smooth" }));
        wrapper.querySelector(".right-arrow").addEventListener("click", () => scrollContainer.scrollBy({ left: 300, behavior: "smooth" }));
    });
}

function initAutoScroll() {
    const profileList = document.getElementById("profile-list");
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount = (scrollAmount < profileList.scrollWidth - profileList.clientWidth) ? scrollAmount + 1 : 0;
        profileList.scrollLeft = scrollAmount;
    }, 30);

    const skillsList = document.querySelector(".skills-list");
    let scrollDirection = 1;
    let scrollStep = 2;
    let scrollInterval = setInterval(() => {
        skillsList.scrollTop += scrollStep * scrollDirection;
        if (skillsList.scrollTop + skillsList.clientHeight >= skillsList.scrollHeight) scrollDirection = -1;
        else if (skillsList.scrollTop <= 0) scrollDirection = 1;
    }, 50);

    skillsList.addEventListener("mouseenter", () => clearInterval(scrollInterval));
    skillsList.addEventListener("mouseleave", () => scrollInterval = setInterval(autoScrollSkills, 50));
}

function initFormSubmission() {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const location = document.getElementById("location").value;
        const message = document.getElementById("message").value;
        window.location.href = `mailto:abdulkhajashabuddin167@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nLocation: ${location}\n\nMessage:\n${message}`)}`;
    });
}

function updateDateTime() {
    document.getElementById("datetime").innerHTML = new Date().toLocaleString();
}
