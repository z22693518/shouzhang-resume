// DOM Elements
const navbar = document.getElementById('navbar');
const playBtnMain = document.querySelector('.play-btn-main');
const playBtnsSmall = document.querySelectorAll('.play-btn-small');
const galleryItems = document.querySelectorAll('.gallery-item');
const contactForm = document.getElementById('contact-form');

// Navbar scroll effect with tropical colors
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Music player functionality for tropical tracks
let isPlaying = false;
let currentTrack = null;

// Main featured track player
if (playBtnMain) {
    playBtnMain.addEventListener('click', () => {
        const icon = playBtnMain.querySelector('i');
        
        if (isPlaying && currentTrack === 'main') {
            icon.className = 'fas fa-play';
            isPlaying = false;
            currentTrack = null;
        } else {
            // Stop any other playing tracks
            resetAllPlayers();
            
            icon.className = 'fas fa-pause';
            isPlaying = true;
            currentTrack = 'main';
            
            // Add tropical pulsing effect
            playBtnMain.style.animation = 'tropicalPulse 2s ease-in-out infinite';
        }
    });
}

// Small track players
playBtnsSmall.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        
        if (isPlaying && currentTrack === `track-${index}`) {
            icon.className = 'fas fa-play';
            isPlaying = false;
            currentTrack = null;
        } else {
            resetAllPlayers();
            
            icon.className = 'fas fa-pause';
            isPlaying = true;
            currentTrack = `track-${index}`;
            
            // Add tropical glow effect
            btn.style.boxShadow = '0 0 20px rgba(0, 212, 170, 0.8)';
        }
    });
});

function resetAllPlayers() {
    // Reset main player
    if (playBtnMain) {
        const mainIcon = playBtnMain.querySelector('i');
        if (mainIcon) mainIcon.className = 'fas fa-play';
        playBtnMain.style.animation = '';
    }
    
    // Reset small players
    playBtnsSmall.forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon) icon.className = 'fas fa-play';
        btn.style.boxShadow = '';
    });
}

// Gallery hover effects with tropical animations
if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05) rotate(1deg)';
            item.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
            item.style.filter = 'brightness(1) saturate(1)';
        });
    });
}

// Contact form handling with tropical feedback
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showTropicalNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showTropicalNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission with tropical success
        showTropicalNotification('Message sent! 🌴 We\'ll get back to you soon!', 'success');
        contactForm.reset();
        
        // Add tropical celebration effect
        createTropicalCelebration();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Tropical notification system
function showTropicalNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `tropical-notification tropical-notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-palm-tree' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Tropical styling
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' 
            ? 'linear-gradient(135deg, #00d4aa, #00bcd4)' 
            : type === 'error' 
            ? 'linear-gradient(135deg, #ff5722, #e91e63)' 
            : 'linear-gradient(135deg, #00bcd4, #0288d1)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 212, 170, 0.3);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Tropical animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remove with tropical animation
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Tropical celebration effect
function createTropicalCelebration() {
    const colors = ['#00d4aa', '#ffd23f', '#ff6b35', '#00bcd4'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: tropicalBurst 2s ease-out forwards;
            `;
            
            const angle = (i * 24) * (Math.PI / 180);
            const velocity = 200 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--vx', `${vx}px`);
            particle.style.setProperty('--vy', `${vy}px`);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }, i * 50);
    }
}

// Add tropical burst animation
const tropicalStyle = document.createElement('style');
tropicalStyle.textContent = `
    @keyframes tropicalBurst {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--vx)), calc(-50% + var(--vy))) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes tropicalPulse {
        0%, 100% {
            box-shadow: 0 5px 20px rgba(0, 212, 170, 0.4);
            transform: scale(1);
        }
        50% {
            box-shadow: 0 10px 40px rgba(255, 210, 63, 0.6);
            transform: scale(1.05);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;
document.head.appendChild(tropicalStyle);

// Intersection Observer for scroll animations with tropical timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const tropicalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('tropical-animate-in');
        }
    });
}, observerOptions);

// Observe elements for tropical animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.featured-track, .track-item, .show-card, .gallery-item, .contact-card, .contact-form, .achievement'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`;
        tropicalObserver.observe(el);
    });
});

