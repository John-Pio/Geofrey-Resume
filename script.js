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
    },
    "project-five": {
        title: "Lead Generation Landing Page",
        subtitle: "Full-stack lead-generation platform with integrated quiz system, bulk user registration, and admin dashboard.",
        image: "img/lead-gen-thumbnail.png",
        category: "Full-Stack Development",
        date: "October 2025",
        duration: "2 Weeks",
        client: "Personal Project",
        status: "Completed",
        description: `A comprehensive full-stack lead-generation landing page built to demonstrate modern web development skills. The platform combines a sleek fintech-themed frontend with a robust Laravel backend, featuring an intelligent quiz system, bulk user registration from Excel files, and a powerful admin dashboard.

The project showcases the ability to architect and implement complex systems from conception to deployment, including database design, API development, authentication flows, and frontend-backend integration. The dark hacker aesthetic with neon green accents creates an engaging user experience while the efficient backend ensures scalability and performance.

Key achievements include implementing real-time data validation, secure bulk operations, and detailed success/failure reporting systems that provide actionable feedback to administrators.`,
        gallery: [{
            url: "img/lead-gen-landing.png",
            caption: "Landing page with multi-step quiz interface",
            type: 'browser'
        },
            {
                url: "img/lead-gen-admin-dashboard.png",
                caption: "Admin dashboard with leads management and statistics",
                type: 'browser'
            },
            {
                url: "img/lead-gen-bulk-registration.png",
                caption: "Bulk user registration with Excel parsing and validation",
                type: 'browser'
            },
            {
                url: "img/lead-gen-quiz.png",
                caption: "Interactive multi-step quiz with progress tracking",
                type: 'browser'
            }
        ],
        features: [
            "Multi-step interactive quiz with real-time validation",
            "Excel file upload and parsing with SheetJS",
            "Editable preview table with row-by-row validation feedback",
            "Duplicate detection for emails and usernames (frontend and database)",
            "Bulk user registration with automatic password generation",
            "Secure admin authentication with Laravel Sanctum tokens",
            "Protected routes and role-based access control",
            "Real-time lead statistics and dashboard analytics",
            "Detailed success/failure reporting for bulk operations",
            "Responsive dark fintech theme with neon accents",
            "Database duplicate checking and conflict resolution",
            "User CRUD operations with extended registration fields"
        ],
        technologies: [
            "React 18",
            "React Router DOM",
            "Laravel 12",
            "PHP 8.2",
            "MySQL 8.0",
            "Laravel Sanctum",
            "SheetJS (XLSX)",
            "JavaScript ES6+",
            "CSS3"
        ],
        stats: [{
            label: "API Endpoints",
            value: "10+"
        },
            {
                label: "React Components",
                value: "4"
            },
            {
                label: "Database Tables",
                value: "4"
            },
            {
                label: "Lines of Code",
                value: "2000+"
            }
        ],
        demoUrl: null
    }
};

const adCreativeData = [
    {
        title: 'Ad Creative',
        src: 'img/GraphicPortfolio/Ad Creative/ad.png'
    },
    {
        title: 'Dress 1',
        src: 'img/GraphicPortfolio/Ad Creative/Dress 1.png'
    },
    {
        title: 'Sneaker 1',
        src: 'img/GraphicPortfolio/Ad Creative/Sneaker 1 new.png'
    },
    {
        title: 'Shoe 2',
        src: 'img/GraphicPortfolio/Ad Creative/Shoe 2 new.png'
    },
    {
        title: 'Shoe 4',
        src: 'img/GraphicPortfolio/Ad Creative/Shoe 4.png'
    },
    {
        title: 'Faux Article',
        src: 'img/GraphicPortfolio/Ad Creative/Faux Article.png'
    },
    {
        title: 'Phone',
        src: 'img/GraphicPortfolio/Ad Creative/Phone.png'
    },
    {
        title: 'Teeth',
        src: 'img/GraphicPortfolio/Ad Creative/Teeth.png'
    }
];

