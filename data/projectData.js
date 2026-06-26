const projectData = {
    'project-one': {
        title: 'CafeVox: Discovery Platform & Profile System',
        subtitle: 'A major feature enhancement for an AI chat application, introducing a complete discovery system, public/private user profiles, and a significant UI/UX overhaul.',
        image: 'img/cafe-vox-platform.png',
        category: 'Full-Stack Development',
        date: 'September 2025',
        duration: 'Several Weeks',
        client: 'Personal Project',
        status: 'Completed',
        description: `This project represents a major milestone in CafeVox's evolution, transforming it from a simple character chat tool into a comprehensive discovery and social platform. The work involved architecting and implementing a full-stack solution for content discovery, user profiles, and character showcases.

    The primary challenge was integrating these complex features seamlessly into the existing single-page application, enhancing user engagement without disrupting core functionality. This overhaul successfully laid the foundation for future analytics, social interactions, and advanced content management, significantly increasing the platform's value.`,
        gallery: [{
            url: 'img/cafe-vox-explore-page.png',
            caption: 'Redesigned Explore & Discovery page with dynamic content sections'
        },
            {
                url: 'img/cafe-vox-public-profile.png',
                caption: 'Public user profile page with character showcase and sharing'
            },
            {
                url: 'img/cafe-vox-character-details.png',
                caption: 'Dedicated character detail view with clean layout and stats'
            },
            {
                url: 'img/cafe-vox-mobile-view.png',
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
        image: 'img/pating-games-homepage.png',
        category: 'Web Development',
        date: 'September 2025',
        duration: 'University Coursework',
        client: 'Academic Project (Pamantasan ng Lungsod ng Valenzuela)',
        status: 'Completed',
        description: `PatingGames is a fully functional web portal developed as a web development exercise. Built with PHP and a MySQL backend, it allows users to browse, search, and play a variety of embedded browser games.

The platform features a dynamic homepage that loads games from the database, categorizes them for easy browsing, and includes a real-time search function. The system also includes a simple content management feature, allowing new games to be added through a web form, which handles data and image thumbnail uploads directly to the server and database. The front-end is enhanced with JavaScript for features like a persistent dark/light mode toggle and a responsive mobile navigation menu.`,
        gallery: [{

            url: 'img/pating-games-homepage.png',
            caption: 'Homepage Screenshot - Scroll to explore!',
            type: 'browser'
        },
            {
                url: 'img/pating-games-play-page.png',
                caption: 'Individual game page with an embedded iframe player.',
                type: 'browser'
            },
            {
                url: 'img/pating-games-add-game-modal.png',
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
        image: 'img/progamer-rpg-main-menu.png',
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
            url: 'img/progamer-rpg-combat.png',
            caption: 'Melee and ranged combat in action'
        },
            {
                url: 'img/progamer-rpg-code-challenge.png',
                caption: 'In-game Java programming puzzle'
            },
            {
                url: 'img/progamer-rpg-skill-upgrades.png',
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
        image: "img/pest-exterminator-tabletop-thumbnail.png",
        category: "Editorial Design & Game Design",
        date: "May 2025",
        duration: "2 Months",
        client: "Personal Project",
        status: "Completed",
        description: `Pest Exterminator is a cooperative tabletop game where players take on the role of an exterminator protecting food supplies from waves of pests. This project involved creating the entire game from the ground up including the core mechanics, game components, and rules.

The primary focus of this portfolio piece is the 8-page instructional manual, designed to be clear, engaging, and visually consistent with the game's theme. The challenge was to present complex rules, character stats, and setup instructions in an easily digestible format for new players. The project combines strategic game design with clean editorial layout, custom illustrations, and cohesive branding.`,

        gallery: [{
            url: "img/pest-exterminator-game-components.png",
            caption: "Overview of all game components and figures",
            type: 'browser'
        },
            {
                url: "img/pest-exterminator-game-cards.png",
                caption: "A selection of player action cards",
                type: 'browser'
            },
            {
                url: "img/pest-exterminator-game-enemies.png",
                caption: "Examples of pest enemy cards with unique stats",
                type: 'browser'
            },
            {
                url: "img/pest-exterminator-game-bosses.png",
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
        image: "img/lead-gen-landing-thumbnail.png",
        category: "Full-Stack Development",
        date: "October 2025",
        duration: "2 Weeks",
        client: "Personal Project",
        status: "Completed",
        description: `A comprehensive full-stack lead-generation landing page built to demonstrate modern web development skills. The platform combines a sleek fintech-themed frontend with a robust Laravel backend, featuring an intelligent quiz system, bulk user registration from Excel files, and a powerful admin dashboard.

The project showcases the ability to architect and implement complex systems from conception to deployment, including database design, API development, authentication flows, and frontend-backend integration. The dark hacker aesthetic with neon green accents creates an engaging user experience while the efficient backend ensures scalability and performance.

Key achievements include implementing real-time data validation, secure bulk operations, and detailed success/failure reporting systems that provide actionable feedback to administrators.`,
        gallery: [{
            url: "img/lead-gen-landing-page.png",
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
                url: "img/lead-gen-quiz-step.png",
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