// Add tropical animation styles
const tropicalAnimationStyle = document.createElement('style');
tropicalAnimationStyle.textContent = `
    .tropical-animate-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
    
    .show-card:hover {
        animation: tropicalFloat 3s ease-in-out infinite;
    }
    
    @keyframes tropicalFloat {
        0%, 100% {
            transform: translateY(-10px) rotateZ(0deg);
        }
        50% {
            transform: translateY(-15px) rotateZ(1deg);
        }
    }
    
    .gallery-item:hover {
        animation: tropicalGlow 2s ease-in-out infinite;
    }
    
    @keyframes tropicalGlow {
        0%, 100% {
            filter: brightness(1.1) saturate(1.2) hue-rotate(0deg);
        }
        50% {
            filter: brightness(1.3) saturate(1.4) hue-rotate(10deg);
        }
    }
`;
document.head.appendChild(tropicalAnimationStyle);

// Dynamic tropical particles background
function createTropicalParticle() {
    const particle = document.createElement('div');
    particle.className = 'tropical-particle';
    
    const size = Math.random() * 30 + 10;
    const startX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 15 + 20;
    const colors = ['rgba(0, 212, 170, 0.3)', 'rgba(255, 210, 63, 0.3)', 'rgba(255, 107, 53, 0.3)', 'rgba(0, 188, 212, 0.3)'];
    
    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${startX}px;
        bottom: -${size}px;
        pointer-events: none;
        z-index: 1;
        animation: tropicalFloatUp ${animationDuration}s linear infinite;
        box-shadow: 0 0 20px currentColor;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, animationDuration * 1000);
}

