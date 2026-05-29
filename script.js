const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');

    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
    mobileMenuBtn.classList.toggle('menu-open', isOpen);
    mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');

        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
        mobileMenuBtn.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
    });
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category') || '';
            const shouldShow = filterValue === 'all' || categories.includes(filterValue);

            if (shouldShow) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(12px)';
                setTimeout(() => item.classList.add('hidden'), 250);
            }
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 76,
                behavior: 'smooth'
            });
        }
    });
});

portfolioItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.08}s`;
});

const animateCounter = (element, target, suffix, duration = 1600) => {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;

        if (start < target) {
            element.textContent = `${Math.floor(start)}${suffix}`;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = `${target}${suffix}`;
        }
    };

    updateCounter();
};

const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');

            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent.trim();
            const targetValue = parseInt(text, 10);
            const suffix = text.includes('%') ? '%' : text.includes('+') ? '+' : '';

            if (!Number.isNaN(targetValue)) {
                animateCounter(number, targetValue, suffix);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => statObserver.observe(card));

const heroBackground = document.querySelector('.hero-background img');

window.addEventListener('scroll', () => {
    if (heroBackground && window.innerWidth > 768) {
        heroBackground.style.transform = `scale(1.03) translateY(${window.pageYOffset * 0.12}px)`;
    }
});

console.log('Ananya Construction website loaded successfully.');
