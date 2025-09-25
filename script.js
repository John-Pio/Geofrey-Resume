const projectData = {
    'project-one': {
        title: 'CafeVox: Discovery Platform & Profile System',
        subtitle: 'A major feature enhancement for an AI chat application, introducing a complete discovery system, public/private user profiles, and a significant UI/UX overhaul.',
        image: 'img/CafeVox.png',
        category: 'Full-Stack Development',
        date: 'September 2025',
        duration: 'Several Weeks',
        client: 'Personal Project',
        status: 'Completed',
        description: `This project represents a major milestone in CafeVox's evolution, transforming it from a simple character chat tool into a comprehensive discovery and social platform. The work involved architecting and implementing a full-stack solution for content discovery, user profiles, and character showcases.

    The primary challenge was integrating these complex features seamlessly into the existing single-page application, enhancing user engagement without disrupting core functionality. This overhaul successfully laid the foundation for future analytics, social interactions, and advanced content management, significantly increasing the platform's value.`,
        gallery: [{
                url: 'img/Explore-Page.png',
                caption: 'Redesigned Explore & Discovery page with dynamic content sections'
            },
            {
                url: 'img/Public-Profile.png',
                caption: 'Public user profile page with character showcase and sharing'
            },
            {
                url: 'img/Character-Details.png',
                caption: 'Dedicated character detail view with clean layout and stats'
            },
            {
                url: 'img/Mobile-View.png',
                caption: 'Mobile-first responsive design for all new features',
                type: 'browser'
            }
        ],
        features: [
            "Advanced Discovery System with sections for 'For You', 'Popular', and 'Trending'",
            'Live Search with dynamic, client-side filtering and tag-based discovery',
            'Dual-Mode User Profiles (private dashboard and shareable public view)',
            'Dedicated Character Detail Pages with improved navigation and browser history',
            'Complete UI/UX overhaul with micro-interactions, hover effects, and staggered animations',
            'Fully mobile-responsive layouts with touch-friendly controls and carousels',
            'Secure public APIs designed to expose only non-sensitive character and user data'
        ],
        technologies: [
            'C# (.NET)',
            'Vanilla JavaScript',
            'HTML5',
            'CSS3',
            'WebSockets',
            'JSON'
        ],
        stats: [{
                label: 'New API Endpoints',
                value: '6'
            },
            {
                label: 'Major Features Added',
                value: '3'
            },
            {
                label: 'Performance',
                value: 'Reduced API Calls'
            },
            {
                label: 'Stability',
                value: 'Critical Bugs Fixed'
            }
        ],
        demoUrl: null
    },
    'project-two': {
        title: 'PatingGames Web Portal',
        subtitle: 'A dynamic, database-driven web application for browsing and playing browser-based games, built with PHP and MySQL.',
        image: 'img/patinggames-full.png',
        category: 'Web Development',
        date: 'September 2025',
        duration: 'University Coursework',
        client: 'Academic Project (Pamantasan ng Lungsod ng Valenzuela)',
        status: 'Completed',
        description: `PatingGames is a fully functional web portal developed as a web development exercise. Built with PHP and a MySQL backend, it allows users to browse, search, and play a variety of embedded browser games.

The platform features a dynamic homepage that loads games from the database, categorizes them for easy browsing, and includes a real-time search function. The system also includes a simple content management feature, allowing new games to be added through a web form, which handles data and image thumbnail uploads directly to the server and database. The front-end is enhanced with JavaScript for features like a persistent dark/light mode toggle and a responsive mobile navigation menu.`,
        gallery: [{

                url: 'img/patinggames-full.png',
                caption: 'Homepage Screenshot - Scroll to explore!',
                type: 'browser'
            },
            {
                url: 'img/Game-Page.png',
                caption: 'Individual game page with an embedded iframe player.',
                type: 'browser'
            },
            {
                url: 'img/Add-Game.png',
                caption: 'Admin modal for adding new games to the database.',
                type: 'browser'
            }
        ],
        features: [
            'Database-driven game library using MySQL.',
            'Dynamic rendering of game content with PHP.',
            'Game browsing by categories and a featured section.',
            'Live search functionality to filter games by title.',
            'Admin functionality to add new games, including thumbnail uploads.',
            'Individual game pages that embed games using iframes.',
            'Persistent dark/light mode theme toggle using JavaScript and browser cookies.',
            'Responsive navigation for mobile devices.'
        ],
        technologies: [
            'PHP',
            'MySQL',
            'JavaScript',
            'HTML5',
            'CSS3'
        ],
        stats: [{
                label: 'Core PHP Pages',
                value: '3'
            },
            {
                label: 'Key Features',
                value: '8'
            },
            {
                label: 'Database Tables',
                value: '1+'
            }
        ],
        links: [{
            label: 'View on GitHub',
            url: 'https://github.com/John-Pio/PatingGames',
            primary: true
        }]
    },
    'project-three': {
        title: 'ProGamer RPG',
        subtitle: 'Survival Java Programming Puzzle Game for Grade 11 ICT Students',
        image: 'img/ProGamer-Main-Menu.png',
        category: 'Game Development',
        date: 'September 2024',
        duration: '5 months',
        client: 'Gen T. De Leon National High School',
        status: 'In Development',
        description: `ProGamer RPG is an educational initiative designed to make learning programming more engaging and effective for Grade 11 ICT students. 
By blending reverse bullet hell roguelike mechanics with Java programming puzzles, the game transforms coding lessons into an interactive adventure. 
Players battle enemies using melee and ranged combat while solving real Java challenges to progress, upgrade skills, and unlock new content.

The project's mission is to bridge the gap between traditional teaching methods and the immersive world of gaming. Making programming concepts 
more accessible, intuitive, and fun. With instant feedback, skill progression, and offline play, ProGamer RPG offers a unique way to reinforce 
Java fundamentals while keeping students motivated.`,
        gallery: [{
                url: 'img/ProGamer-Combat.png',
                caption: 'Melee and ranged combat in action'
            },
            {
                url: 'img/ProGamer-Code-Challenge.png',
                caption: 'In-game Java programming puzzle'
            },
            {
                url: 'img/ProGamer-Skill-Upgrades.png',
                caption: 'Skill tree for combat and coding abilities'
            }
        ],
        features: [
            'Melee and ranged combat with enemy AI',
            'Integrated Java programming challenges for progression',
            'Skill upgrades tied to coding mastery',
            'Progressive difficulty in both combat and puzzles',
            'Instant feedback with hints and explanations',
            'Pause/resume functionality for flexible learning',
            'Optimized performance for old and new desktops',
            'Offline mode with full content access'
        ],
        technologies: [
            'Unity',
            'C#',
            'Java (puzzle engine)',
            'Aseprite',
            'Audacity',
            'Git'
        ],
        stats: [{
                label: 'Levels',
                value: '10+'
            },
            {
                label: 'Puzzle Types',
                value: '4'
            },
            {
                label: 'Skills',
                value: '5+'
            },
            {
                label: 'Assets',
                value: '300+'
            }
        ],
        links: [{
            label: 'Play on Itch.io',
            url: 'https://jalenpickford.itch.io/progamer-rpg',
            primary: true
        }],
        demoUrl: 'https://itch.io/embed-upload/12144797?color=333333'
    },
    "project-four": {
        title: "Pest Exterminator: Tabletop Game & Manual Design",
        subtitle: "An original tabletop strategy game complete with custom rules, character design, and a comprehensive instruction manual.",
        image: "img/Tabletop-Thumb.png",
        category: "Editorial Design & Game Design",
        date: "May 2025",
        duration: "2 Months",
        client: "Personal Project",
        status: "Completed",
        description: `Pest Exterminator is a cooperative tabletop game where players take on the role of an exterminator protecting food supplies from waves of pests. This project involved creating the entire game from the ground up including the core mechanics, game components, and rules.

The primary focus of this portfolio piece is the 8-page instructional manual, designed to be clear, engaging, and visually consistent with the game's theme. The challenge was to present complex rules, character stats, and setup instructions in an easily digestible format for new players. The project combines strategic game design with clean editorial layout, custom illustrations, and cohesive branding.`,

        gallery: [{
                url: "img/Tabletop-Game-Components.png",
                caption: "Overview of all game components and figures",
                type: 'browser'
            },
            {
                url: "img/Tabletop-Game-Cards.png",
                caption: "A selection of player action cards",
                type: 'browser'
            },
            {
                url: "img/Tabletop-Game-Enemies.png",
                caption: "Examples of pest enemy cards with unique stats",
                type: 'browser'
            },
            {
                url: "img/Tabletop-Game-Bosses.png",
                caption: "The miniboss illustrations and stats page",
                type: 'browser'
            }
        ],

        features: [
            "Complete 8-page manual for a tabletop game",
            "Original game concept, rules, and mechanics",
            "Custom vector illustrations for pests, bosses, and items",
            "Clear visual hierarchy and typography for enhanced readability",
            "Cohesive art style and branding across all game assets"
        ],

        technologies: ["Adobe Illustrator", "Adobe Photoshop"],

        stats: [{
                label: "Manual Pages",
                value: "8"
            },
            {
                label: "Total Components",
                value: "150+"
            },
            {
                label: "Unique Enemies",
                value: "8"
            }
        ],

        links: [{
            label: "View Full Manual (PDF)",
            url: "https://drive.google.com/file/d/1KDp7Tq7JqjtkdzvEHaSDIMwXkKbNUNEb/view?usp=sharing",
            primary: true
        }, ],

        demoUrl: null
    }
};
// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // --- Enhanced Dynamic Project Page Loader ---
    // This code runs only if we are on the project.html page with enhanced layout
    const projectHero = document.getElementById('project-hero');
    if (projectHero) {
        loadEnhancedProject();
        initializeGallery();
    }
    // --- Original Dynamic Project Page Loader ---
    // This code runs for the simple project.html layout
    const projectDetailContent = document.getElementById('project-detail-content');
    if (projectDetailContent && !projectHero) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const project = projectData[projectId];
        if (project) {
            // Update the page title
            document.title = project.title + ' - Geofrey Gapasin';
            // Create the HTML content (original simple layout)
            projectDetailContent.innerHTML = `
                <div class="page-header">
                    <h1>${ project.title }</h1>
                </div>
                
                <img src="${ project.image }" alt="${ project.title }" class="project-header-image">
                
                <div class="project-meta">
                    <div class="meta-item">
                        <h4>Category</h4>
                        <p>${ project.category }</p>
                    </div>
                    <div class="meta-item">
                        <h4>Date</h4>
                        <p>${ project.date }</p>
                    </div>
                </div>

                <div class="project-content">
                    <h2>About the Project</h2>
                    <p>${ project.description }</p>

                    <h2>Technologies Used</h2>
                    <div class="tech-tags">
                        ${ project.technologies.map(tech => `<div class="tech-tag">${ tech }</div>`).join('') }
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
    // 1. Navbar scroll effect
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
    // 2. Active Page Highlighter
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active-nav');
        }
    });
    // 3. Scroll-triggered animations for cards
    const animatedElements = document.querySelectorAll('.section-card, .contact-card, .stat-item, .portfolio-item');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    // 4. Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
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
                alert("Thank you for your message! I'll get back to you soon.");
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});
// --- Enhanced Project Loading Functions ---
function loadEnhancedProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectData[projectId];
    if (!project) {
        showProjectNotFound();
        return;
    }
    // ... (the top part of the function remains the same) ...
    document.title = project.title + ' - Geofrey Gapasin';
    const heroBg = document.getElementById('hero-bg');
    const projectTitle = document.getElementById('project-title');
    const projectSubtitle = document.getElementById('project-subtitle');
    if (heroBg) heroBg.src = project.image;
    if (heroBg) heroBg.alt = project.title;
    if (projectTitle) projectTitle.textContent = project.title;
    if (projectSubtitle) projectSubtitle.textContent = project.subtitle;
    const metaContainer = document.getElementById('project-meta-inline');
    if (metaContainer) {
        metaContainer.innerHTML = `
            <div class="meta-badge">${ project.category }</div>
            <div class="meta-badge">${ project.date }</div>
            <div class="meta-badge">${ project.status }</div>
        `;
    }
    const descriptionContainer = document.getElementById('project-description');
    if (descriptionContainer) {
        descriptionContainer.innerHTML = `
            <h2 class="section-title">About This Project</h2>
            <p style="white-space: pre-line; margin-bottom: 1.5rem; line-height: 1.7;">${ project.description }</p>
        `;
    }

    // UPDATED GALLERY LOGIC
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && project.gallery) {
        galleryGrid.innerHTML = project.gallery.map((item) => {
            // Check if the item has the special 'browser' type
            if (item.type === 'browser') {
                // If so, make the onclick call the new browser modal function
                return `
                    <div class="gallery-item" onclick="openBrowserModal('${item.url}')">
                        <img src="${item.url}" alt="${item.caption}">
                        <div class="gallery-overlay">
                            <span>${item.caption}</span>
                        </div>
                    </div>
                `;
            } else {
                // Otherwise, use the original image modal
                return `
                    <div class="gallery-item" onclick="openModal('${item.url}')">
                        <img src="${item.url}" alt="${item.caption}">
                        <div class="gallery-overlay">
                            <span>${item.caption}</span>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }
    const featuresList = document.getElementById('features-list');
    if (featuresList && project.features) {
        featuresList.innerHTML = project.features.map(feature => `
            <li>
                <div class="feature-icon">✓</div>
                <span>${ feature }</span>
            </li>
        `).join('');
    }
    const techStack = document.getElementById('tech-stack');
    if (techStack && project.technologies) {
        techStack.innerHTML = project.technologies.map(tech => `<div class="tech-tag">${ tech }</div>`).join('');
    }
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid && project.stats) {
        statsGrid.innerHTML = project.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number">${ stat.value }</div>
                <div class="stat-label">${ stat.label }</div>
            </div>
        `).join('');
    }
    const projectLinks = document.getElementById('project-links');
    if (projectLinks && project.links) {
        projectLinks.innerHTML = project.links.map(link => `
            <a href="${ link.url }" class="btn ${ link.primary ? 'btn-primary' : 'btn-secondary' }" target="_blank">
                ${ link.label }
            </a>
        `).join('');
    }
    if (project.demoUrl) {
        const demoSection = document.getElementById('demo-section');
        if (demoSection) {
            demoSection.style.display = 'block';
            const isGameProject = project.category === 'Game Development' || project.demoUrl.includes('itch.io') || project.title.toLowerCase().includes('game');
            if (isGameProject) {
                demoSection.innerHTML = `
                    <h2 class="section-title">Play the Game</h2>
                    <div class="game-play-container">
                        <div class="game-preview">
                            <img src="${ project.image }" alt="${ project.title } Preview" class="game-preview-image">
                            <div class="game-overlay">
                                <div class="play-button-container">
                                    <a href="game.html?id=${ projectId }" class="play-game-btn" target="_blank">
                                        <div class="play-icon">▶</div>
                                        <span>Play Game</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="game-description">Click to open the game in a new tab for the best experience</p>
                    </div>
                `;
            } else {
                demoSection.innerHTML = `
                    <h2 class="section-title">Live Demo</h2>
                    <iframe class="demo-iframe" src="${ project.demoUrl }" allowfullscreen></iframe>
                `;
            }
        }
    }
}

function showProjectNotFound() {
    const projectHero = document.getElementById('project-hero');
    if (projectHero) {
        projectHero.innerHTML = `
            <div class="project-hero-content" style="text-align: center;">
                <h1 class="project-title">Project Not Found</h1>
                <p class="project-subtitle">Sorry, we couldn't find the project you were looking for.</p>
                <a href="work.html" class="btn btn-primary">Return to Portfolio</a>
            </div>
        `;
    }
}

function initializeGallery() {
    // Gallery modal functionality is handled by openModal/closeModal functions
    // Close modal when clicking outside
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target.id === 'gallery-modal') {
                closeModal();
            }
        });
    }
}

function openModal(imageSrc) {

    const modal = document.getElementById('gallery-modal');

    const modalImage = document.getElementById('modal-image');

    if (modal && modalImage) {

        modalImage.src = imageSrc;

        modal.classList.add('active');

    }

}

function closeModal() {

    const modal = document.getElementById('gallery-modal');

    if (modal) {

        modal.classList.remove('active');

    }

}

window.openModal = openModal;

window.closeModal = closeModal;


const modal = document.getElementById("gameModal");

const closeBtn = document.querySelector(".close");

const gameFrame = document.getElementById("gameFrame");


function openBrowserModal(imageSrc) {
    const modal = document.getElementById('browser-modal');
    const modalImage = document.getElementById('browser-modal-image');
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.add('active');
        // Reset scroll to the top every time it's opened
        modal.querySelector('.modal-viewport').scrollTop = 0;
    }
}

function closeBrowserModal() {
    const modal = document.getElementById('browser-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Make sure these new functions are accessible globally
window.openBrowserModal = openBrowserModal;

window.closeBrowserModal = closeBrowserModal;