// Add tropical particle animation
const tropicalParticleStyle = document.createElement('style');
tropicalParticleStyle.textContent = `
    @keyframes tropicalFloatUp {
        0% {
            transform: translateY(0) rotate(0deg) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
            transform: scale(1);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(tropicalParticleStyle);

// Create tropical particles periodically
setInterval(createTropicalParticle, 4000);

// Parallax effect for tropical elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const tropicalElements = document.querySelectorAll('.palm, .element');
    
    tropicalElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.02);
        const rotation = scrolled * 0.05;
        if (element && element.style) {
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
        }
    });
    
    // Tropical gradient shift on scroll
    const hero = document.querySelector('.hero-video-bg');
    if (hero) {
        const shift = (scrolled * 0.1) % 100;
        hero.style.backgroundPosition = `${shift}% 50%`;
    }
});

// Enhanced hover effects for tropical elements
document.addEventListener('DOMContentLoaded', () => {
    // Tropical show cards
    document.querySelectorAll('.show-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02) rotate(1deg)';
            card.style.boxShadow = '0 25px 50px rgba(0, 212, 170, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Tropical track items
    document.querySelectorAll('.track-item').forEach(track => {
        track.addEventListener('mouseenter', () => {
            track.style.background = 'linear-gradient(135deg, rgba(0, 212, 170, 0.2) 0%, rgba(255, 210, 63, 0.1) 100%)';
            track.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        track.addEventListener('mouseleave', () => {
            track.style.background = 'rgba(255, 255, 255, 0.05)';
            track.style.transform = 'translateX(0) scale(1)';
        });
    });
});

// Stats counter animation with tropical effects
function animateTropicalCounter(element, target, duration = 2500) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
            // Add tropical glow when complete
            element.style.textShadow = '0 0 20px rgba(255, 210, 63, 0.8)';
            setTimeout(() => {
                element.style.textShadow = '';
            }, 1000);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger tropical counter animation
const tropicalStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.number');
            statNumbers.forEach((stat, index) => {
                const target = parseInt(stat.textContent);
                stat.textContent = '0';
                setTimeout(() => {
                    animateTropicalCounter(stat, target);
                }, index * 200);
            });
            tropicalStatsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
        tropicalStatsObserver.observe(achievementsSection);
    }
});

// Mobile menu toggle with tropical animations
function createTropicalMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768 && navContainer && navMenu) {
        let menuToggle = document.querySelector('.tropical-mobile-menu-toggle');
        
        if (!menuToggle) {
            menuToggle = document.createElement('button');
            menuToggle.className = 'tropical-mobile-menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            menuToggle.style.cssText = `
                background: linear-gradient(135deg, #00d4aa, #00bcd4);
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(0, 212, 170, 0.3);
            `;
            
            navContainer.appendChild(menuToggle);
            
            menuToggle.addEventListener('click', () => {
                const isOpen = navMenu.style.display === 'flex';
                
                if (isOpen) {
                    navMenu.style.display = 'none';
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    menuToggle.style.transform = 'rotate(0deg)';
                } else {
                    navMenu.style.display = 'flex';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.width = '100%';
                    navMenu.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 212, 170, 0.1))';
                    navMenu.style.padding = '2rem';
                    navMenu.style.backdropFilter = 'blur(20px)';
                    navMenu.style.borderRadius = '0 0 20px 20px';
                    navMenu.style.border = '1px solid rgba(0, 212, 170, 0.3)';
                    
                    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                    menuToggle.style.transform = 'rotate(180deg)';
                }
            });
            
            menuToggle.addEventListener('mouseenter', () => {
                menuToggle.style.transform += ' scale(1.1)';
                menuToggle.style.boxShadow = '0 10px 25px rgba(0, 212, 170, 0.5)';
            });
            
            menuToggle.addEventListener('mouseleave', () => {
                const isOpen = navMenu.style.display === 'flex';
                menuToggle.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                menuToggle.style.boxShadow = '0 5px 15px rgba(0, 212, 170, 0.3)';
            });
        }
    }
}

// Initialize tropical mobile menu
window.addEventListener('resize', createTropicalMobileMenu);
document.addEventListener('DOMContentLoaded', createTropicalMobileMenu);

// Tropical page loader
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'tropical-page-loader';
    loader.innerHTML = `
        <div class="tropical-loader-content">
            <div class="tropical-loader-logo">
                <i class="fas fa-palm-tree"></i>
                <span>DJ SHOU</span>
            </div>
            <div class="tropical-loader-text">Loading tropical vibes...</div>
            <div class="tropical-loader-bar">
                <div class="tropical-loader-progress"></div>
            </div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #00d4aa, #ffd23f, #ff6b35, #00bcd4);
        background-size: 400% 400%;
        animation: gradientShift 3s ease-in-out infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.8s ease;
    `;
    
    const tropicalLoaderStyle = document.createElement('style');
    tropicalLoaderStyle.textContent = `
        .tropical-loader-content {
            text-align: center;
            color: white;
        }
        
        .tropical-loader-logo {
            font-size: 3rem;
            font-weight: 900;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            animation: tropicalBounce 2s ease-in-out infinite;
        }
        
        .tropical-loader-logo i {
            animation: tropicalSway 3s ease-in-out infinite;
        }
        
        .tropical-loader-text {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .tropical-loader-bar {
            width: 300px;
            height: 6px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
            overflow: hidden;
            margin: 0 auto;
        }
        
        .tropical-loader-progress {
            height: 100%;
            background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8));
            border-radius: 3px;
            animation: tropicalLoading 3s ease-in-out;
        }
        
        @keyframes tropicalBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes tropicalSway {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
        }
        
        @keyframes tropicalLoading {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(tropicalLoaderStyle);
    
    document.body.appendChild(loader);
    
    // Remove loader with tropical fade
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 800);
    }, 3500);
});

console.log('🌴 DJ SHOU Tropical Portfolio - All tropical features loaded! 🎵');