// --- Project Data ---
// This acts as a simple database for your projects.
// To add a new project, just copy one of the objects and change the details.
const projectData = {
    "project-one": {
        title: "Corporate Website Redesign",
        image: "https://placehold.co/1200x600/764ba2/ffffff?text=Website+Redesign",
        category: "Web Development",
        date: "August 2025",
        description: "This project involved a complete overhaul of a client's online presence. The goal was to create a modern, responsive, and fast-loading website that would improve user engagement and search engine rankings. We focused on a clean user interface and a streamlined user experience, ensuring that information was easy to find and visually appealing.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"]
    },
    "project-two": {
        title: "Startup Branding Package",
        image: "https://placehold.co/1200x600/667eea/ffffff?text=Branding+Package",
        category: "Graphic Design",
        date: "July 2025",
        description: "A comprehensive branding project for a new tech startup. This included logo design, color palette selection, typography, and the creation of various marketing assets like business cards and social media banners. The identity was designed to be fresh, trustworthy, and appealing to a modern audience.",
        technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Brand Strategy"]
    },
    "project-three": {
        title: "2D Platformer Game",
        image: "https://placehold.co/1200x600/ff6b6b/ffffff?text=Unity+Game",
        category: "Game Development",
        date: "June 2025",
        description: "Developed a 2D side-scrolling platformer game in Unity. The project involved level design, character animation, and programming game mechanics in C#. The focus was on creating fun, challenging gameplay with responsive controls and a unique art style. It was a great learning experience in game logic and physics.",
        technologies: ["Unity", "C#", "Aseprite", "Game Design"]
    },
    "project-four": {
        title: "Automated Data Processing",
        image: "https://placehold.co/1200x600/4ecdc4/ffffff?text=Data+Automation",
        category: "Data Entry",
        date: "May 2025",
        description: "Created a script-based solution to automate the process of extracting, cleaning, and entering data from multiple sources into a central database. This significantly reduced manual labor, minimized errors, and improved overall data processing efficiency for the client's daily operations.",
        technologies: ["PHP", "SQL", "Data Scraping", "Automation"]
    }
};

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Project Page Loader ---
    // This code runs only if we are on the project.html page
    const projectDetailContent = document.getElementById('project-detail-content');
    if (projectDetailContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const project = projectData[projectId];
        
        if (project) {
            // Update the page title
            document.title = project.title + " - Geofrey Gapasin";

            // Create the HTML content
            projectDetailContent.innerHTML = `
                <div class="page-header">
                    <h1>${project.title}</h1>
                </div>
                
                <img src="${project.image}" alt="${project.title}" class="project-header-image">
                
                <div class="project-meta">
                    <div class="meta-item">
                        <h4>Category</h4>
                        <p>${project.category}</p>
                    </div>
                    <div class="meta-item">
                        <h4>Date</h4>
                        <p>${project.date}</p>
                    </div>
                </div>

                <div class="project-content">
                    <h2>About the Project</h2>
                    <p>${project.description}</p>

                    <h2>Technologies Used</h2>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<div class="tech-tag">${tech}</div>`).join('')}
                    </div>

                    <div class="project-links">
                        <a href="work.html" class="btn btn-secondary">Back to Work</a>
                    </div>
                </div>
            `;
        } else {
            // If project ID is not found
            projectDetailContent.innerHTML = `
                <div class="page-header">
                    <h1>Project Not Found</h1>
                    <p>Sorry, we couldn't find the project you were looking for.</p>
                    <a href="work.html" class="btn btn-primary">Return to Portfolio</a>
                </div>
            `;
        }
    }


    // --- 1. Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- 2. Active Page Highlighter ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active-nav');
        }
    });

    // --- 3. Scroll-triggered animations for cards ---
    const animatedElements = document.querySelectorAll('.section-card, .contact-card, .stat-item, .portfolio-item');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // --- 4. Contact Form Logic ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const captchaInput = document.getElementById('captcha');
            if (captchaInput.value.trim() !== '10') {
                alert('Please solve the verification problem correctly (7 + 3 = 10).');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

