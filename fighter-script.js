// FIGHTER DJ PORTFOLIO - INTERACTIVE SCRIPT

// Loading Screen with Fighter Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Start background animations after loading
            initBackgroundEffects();
        }, 500);
    }, 3000);
});

// Navigation Effects
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling with Fighter Speed
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

// Background Effects Initialization
function initBackgroundEffects() {
    createFireParticles();
    createLightningBolts();
    createEnergyWaves();
}

// Fire Particles System
function createFireParticles() {
    const container = document.querySelector('.bg-flames');
    const colors = ['#ff0033', '#ff6600', '#ffcc00'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = Math.random() * 6 + 2 + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        particle.style.animation = `fireRise ${Math.random() * 3 + 2}s linear infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        container.appendChild(particle);
    }
}

// Lightning Effects
function createLightningBolts() {
    const container = document.querySelector('.bg-lightning');
    
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const lightning = document.createElement('div');
            lightning.style.position = 'absolute';
            lightning.style.width = '2px';
            lightning.style.height = Math.random() * 200 + 100 + 'px';
            lightning.style.background = 'linear-gradient(180deg, #ffffff, #00ccff, transparent)';
            lightning.style.left = Math.random() * 100 + '%';
            lightning.style.top = Math.random() * 50 + '%';
            lightning.style.boxShadow = '0 0 20px #00ccff';
            lightning.style.opacity = '0';
            lightning.style.animation = 'lightningFlash 0.2s ease-in-out';
            
            container.appendChild(lightning);
            
            setTimeout(() => {
                if (lightning.parentNode) {
                    lightning.parentNode.removeChild(lightning);
                }
            }, 200);
        }
    }, 500);
}

// Energy Wave System
function createEnergyWaves() {
    const container = document.querySelector('.bg-energy-waves');
    
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'absolute';
        wave.style.width = '200px';
        wave.style.height = '200px';
        wave.style.border = '2px solid rgba(255, 204, 0, 0.3)';
        wave.style.borderRadius = '50%';
        wave.style.left = Math.random() * 100 + '%';
        wave.style.top = Math.random() * 100 + '%';
        wave.style.animation = `energyPulse ${Math.random() * 4 + 3}s ease-in-out infinite`;
        wave.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(wave);
    }
}

// Fighter Stats Animation
function animateFighterStats() {
    const statFills = document.querySelectorAll('.stat-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statFill = entry.target;
                statFill.style.animation = 'none';
                setTimeout(() => {
                    statFill.style.animation = 'statFill 2s ease-out forwards';
                }, 100);
            }
        });
    });
    
    statFills.forEach(stat => observer.observe(stat));
}

// Combat UI Animations
function initCombatUI() {
    // Health bar animations
    const playerHp = document.querySelector('.player-hp');
    const opponentHp = document.querySelector('.opponent-hp');
    
    if (playerHp) {
        setInterval(() => {
            const currentWidth = parseInt(playerHp.style.width) || 100;
            const newWidth = Math.max(90, currentWidth + (Math.random() - 0.5) * 5);
            playerHp.style.width = newWidth + '%';
        }, 2000);
    }
    
    if (opponentHp) {
        setInterval(() => {
            const currentWidth = parseInt(opponentHp.style.width) || 85;
            const newWidth = Math.max(70, currentWidth + (Math.random() - 0.7) * 8);
            opponentHp.style.width = newWidth + '%';
        }, 1500);
    }
    
    // Combo counter animation
    const comboHits = document.querySelector('.combo-hits');
    if (comboHits) {
        let currentCombo = 25;
        setInterval(() => {
            currentCombo += Math.floor(Math.random() * 10) - 3;
            currentCombo = Math.max(0, Math.min(99, currentCombo));
            comboHits.textContent = currentCombo;
        }, 3000);
    }
    
    // Timer countdown
    const timer = document.querySelector('.timer');
    if (timer) {
        let timeLeft = 99;
        setInterval(() => {
            timeLeft--;
            if (timeLeft < 0) timeLeft = 99;
            timer.textContent = timeLeft.toString().padStart(2, '0');
        }, 1000);
    }
}

// Weapon System Interactions
function initWeaponSystem() {
    const weaponCards = document.querySelectorAll('.weapon-card');
    const currentWeaponDisplay = document.querySelector('.weapon-display img');
    const weaponName = document.querySelector('.weapon-name');
    
    weaponCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            weaponCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Update current weapon display
            const weaponImg = this.querySelector('img').src;
            const weaponTitle = this.querySelector('h5').textContent;
            
            if (currentWeaponDisplay) {
                currentWeaponDisplay.src = weaponImg;
            }
            
            if (weaponName) {
                weaponName.textContent = `⚡ ${weaponTitle} ⚡`;
            }
            
            // Trigger weapon switch effect
            triggerWeaponSwitchEffect();
        });
    });
}

// Weapon Switch Visual Effect
function triggerWeaponSwitchEffect() {
    const weaponDisplay = document.querySelector('.weapon-display');
    if (weaponDisplay) {
        weaponDisplay.style.transform = 'scale(1.1)';
        weaponDisplay.style.boxShadow = '0 0 40px #ffcc00';
        
        setTimeout(() => {
            weaponDisplay.style.transform = 'scale(1)';
            weaponDisplay.style.boxShadow = '0 0 20px #0066ff';
        }, 300);
    }
}

// Beat Visualizer Animation
function initBeatVisualizer() {
    const waves = document.querySelectorAll('.wave');
    const isPlaying = { value: false };
    
    function animateWaves() {
        if (!isPlaying.value) return;
        
        waves.forEach((wave, index) => {
            const baseHeight = [30, 60, 80, 100, 90, 70, 50, 40][index];
            const randomHeight = baseHeight + Math.random() * 50;
            wave.style.height = randomHeight + 'px';
        });
        
        requestAnimationFrame(animateWaves);
    }
    
    // Fire button control
    const fireBtn = document.querySelector('.fire-btn');
    if (fireBtn) {
        fireBtn.addEventListener('click', function() {
            isPlaying.value = !isPlaying.value;
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            if (isPlaying.value) {
                icon.className = 'fas fa-pause';
                text.textContent = 'STOP!';
                this.style.background = '#ff6600';
                animateWaves();
                triggerBeatFireEffect();
            } else {
                icon.className = 'fas fa-play';
                text.textContent = 'FIRE!';
                this.style.background = 'transparent';
            }
        });
    }
}

// Beat Fire Effect
function triggerBeatFireEffect() {
    const weaponDisplay = document.querySelector('.weapon-display');
    if (weaponDisplay) {
        // Create explosion effect
        const explosion = document.createElement('div');
        explosion.style.position = 'absolute';
        explosion.style.top = '50%';
        explosion.style.left = '50%';
        explosion.style.width = '0';
        explosion.style.height = '0';
        explosion.style.background = 'radial-gradient(circle, #ff6600 0%, transparent 70%)';
        explosion.style.borderRadius = '50%';
        explosion.style.transform = 'translate(-50%, -50%)';
        explosion.style.transition = 'all 0.5s ease-out';
        explosion.style.pointerEvents = 'none';
        
        weaponDisplay.appendChild(explosion);
        
        setTimeout(() => {
            explosion.style.width = '400px';
            explosion.style.height = '400px';
            explosion.style.opacity = '0.5';
        }, 10);
        
        setTimeout(() => {
            explosion.style.opacity = '0';
        }, 300);
        
        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, 500);
    }
}

// Battle Card Hover Effects
function initBattleEffects() {
    const battleCards = document.querySelectorAll('.battle-card');
    
    battleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const sparks = this.querySelectorAll('.effect-spark');
            sparks.forEach(spark => {
                spark.style.animation = 'sparkFly 0.5s linear infinite';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const sparks = this.querySelectorAll('.effect-spark');
            sparks.forEach(spark => {
                spark.style.animation = 'sparkFly 3s linear infinite';
            });
        });
    });
}

// Social Fighter Effects
function initSocialEffects() {
    const socialFighters = document.querySelectorAll('.social-fighter');
    
    socialFighters.forEach(fighter => {
        fighter.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(255, 0, 51, 0.5)';
        });
        
        fighter.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Contact Method Animations
function initContactEffects() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 102, 0, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
}

// Power Level Animation
function initPowerLevel() {
    const powerSlider = document.querySelector('.slider-fill');
    if (powerSlider) {
        setInterval(() => {
            const randomPower = Math.random() * 20 + 75; // 75-95%
            powerSlider.style.width = randomPower + '%';
        }, 2000);
    }
}

// Fighter Button Effects
function initFighterButtons() {
    const fighterBtns = document.querySelectorAll('.fighter-btn, .battle-btn');
    
    fighterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('sold-out')) {
                e.preventDefault();
                // Shake effect for sold out buttons
                this.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
                return;
            }
            
            // Success click effect
            const originalText = this.textContent;
            this.textContent = 'CONFIRMED!';
            this.style.background = '#00cc33';
            this.style.borderColor = '#00cc33';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.borderColor = '';
            }, 1000);
        });
    });
}

// Sound Effect Simulation (Visual feedback)
function createSoundEffect(type) {
    const soundIndicator = document.createElement('div');
    soundIndicator.style.position = 'fixed';
    soundIndicator.style.top = '20px';
    soundIndicator.style.right = '20px';
    soundIndicator.style.background = '#ff6600';
    soundIndicator.style.color = '#ffffff';
    soundIndicator.style.padding = '10px 20px';
    soundIndicator.style.borderRadius = '5px';
    soundIndicator.style.fontFamily = 'Bebas Neue, sans-serif';
    soundIndicator.style.fontSize = '14px';
    soundIndicator.style.fontWeight = '700';
    soundIndicator.style.zIndex = '10000';
    soundIndicator.style.animation = 'soundPop 2s ease-out forwards';
    
    switch(type) {
        case 'hit':
            soundIndicator.textContent = 'HIT!';
            soundIndicator.style.background = '#ff0033';
            break;
        case 'fire':
            soundIndicator.textContent = 'FIRE!';
            soundIndicator.style.background = '#ff6600';
            break;
        case 'combo':
            soundIndicator.textContent = 'COMBO!';
            soundIndicator.style.background = '#ffcc00';
            soundIndicator.style.color = '#000000';
            break;
        default:
            soundIndicator.textContent = 'EFFECT!';
    }
    
    document.body.appendChild(soundIndicator);
    
    setTimeout(() => {
        if (soundIndicator.parentNode) {
            soundIndicator.parentNode.removeChild(soundIndicator);
        }
    }, 2000);
}

// Parallax Effect for Background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgrounds = document.querySelectorAll('.bg-flames, .bg-lightning, .bg-energy-waves');
        
        backgrounds.forEach((bg, index) => {
            const speed = (index + 1) * 0.3;
            bg.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Achievement Counter Animation
function initAchievementCounters() {
    const counters = document.querySelectorAll('.achievement-number, .stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;
                
                if (target.includes('+') || target.includes('#')) {
                    // Handle special cases like "500+", "#1"
                    const num = parseInt(target.replace(/[+#]/g, ''));
                    animateNumber(counter, 0, num, target.includes('+') ? '+' : (target.includes('#') ? '#' : ''));
                } else {
                    const num = parseInt(target);
                    if (!isNaN(num)) {
                        animateNumber(counter, 0, num);
                    }
                }
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Number Animation Function
function animateNumber(element, start, end, suffix = '') {
    const duration = 2000;
    const increment = (end - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        const prefix = suffix === '#' ? '#' : '';
        const postfix = suffix === '+' ? '+' : '';
        element.textContent = prefix + Math.floor(current) + postfix;
    }, 16);
}

// CSS Animations
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes fireRise {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-300px) scale(0.3);
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes soundPop {
        0% {
            transform: scale(0) translateY(-20px);
            opacity: 0;
        }
        20% {
            transform: scale(1.2) translateY(0);
            opacity: 1;
        }
        80% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(0.8) translateY(-10px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(dynamicStyles);

// Initialize all systems when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 FIGHTER SYSTEM INITIALIZING... 🔥');
    
    // Initialize all fighter systems
    animateFighterStats();
    initCombatUI();
    initWeaponSystem();
    initBeatVisualizer();
    initBattleEffects();
    initSocialEffects();
    initContactEffects();
    initPowerLevel();
    initFighterButtons();
    initParallaxEffect();
    initAchievementCounters();
    
    console.log('⚡ ALL FIGHTER SYSTEMS ONLINE! ⚡');
    
    // Welcome sound effect
    setTimeout(() => {
        createSoundEffect('combo');
    }, 1000);
});

// Keyboard Shortcuts (Easter Eggs)
document.addEventListener('keydown', function(e) {
    // Konami Code: ↑↑↓↓←→←→BA
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    if (!window.konamiProgress) window.konamiProgress = 0;
    
    if (e.code === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            // Konami code completed - trigger special effect
            document.body.style.animation = 'rainbow 2s ease-in-out';
            createSoundEffect('combo');
            alert('🔥 ULTIMATE FIGHTER MODE ACTIVATED! 🔥');
            window.konamiProgress = 0;
        }
    } else {
        window.konamiProgress = 0;
    }
    
    // Quick actions
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            const fireBtn = document.querySelector('.fire-btn');
            if (fireBtn) fireBtn.click();
            break;
        case 'KeyF':
            createSoundEffect('fire');
            break;
        case 'KeyH':
            createSoundEffect('hit');
            break;
        case 'KeyC':
            createSoundEffect('combo');
            break;
    }
});

// Console Easter Egg
console.log(`
%c
██████╗ ███████╗██████╗ ███████╗██╗  ██╗ ██████╗ ██╗   ██╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║██╔═══██╗██║   ██║
██████╔╝█████╗  ██║  ██║███████╗███████║██║   ██║██║   ██║
██╔══██╗██╔══╝  ██║  ██║╚════██║██╔══██║██║   ██║██║   ██║
██║  ██║███████╗██████╔╝███████║██║  ██║╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ 

FIGHTER SYSTEM v2.0 - ALL SYSTEMS OPERATIONAL
`, 'color: #ff6600; font-family: monospace; font-size: 10px;');

console.log('%cControls: SPACE=Fire, F=Fire Effect, H=Hit Effect, C=Combo Effect', 'color: #ffcc00; font-size: 12px; font-weight: bold;');
console.log('%cTry the Konami Code: ↑↑↓↓←→←→BA', 'color: #00ccff; font-size: 12px;');