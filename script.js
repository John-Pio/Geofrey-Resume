// ─── Entry Point ──────────────────────────────────────────────────────────────
// All logic lives in the modules below. This file just wires everything up
// on DOMContentLoaded.
//
// Required script load order in your HTML (before this file, as needed by the page):
//   <script src="data/projectData.js"></script>
//   <script src="data/graphicData.js"></script>
//   <script src="modules/projectPage.js"></script>
//   <script src="modules/graphicDesign.js"></script>
//   <script src="ui.js"></script>
//   <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', () => {

    // --- Enhanced Dynamic Project Page Loader ---
    const projectHero = document.getElementById('project-hero');
    if (projectHero && typeof loadEnhancedProject === 'function' && typeof initializeGallery === 'function') {
        loadEnhancedProject();
        initializeGallery();
    }

    // --- Original / Legacy Project Page Loader ---
    const projectDetailContent = document.getElementById('project-detail-content');
    if (projectDetailContent && !projectHero && typeof loadLegacyProject === 'function') {
        loadLegacyProject();
    }

    // --- Graphic Design: Ad Creatives ---
    const adCreativeGrid = document.getElementById('ad-creative-grid');
    if (adCreativeGrid && typeof renderAdCreativeGrid === 'function' && typeof initializeAdZoomModal === 'function') {
        renderAdCreativeGrid(adCreativeGrid);
        initializeAdZoomModal();
    }

    // --- Graphic Design: Apparel / Transparent Designs ---
    const apparelGrid = document.getElementById('apparel-grid');
    if (apparelGrid && typeof renderApparelGrid === 'function' && typeof initializeApparelModal === 'function') {
        renderApparelGrid(apparelGrid);
        initializeApparelModal();
    }

    // --- UI ---
    if (typeof initializeNavbar === 'function') initializeNavbar();
    if (typeof initializeActiveNav === 'function') initializeActiveNav();
    if (typeof initializeScrollAnimations === 'function') initializeScrollAnimations();
    if (typeof initializeContactForm === 'function') initializeContactForm();
});
