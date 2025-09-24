// Gothic Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('gothicLoader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }, 3500);
    
    // Initialize skill bars animation
    initializeSkillBars();
});

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

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
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Gothic Particles Animation
function createGothicParticle() {
    const particlesContainer = document.getElementById('gothicParticles');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: ${Math.random() > 0.5 ? '#c0c0c0' : '#8b0000'};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        border-radius: 50%;
        pointer-events: none;
        animation: gothicFloat ${Math.random() * 20 + 10}s linear infinite;
    `;
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 30000);
}

// Gothic particle floating animation
const gothicParticleStyle = document.createElement('style');
gothicParticleStyle.textContent = `
    @keyframes gothicFloat {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(gothicParticleStyle);

// Create gothic particles periodically
setInterval(createGothicParticle, 2000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.section-header, .gothic-quote, .about-story, .stat-card, .genre-card, .event-card, .gallery-item, .contact-card'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Play button functionality
const playButtons = document.querySelectorAll('.play-btn-large');
playButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            showGothicNotification('Now playing: Shadow Resonance - Dark Electronic Journey', 'play');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            showGothicNotification('Paused - The darkness awaits...', 'pause');
        }
    });
});

// Track preview interactions
document.querySelectorAll('.track-preview').forEach(track => {
    track.addEventListener('click', function() {
        const trackName = this.querySelector('.track-name').textContent;
        showGothicNotification(`Playing: ${trackName}`, 'play');
    });
});

// Genre card interactions
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function() {
        const genreName = this.querySelector('h4').textContent;
        showGothicNotification(`Exploring ${genreName} - Enter the sonic abyss`, 'info');
    });
});

// Event card interactions
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function() {
        const eventName = card.querySelector('h3').textContent;
        const eventStatus = card.querySelector('.event-status');
        
        if (eventStatus.classList.contains('available')) {
            showGothicNotification(`${eventName} - Prepare for the dark ritual`, 'success');
        } else {
            showGothicNotification(`${eventName} - This ritual has reached capacity`, 'error');
        }
    });
});

// Gallery item interactions (disabled)
// document.querySelectorAll('.gallery-item').forEach(item => {
//     item.addEventListener('click', function() {
//         const title = this.querySelector('h4').textContent;
//         showGothicNotification(`Viewing: ${title} - Captured in shadow`, 'info');
//     });
// });

// Contact form handling
const contactForm = document.querySelector('.gothic-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const eventType = formData.get('event-type');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            showGothicNotification('All fields must be filled to complete the ritual', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showGothicNotification('Please provide a valid email for the dark correspondence', 'error');
            return;
        }
        
        // Simulate form submission
        showGothicNotification('Your message has been sent into the void. The darkness will respond within 24 hours.', 'success');
        this.reset();
        
        // Gothic celebration effect
        createGothicCelebration();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Gothic notification system
function showGothicNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.gothic-notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `gothic-notification gothic-notification-${type}`;
    
    const iconMap = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-triangle',
        play: 'fa-play',
        pause: 'fa-pause',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${iconMap[type] || 'fa-info-circle'}"></i>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    const colorMap = {
        success: 'linear-gradient(135deg, #8b0000, #dc143c)',
        error: 'linear-gradient(135deg, #c0c0c0, #8a8a8a)',
        play: 'linear-gradient(135deg, #8b0000, #dc143c)',
        pause: 'linear-gradient(135deg, #333333, #555555)',
        info: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        z-index: 10000;
        background: ${colorMap[type] || colorMap.info};
        color: #ffffff;
        padding: 1rem 1.5rem;
        border: 2px solid #8a8a8a;
        max-width: 400px;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.9);
        animation: gothicSlideIn 0.5s ease-out;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'gothicSlideOut 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);
}

// Gothic celebration effect
function createGothicCelebration() {
    const colors = ['#8b0000', '#dc143c', '#c0c0c0', '#8a8a8a'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: gothicBurst 3s ease-out forwards;
                box-shadow: 0 0 10px currentColor;
            `;
            
            const angle = (i * 18) * (Math.PI / 180);
            const velocity = 150 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--vx', `${vx}px`);
            particle.style.setProperty('--vy', `${vy}px`);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add gothic notification and burst animations
const gothicAnimationStyle = document.createElement('style');
gothicAnimationStyle.textContent = `
    @keyframes gothicSlideIn {
        from {
            transform: translateX(100%) rotate(5deg);
            opacity: 0;
        }
        to {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
    }
    
    @keyframes gothicSlideOut {
        from {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateX(100%) rotate(-5deg);
            opacity: 0;
        }
    }
    
    @keyframes gothicBurst {
        0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--vx)), calc(-50% + var(--vy))) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(gothicAnimationStyle);

// Parallax effect for gothic backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Gothic background parallax
    const marbleTexture = document.querySelector('.marble-texture');
    const metalOverlay = document.querySelector('.metal-overlay');
    
    if (marbleTexture) {
        marbleTexture.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (metalOverlay) {
        metalOverlay.style.transform = `translateY(${scrolled * 0.1}px) translateX(${scrolled * 0.05}px)`;
    }
});

// Stats counter animation
function animateGothicCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target > 100 ? '+' : '');
            clearInterval(timer);
            // Add gothic glow when complete
            element.style.textShadow = '0 0 20px rgba(139, 0, 0, 0.8)';
            setTimeout(() => {
                element.style.textShadow = '0 0 10px rgba(139, 0, 0, 0.5)';
            }, 1000);
        } else {
            element.textContent = Math.floor(start) + (target > 100 ? '+' : '');
        }
    }, 16);
}

// Trigger stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                const target = parseInt(text.replace(/[^0-9]/g, ''));
                stat.textContent = '0' + (text.includes('+') ? '+' : '');
                
                setTimeout(() => {
                    animateGothicCounter(stat, target);
                }, index * 300);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const darkStats = document.querySelector('.dark-stats');
    if (darkStats) {
        statsObserver.observe(darkStats);
    }
});

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Stat cards enhanced effects
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05)';
            card.style.boxShadow = '0 20px 60px rgba(139, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 0 20px rgba(192, 192, 192, 0.3)';
        });
    });
    
    // Social links gothic effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) rotate(5deg)';
            link.style.boxShadow = '0 15px 30px rgba(139, 0, 0, 0.4)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) rotate(0deg)';
            link.style.boxShadow = '0 10px 20px rgba(139, 0, 0, 0.3)';
        });
    });
});

// Gothic atmosphere sound trigger (visual feedback only)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        createGothicCelebration();
        showGothicNotification('Gothic atmosphere intensified', 'success');
    }
});

console.log('🌙 REDSHoU - Gothic Dark Electronic Website Loaded Successfully ⚡');
console.log('Enter the darkness... where shadows dance with sound.');