// ─── Navbar ───────────────────────────────────────────────────────────────────

function initializeNavbar() {
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
}

// ─── Active Page Highlighter ──────────────────────────────────────────────────

function initializeActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active-nav');
        }
    });
}

// ─── Scroll-triggered Animations ─────────────────────────────────────────────

function initializeScrollAnimations() {
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
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function initializeContactForm() {
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
}
