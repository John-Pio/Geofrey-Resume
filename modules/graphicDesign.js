// ─── Ad Creatives ─────────────────────────────────────────────────────────────

const _htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => _htmlEscapeMap[character]);
}

function buildAdMetricMarkup(item) {
    const metrics = [];

    if (item.reactions) {
        metrics.push(`<span>${escapeHtml(item.reactions)} reactions</span>`);
    }
    if (item.comments) {
        metrics.push(`<span>${escapeHtml(item.comments)} comments</span>`);
    }
    if (item.shares) {
        metrics.push(`<span>${escapeHtml(item.shares)} shares</span>`);
    }

    return metrics.join('');
}

function createAdFeedPreviewMarkup(item, options = {}) {
    const safeSrc = encodeURI(item.src);
    const title = item.title || 'Ad Creative';
    const pageName = item.pageName || title;
    const avatar = item.avatar || pageName.charAt(0).toUpperCase();
    const copy = item.copy || 'Sponsored placement preview.';
    const headline = item.headline || title;
    const domain = item.domain || 'yourbrand.com';
    const cta = item.cta || 'Learn More';
    const accent = item.accent || '#66BB6A';
    const previewClass = options.compact ? 'ad-feed-preview ad-feed-preview-compact' : 'ad-feed-preview ad-feed-preview-expanded';
    const badgeLabel = options.compact ? 'Feed Preview' : 'Placement Preview';
    const metrics = buildAdMetricMarkup(item);

    return `
        <span class="${previewClass}" style="--ad-accent:${escapeHtml(accent)};">
            <span class="ad-feed-header">
                <span class="ad-feed-avatar" aria-hidden="true">${escapeHtml(avatar)}</span>
                <span class="ad-feed-meta">
                    <span class="ad-feed-page">${escapeHtml(pageName)}</span>
                    <span class="ad-feed-sponsored">Sponsored placement</span>
                </span>
                <span class="ad-feed-badge">${badgeLabel}</span>
            </span>
            <span class="ad-feed-copy">${escapeHtml(copy)}</span>
            <span class="ad-feed-media">
                <img src="${safeSrc}" alt="${escapeHtml(title)} feed preview" loading="${options.compact ? 'lazy' : 'eager'}">
            </span>
            <span class="ad-feed-link-block">
                <span class="ad-feed-domain">${escapeHtml(domain)}</span>
                <span class="ad-feed-link-row">
                    <span class="ad-feed-headline">${escapeHtml(headline)}</span>
                    <span class="ad-feed-cta">${escapeHtml(cta)}</span>
                </span>
            </span>
            ${metrics ? `<span class="ad-feed-engagement">${metrics}</span>` : ''}
        </span>
    `;
}

function renderAdCreativeGrid(grid) {
    grid.innerHTML = adCreativeData.map((item, index) => {
        const title = item.title || `Ad Creative ${index + 1}`;
        return `
            <button
                class="ad-creative-card ad-feed-card"
                type="button"
                data-index="${index}"
                aria-label="Open ${escapeHtml(title)} preview"
            >
                ${createAdFeedPreviewMarkup(item, { compact: true })}
                <span class="ad-creative-meta">
                    <span class="ad-creative-meta-copy">
                        <span class="ad-creative-title">${escapeHtml(title)}</span>
                        <span class="ad-creative-detail">Feed-style placement mockup plus the raw exported creative.</span>
                    </span>
                    <span class="ad-creative-chip">Open</span>
                </span>
            </button>
        `;
    }).join('');

    grid.querySelectorAll('.ad-creative-card').forEach(card => {
        card.addEventListener('click', () => {
            openAdZoomModal(Number(card.dataset.index));
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

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeAdZoomModal();
        }
    });

    zoomRange.addEventListener('input', () => {
        updateAdZoom(parseFloat(zoomRange.value));
    });

    modal.querySelectorAll('.zoom-btn').forEach(button => {
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

function openAdZoomModal(itemIndex) {
    const item = adCreativeData[itemIndex];
    const modal = document.getElementById('ad-zoom-modal');
    const image = document.getElementById('ad-zoom-image');
    const titleElement = document.getElementById('ad-zoom-title');
    const previewContainer = document.getElementById('ad-preview-card-container');
    const zoomRange = document.getElementById('ad-zoom-range');

    if (!item || !modal || !image || !zoomRange) return;

    const safeTitle = item.title || 'Ad Creative';
    image.src = encodeURI(item.src);
    image.alt = `${safeTitle} raw creative`;
    if (titleElement) {
        titleElement.textContent = safeTitle;
    }
    if (previewContainer) {
        previewContainer.innerHTML = createAdFeedPreviewMarkup(item, { compact: false });
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
        image.style.transform = `scale(${value})`;
    }
    if (zoomValue) {
        zoomValue.textContent = `${Math.round(value * 100)}%`;
    }
}

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

    modal.querySelectorAll('.color-button').forEach(button => {
        button.addEventListener('click', () => {
            _apparelColor = button.dataset.color;
            const name = button.dataset.name || '';
            _applyApparelColor();
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
