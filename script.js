// Ensure JavaScript runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initTheme(); // Initialize Theme
    initSectionSwitching(); // Enable Section Switching
    initScrolling(); // Enable Scroll Arrows
});

/// 🌙 Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");

    // Toggle dark mode class
    const darkModeEnabled = body.classList.toggle("dark-theme");

    // Save theme preference in localStorage
    localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");

    // Change button icon
    themeToggle.innerHTML = darkModeEnabled ? "☀️" : "🌙";

    // Apply the correct background image based on the theme
    updateBackgroundImage(darkModeEnabled);
}

// 🌟 Update Background Image based on Theme
function updateBackgroundImage(isDarkMode) {
    if (isDarkMode) {
        document.body.style.backgroundImage = "url('bg/darkmode.jpg')";
    } else {
        document.body.style.backgroundImage = "url('bg/lightmode.jpg')";
    }
}

// 🌟 Initialize Theme on Page Load
function initTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");

    // Check local storage for theme preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-theme");
        themeToggle.innerHTML = "☀️"; // Sun icon when dark mode is enabled
        updateBackgroundImage(true); // Set dark theme background
    } else {
        themeToggle.innerHTML = "🌙"; // Moon icon when light mode is enabled
        updateBackgroundImage(false); // Set light theme background
    }
}

// Ensure the theme is initialized on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initTheme);

// Ensure the theme is initialized on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initTheme);


// 🔄 Section Switching Function
function loadSection(sectionId, btn) {
    // Hide all sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId).classList.add("active");

    // Remove active class from all buttons
    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.remove("active");
    });

    // Add active class to clicked button
    if (btn) btn.classList.add("active");
}

// 🚀 Initialize Section Switching
function initSectionSwitching() {
    // Load "Home" section by default
    loadSection("home");

    // Make sure correct section loads if user navigates via back/forward
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.section) {
            loadSection(event.state.section);
        }
    });
}

// 📥 Download CV Function
function downloadCV() {
    const link = document.createElement("a");
    link.href = "cv.pdf"; // Change this to your CV file path
    link.download = "My_CV.pdf"; // Change this to your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ❌ Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// ❌ Disable Ctrl, Alt, Fn, Function Keys (F1-F12)
document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey || event.altKey || event.metaKey || event.key.startsWith("F")
    ) {
        event.preventDefault(); // Block Ctrl, Alt, Meta (Cmd for Mac), and Function Keys (F1-F12)
    }
});

// 🛡️ Detect Developer Tools (Inspect Element) Opened
setInterval(() => {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = `<h1>Unauthorized Access Detected!</h1>`;
        setTimeout(() => window.close(), 2000);
    }
}, 1000);

// 🔄 Enable Scrolling for Projects and Certifications Sections
function initScrolling() {
    document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
        const scrollContainer = wrapper.querySelector(".scroll-container");
        const leftArrow = wrapper.querySelector(".left-arrow");
        const rightArrow = wrapper.querySelector(".right-arrow");

        leftArrow.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
        });

        rightArrow.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const location = document.getElementById("location").value;
        const message = document.getElementById("message").value;

        // Format the mailto link
        const subject = encodeURIComponent("New Contact Form Submission");
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nLocation: ${location}\n\nMessage:\n${message}`);

        // Open email client
        window.location.href = `mailto:abdulkhajashabuddin167@gmail.com?subject=${subject}&body=${body}`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profileList = document.getElementById("profile-list");
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed if needed

    function autoScroll() {
        if (scrollAmount < profileList.scrollWidth - profileList.clientWidth) {
            scrollAmount += scrollSpeed;
            profileList.scrollLeft = scrollAmount;
        } else {
            scrollAmount = 0; // Reset scroll to start
        }
    }

    setInterval(autoScroll, 30); // Adjust timing for smooth scrolling
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsList = document.querySelector(".skills-list");

    let scrollDirection = 1; // 1 for down, -1 for up
    let scrollStep = 2; // Speed of scrolling

    function autoScrollSkills() {
        if (!skillsList) return;

        skillsList.scrollTop += scrollStep * scrollDirection;

        // Reverse direction when reaching the end
        if (skillsList.scrollTop + skillsList.clientHeight >= skillsList.scrollHeight) {
            scrollDirection = -1;
        } else if (skillsList.scrollTop <= 0) {
            scrollDirection = 1;
        }
    }

    // Start Auto-Scrolling
    let scrollInterval = setInterval(autoScrollSkills, 50);

    // Pause scrolling when hovered
    skillsList.addEventListener("mouseenter", () => clearInterval(scrollInterval));
    skillsList.addEventListener("mouseleave", () => {
        scrollInterval = setInterval(autoScrollSkills, 50);
    });
});


function updateDateTime() {
    document.getElementById("datetime").innerHTML = new Date().toLocaleString();
    }
setInterval(updateDateTime, 1000);
updateDateTime();
