<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyWebsitePortfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
        <div id="mobileWarning">
            <div id="warningBox">
                <h2>🚫View Not Supported Upgrading a Mobile View</h2>
                <p>Please use a desktop for the best experience.</p>
            </div>
        </div>
        <script>
            function checkScreenSize() {
                let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                let screenWidth = window.innerWidth;
                let warning = document.getElementById("mobileWarning");
    
                if (isMobile || screenWidth < 650) {
                    warning.style.display = "block";
                    document.body.style.overflow = "hidden"; 
                } else {
                    warning.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
            window.onload = checkScreenSize;
            window.onresize = checkScreenSize;
        </script>
<header class="header-area">
    <div class="menu-container">
        <div class="navbar-brand">
            <img class="logo-icon" src="logo-design.png" alt="Logo" width="40" height="30">
            <span class="primary"></span>
        </div>        
        
        <nav class="navbar-main">
            <ul class="navbar-info">
                <li class="nav-item"><button class="nav-link active" onclick="loadSection('home', this)">Home</button></li>
                <li class="nav-item"><button class="nav-link" onclick="loadSection('profile', this)">Profile</button></li>
                <li class="nav-item"><button class="nav-link" onclick="loadSection('contact', this)">Contact</button></li>
            </ul>
        </nav>

        <div class="header-right-info">
            <button id="theme-toggle" class="theme-btn" onclick="toggleTheme()">🌙</button>
            <button class="download-btn" onclick="downloadCV()">Download  CV📥</button>
        </div>
    </div>
</header>

<main>
    <main>
        <section id="home" class="content-section active">
            <div class="home-container">
                <div class="home-left">
                    <img src="bg/profile.jpg" alt="Profile Image" class="profile-image">
                    <p>Vijayawada, Andhra Pradesh</p>
                    <p src="homeimg/calendar.png" id="datetime"></p>
                    <div class="left-profiles">
                        <a href="https://www.linkedin.com/in/abdulkhajashabuddin16" target="_blank" class="profile-btn">LinkedIn</a>
                        <a href="https://github.com/abdulkhajashabuddin16" target="_blank" class="profile-btn">GitHub</a>
                    </div>
                </div>
    
                    <div class="profile-scroll-container">
                        <h2>Hi 👋, I'm Abdul Khaja Shabuddin </h2>
                        <p>Electronics and Communication Engineering</p>
                        <p>I am a full-stack developer passionate about learning new technologies and solving real-world problems.</p>
                        <p>I specialize in front-end and back-end development, working with various frameworks and languages to create user-friendly applications.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <section id="profile" class="content-section">
        <h2>About Me</h2>
        <div class="about-box">
            <p>I am a full-stack developer passionate about learning new technologies and solving real-world problems.</p>
            <p>I specialize in front-end and back-end development, working with various frameworks and languages to create user-friendly applications.</p>
        </div>

        <div class="skills">
            <h2 class="section-title">Programming Languages and Tools</h2>
            <div class="skills-scroll-container">
                <div class="skills-list">
                    <div class="skill-item">
                        <img src="profileimg/c.png" alt="C">
                        <span>C</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/java.png" alt="Java">
                        <span>Java</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/html.png" alt="HTML">
                        <span>HTML</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/css.png" alt="CSS">
                        <span>CSS</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/Cadence.png" alt="Cadence">
                        <span>Cadence</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/matlab.png" alt="MATLAB">
                        <span>MATLAB</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/ardunio.jpg" alt="Arduino">
                        <span>Arduino</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/tinkercad.png" alt="Tinkercad">
                        <span>Tinkercad</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/python.png" alt="Python">
                        <span>Python</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/verilog.png" alt="Verilog">
                        <span>Verilog</span>
                    </div>
                    <div class="skill-item">
                        <img src="profileimg/sql.jpg" alt="SQL">
                        <span>SQL</span>
                    </div>
                    <div class="skill-item">
                        <img src="homeimg/GitHub.png" alt="Github">
                        <span>Firebase</span>
                    </div>
                </div>
            </div>
        </div>
        <h2>Projects</h2>
        <div class="scroll-wrapper">
            <div class="scroll-container">
                <div class="project-box">
                    <h3>Adiabatic Logic Based Universal Shift Registers</h3>
                    <p>In this project, universal shift registers were designed using adiabatic logic to enhance energy efficiency compared to traditional CMOS logic. The focus is on reducing power consumption while maintaining performance.</p>
                    <h4>Project Overview</h4>
                    <p>The project utilizes Cadence Virtuoso for designing and simulating the shift registers, implemented in 90nm and 45nm technologies. The comparison between CMOS and adiabatic logic is based on key performance metrics such as area, power consumption, and power-delay product (PDP).</p>
                    <h4>Comparison Results</h4>
                    <p>The comparison reveals that adiabatic logic provides significant energy efficiency improvements, especially in low-power applications. The study includes detailed analysis of area, power, and PDP for both 90nm and 45nm CMOS and adiabatic designs.</p>
                </div>
                <div class="project-box">
                    <h3>32-Bit Comparator (SystemVerilog)</h3>
                    <p>This project focused on designing a 32-bit comparator and verification environment, implemented in SystemVerilog.</p>
                    <h4>Overview</h4>
                    <p>The 32-bit comparator compares two 32-bit binary numbers and provides three outputs:</p>
                    <p>A &gt; B : High 1 if A is greater than B.</p>
                    <p>A = B : High 1 if A is equal to B.</p>
                    <p>A &lt; B : High 1 if A is less than B.</p>
                    <p>For more details, check out the project on <a href="https://github.com/abdulkhajashabuddin16/32bit_Comparator_SystemVerilog_Verification" target="_blank">GitHub repository</a>.</p>
                    <p>For the online simulation project, you can view the code on <a href="https://www.edaplayground.com/x/uFbJ" target="_blank">EDA Playground</a>.</p>
                </div>
                <div class="project-box">
                    <h3>Smart Home Automation System</h3>
                    <p>This project involves the design and development of a smart home automation system using IoT devices. The system enables remote control and monitoring of various home appliances through a web or mobile interface.</p>
                    <h4>Project Overview</h4>
                    <p>The system is built using ESP32 and NodeMCU microcontrollers, providing a reliable and flexible solution for automating home tasks such as lighting, temperature control, and security. It integrates sensors and actuators for enhanced automation capabilities.</p>
                    <h4>System Components</h4>
                    <p>Components include IoT devices such as temperature and motion sensors, relay modules, and Wi-Fi communication. The ESP32 and NodeMCU control the devices and enable communication with cloud platforms for remote access.</p>
                    </div>
            </div>
            <div class="scroll-arrows">
                <button class="scroll-arrow left-arrow">&#9664;</button>
                <button class="scroll-arrow right-arrow">&#9654;</button>
            </div>            
        </div>
    
        <h2>Certificates</h2>
        <div class="scroll-wrapper">
            <div class="scroll-container">
                <div class="certificates-box">
                    <h3>SystemVerilog & UVM Certification</h3>
                    <h4>Taras Systems and Solutions</h4>
                    <p>Certification in SystemVerilog & UVM, awarded by Tessolve Training Institute.</p>
                    <img src="profileimg/certificate/taras.png" alt="SystemVerilog & UVM Certification" />
                </div>
                <div class="certificates-box">
                    <h3>ARM Cortex-M Processors Certification</h3>
                    <h4>Coursera</h4>
                    <p>Covers ARM Cortex-M processors, architecture, and programming.</p>
                    <img src="profileimg/certificate/arm.png" alt="ARM Certification" />
                    <a href="https://www.coursera.org/account/accomplishments/specialization/MSKNXU9KNKWF" target="_blank">Verify in Coursera</a>
                </div>
                <div class="certificates-box">
                    <h3>Embedded Systems & IoT Programming - Level 1</h3>
                    <h4>Tessolve Training Institute</h4>
                    <p>Foundational course in embedded systems and IoT.</p>
                    <img src="profileimg/certificate/tessolve1.jpg" alt="Embedded Level 1" />
                </div>
            </div>
            <div class="scroll-arrows">
                <button class="scroll-arrow left-arrow">&#9664;</button>
                <button class="scroll-arrow right-arrow">&#9654;</button>
            </div>
        </div>

        <h2>Profile Lists</h2>
        <div class="profile-list" id="profile-list">
            <div class="profile-item">
                <img src="homeimg/Linkedin.png" alt="LinkedIn">
                <button onclick="window.open('https://www.linkedin.com/in/abdulkhajashabuddin16', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/GitHub.png" alt="GitHub">
                <button onclick="window.open('https://github.com/abdulkhajashabuddin16', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/codechef.png" alt="CodeChef">
                <button onclick="window.open('https://www.codechef.com/users/munna_78', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/GeeksforGeeks.png" alt="GeeksforGeeks">
                <button onclick="window.open('https://www.geeksforgeeks.org/user/2200040059_klu/', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/leetcode.png" alt="LeetCode">
                <button onclick="window.open('https://leetcode.com/u/2200040059_klu', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/hackerrank.png" alt="HackerRank">
                <button onclick="window.open('https://www.hackerrank.com/profile/2200040059_klu', '_blank')">Visit</button>
            </div>
            <div class="profile-item">
                <img src="homeimg/codeforces.png" alt="Codeforces">
                <button onclick="window.open('https://codeforces.com/profile/2200040059_klu', '_blank')">Visit</button>
            </div>
        </div>
    </section>       

    <section id="contact" class="content-section">
        <div class="contact-container">
            <h1>Contact Me</h1>
            <ul class="contact-details">
                <li><span>📧 Email:</span> <span class="disabled-text">your.email@example.com</span></li>
                <li><span>📞 Phone:</span> <span class="disabled-text">+123 456 7890</span></li>
                <li><span>📍 Location:</span> <span class="disabled-text">Your City, State, Country</span></li>
            </ul>
    
            <!-- Contact Form -->
            <form id="contactForm">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
                <input type="text" id="location" name="location" placeholder="Location" required>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>    
    
</main>

<script src="script.js"></script>
</body>
</html>
