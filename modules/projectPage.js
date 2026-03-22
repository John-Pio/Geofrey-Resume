// ─── Project Detail Page ──────────────────────────────────────────────────────

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

// ─── Legacy Project Detail Loader ─────────────────────────────────────────────

function loadLegacyProject() {
    const projectDetailContent = document.getElementById('project-detail-content');
    if (!projectDetailContent) return;

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

// ─── Gallery Modals ───────────────────────────────────────────────────────────

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