const apparelData = [
    { title: 'Awesome Copy',          src: 'img/GraphicPortfolio/Transparent/Awesome copy.png' },
    { title: 'Awesome Preview',       src: 'img/GraphicPortfolio/Transparent/Awesome_Preview.png' },
    { title: 'Brief Affirmation',     src: 'img/GraphicPortfolio/Transparent/BriefAffirmation Transparent shadow.png' },
    { title: 'Fantastic',             src: 'img/GraphicPortfolio/Transparent/Fantastic.png' },
    { title: 'Fishing Time',          src: 'img/GraphicPortfolio/Transparent/FishingTime.png' },
    { title: 'Happy Sun',             src: 'img/GraphicPortfolio/Transparent/HappySun Transparent.png' },
    { title: 'Nice',                  src: 'img/GraphicPortfolio/Transparent/Nice.png' },
    { title: 'Pastel Sunset',         src: 'img/GraphicPortfolio/Transparent/Pastel Sunset.png' },
    { title: 'Shrimp Fried Rice',     src: 'img/GraphicPortfolio/Transparent/Shrimp Fried Rice.png' },
    { title: 'Vintage Sarcasm',       src: 'img/GraphicPortfolio/Transparent/VintageSarcasm transparent2.png' },
    { title: 'aRIEEES',               src: 'img/GraphicPortfolio/Transparent/aRIEEES.png' },
    { title: 'Believer',              src: 'img/GraphicPortfolio/Transparent/believer 2.png' },
    { title: 'Tralalelo Tralala',     src: 'img/GraphicPortfolio/Transparent/tralalelo tralala.png' }
];

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // --- Enhanced Dynamic Project Page Loader ---
    const projectHero = document.getElementById('project-hero');
    if (projectHero) {
        loadEnhancedProject();
        initializeGallery();
    }
    // --- Graphic Design: Ad Creatives ---
    const adCreativeGrid = document.getElementById('ad-creative-grid');
    if (adCreativeGrid) {
        renderAdCreativeGrid(adCreativeGrid);
        initializeAdZoomModal();
    }
    // --- Graphic Design: Apparel / Transparent Designs ---
    const apparelGrid = document.getElementById('apparel-grid');
    if (apparelGrid) {
        renderApparelGrid(apparelGrid);
        initializeApparelModal();
    }
    // --- Original Dynamic Project Page Loader ---
    const projectDetailContent = document.getElementById('project-detail-content');
    if (projectDetailContent && !projectHero) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const project = projectData[projectId];
        if (project) {
            document.title = project.title + ' - Geofrey Gapasin';
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
            projectDetailContent.innerHTML = `
                <div class="page-header">
                    <h1>Project Not Found</h1>
                    <p>Sorry, we couldn't find the project you were looking for.</p>
                    <a href="work.html" class="btn btn-primary">Return to Portfolio</a>
                </div>
            `;
        }
    }
    // Navbar scroll effect
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
    // Active Page Highlighter
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active-nav');
        }
    });
    // Scroll-triggered animations for cards
    const animatedElements = document.querySelectorAll('.section-card, .contact-card, .stat-item, .portfolio-item, .ad-creative-card');
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
    // Contact Form Logic
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
            setTimeout(() => {
                alert("Thank you for your message! I'll get back to you soon.");
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

function renderAdCreativeGrid(grid) {
    grid.innerHTML = adCreativeData.map((item, index) => {
        const safeSrc = encodeURI(item.src);
        const title = item.title || `Ad Creative ${ index + 1 }`;
        return `
            <button class="ad-creative-card" type="button" data-src="${ safeSrc }" data-title="${ title }">
                <span class="ad-creative-image">
                    <img src="${ safeSrc }" alt="${ title } ad creative" loading="lazy">
                </span>
                <span class="ad-creative-meta">
                    <span class="ad-creative-title">${ title }</span>
                </span>
            </button>
        `;
    }).join('');

    const cards = grid.querySelectorAll('.ad-creative-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            openAdZoomModal(card.dataset.src, card.dataset.title);
        });
    });
}

function initializeAdZoomModal() {
    const modal = document.getElementById('ad-zoom-modal');
    const zoomRange = document.getElementById('ad-zoom-range');
    if (!modal || !zoomRange) return;

    modal.addEventListener('click', event => {
        if (event.target.id === 'ad-zoom-modal') {
            closeAdZoomModal();
        }
    });

    zoomRange.addEventListener('input', () => {
        updateAdZoom(parseFloat(zoomRange.value));
    });

    const zoomButtons = modal.querySelectorAll('.zoom-btn');
    zoomButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.dataset.zoom;
            const step = 0.1;
            const min = parseFloat(zoomRange.min);
            const max = parseFloat(zoomRange.max);
            let nextValue = parseFloat(zoomRange.value) + (direction === 'in' ? step : -step);
            nextValue = Math.max(min, Math.min(max, nextValue));
            zoomRange.value = nextValue.toFixed(1);
            updateAdZoom(nextValue);
        });
    });
}

function openAdZoomModal(imageSrc, title) {
    const modal = document.getElementById('ad-zoom-modal');
    const image = document.getElementById('ad-zoom-image');
    const titleElement = document.getElementById('ad-zoom-title');
    const zoomRange = document.getElementById('ad-zoom-range');

    if (!modal || !image || !zoomRange) return;

    const safeTitle = title || 'Ad Creative';
    image.src = imageSrc;
    image.alt = `${ safeTitle } ad creative`;
    if (titleElement) {
        titleElement.textContent = safeTitle;
    }

    zoomRange.value = '1';
    updateAdZoom(1);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAdZoomModal() {
    const modal = document.getElementById('ad-zoom-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

function updateAdZoom(value) {
    const image = document.getElementById('ad-zoom-image');
    const zoomValue = document.getElementById('ad-zoom-value');
    if (image) {
        image.style.transform = `scale(${ value })`;
    }
    if (zoomValue) {
        zoomValue.textContent = `${ Math.round(value * 100) }%`;
    }
}

function loadEnhancedProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectData[projectId];
    if (!project) {
        showProjectNotFound();
        return;
    }
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

    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && project.gallery) {
        galleryGrid.innerHTML = project.gallery.map((item) => {
            if (item.type === 'browser') {
                return `
                    <div class="gallery-item" onclick="openBrowserModal('${item.url}')">
                        <img src="${item.url}" alt="${item.caption}">
                        <div class="gallery-overlay">
                            <span>${item.caption}</span>
                        </div>
                    </div>
                `;
            } else {
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

function openBrowserModal(imageSrc) {
    const modal = document.getElementById('browser-modal');
    const modalImage = document.getElementById('browser-modal-image');
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.add('active');
        modal.querySelector('.modal-viewport').scrollTop = 0;
    }
}

function closeBrowserModal() {
    const modal = document.getElementById('browser-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.openBrowserModal = openBrowserModal;
window.closeBrowserModal = closeBrowserModal;

window.openAdZoomModal = openAdZoomModal;
window.closeAdZoomModal = closeAdZoomModal;

// ─── Apparel / Transparent Designs ────────────────────────────────────────────

function renderApparelGrid(grid) {
    grid.innerHTML = apparelData.map((item, index) => {
        const safeSrc = encodeURI(item.src);
        const title = item.title || `Design ${index + 1}`;
        return `
            <button class="ad-creative-card apparel-card" type="button" data-src="${safeSrc}" data-title="${title}">
                <span class="ad-creative-image apparel-thumb">
                    <img src="${safeSrc}" alt="${title} apparel design" loading="lazy">
                </span>
                <span class="ad-creative-meta">
                    <span class="ad-creative-title">${title}</span>
                </span>
            </button>
        `;
    }).join('');

    grid.querySelectorAll('.apparel-card').forEach(card => {
        card.addEventListener('click', () => {
            openApparelModal(card.dataset.src, card.dataset.title);
        });
    });
}

let _apparelColor = '#f5f0e0';

function initializeApparelModal() {
    const modal = document.getElementById('apparel-modal');
    const zoomRange = document.getElementById('apparel-zoom-range');
    if (!modal || !zoomRange) return;

    // Close on backdrop click
    modal.addEventListener('click', e => {
        if (e.target.id === 'apparel-modal') closeApparelModal();
    });

    zoomRange.addEventListener('input', () => {
        updateApparelZoom(parseFloat(zoomRange.value));
    });

    const zoomButtons = modal.querySelectorAll('.zoom-btn');
    zoomButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.dataset.zoom;
            const step = 0.1;
            const min = parseFloat(zoomRange.min);
            const max = parseFloat(zoomRange.max);
            let nextValue = parseFloat(zoomRange.value) + (direction === 'in' ? step : -step);
            nextValue = Math.max(min, Math.min(max, nextValue));
            zoomRange.value = nextValue.toFixed(1);
            updateApparelZoom(nextValue);
        });
    });

    // Color buttons
    modal.querySelectorAll('.color-button').forEach(button => {
        button.addEventListener('click', () => {
            _apparelColor = button.dataset.color;
            const name = button.dataset.name || '';
            _applyApparelColor();
            // Update active state
            modal.querySelectorAll('.color-button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            const nameEl = document.getElementById('apparel-color-name');
            if (nameEl) nameEl.textContent = name;
        });
    });
}

function openApparelModal(imageSrc, title) {
    const modal = document.getElementById('apparel-modal');
    const image = document.getElementById('apparel-zoom-image');
    const titleEl = document.getElementById('apparel-zoom-title');
    const zoomRange = document.getElementById('apparel-zoom-range');
    if (!modal || !image) return;

    image.src = imageSrc;
    image.alt = `${title || 'Design'} apparel preview`;
    if (titleEl) titleEl.textContent = title || 'Design';

    if (zoomRange) {
        zoomRange.value = '1';
        updateApparelZoom(1);
    }

    // Pre-select Beige
    _apparelColor = '#f5f0e0';
    _applyApparelColor();
    modal.querySelectorAll('.color-button').forEach(b => b.classList.remove('active'));
    const beigeButton = modal.querySelector('.color-button[data-color="#f5f0e0"]');
    if (beigeButton) beigeButton.classList.add('active');
    const nameEl = document.getElementById('apparel-color-name');
    if (nameEl) nameEl.textContent = 'Beige/Cream';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeApparelModal() {
    const modal = document.getElementById('apparel-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateApparelZoom(value) {
    const image = document.getElementById('apparel-zoom-image');
    const zoomValue = document.getElementById('apparel-zoom-value');
    if (image) {
        image.style.transform = `scale(${value})`;
    }
    if (zoomValue) {
        zoomValue.textContent = `${Math.round(value * 100)}%`;
    }
}

function _applyApparelColor() {
    const area = document.getElementById('apparel-preview-area');
    if (area) area.style.backgroundColor = _apparelColor;
}

window.openApparelModal = openApparelModal;
window.closeApparelModal = closeApparelModal;
