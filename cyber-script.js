// CYBERPUNK DJ PORTFOLIO - INTERACTIVE FEATURES

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);
});

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling
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

// Matrix Rain Effect
function createMatrixRain() {
    const matrix = document.getElementById('matrix');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.top = '-100px';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.color = '#00ff80';
        drop.style.fontFamily = 'monospace';
        drop.style.fontSize = '14px';
        drop.style.opacity = '0.7';
        drop.style.animation = `matrixDrop ${Math.random() * 10 + 5}s linear infinite`;
        drop.style.animationDelay = Math.random() * 5 + 's';
        
        let text = '';
        for (let j = 0; j < 10; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        drop.innerHTML = text;
        
        matrix.appendChild(drop);
    }
}

// Cyber Particles
function createCyberParticles() {
    const container = document.getElementById('particles');
    const colors = ['#00ffff', '#ff0080', '#8000ff', '#00ff80'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        container.appendChild(particle);
    }
}

// Music Player Controls
function initMusicPlayer() {
    const playBtn = document.querySelector('.play-btn');
    const controlBtns = document.querySelectorAll('.control-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                startWaveformAnimation();
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                stopWaveformAnimation();
            }
        });
    }
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Waveform Animation
let waveformInterval;

function startWaveformAnimation() {
    const bars = document.querySelectorAll('.waveform-bar');
    waveformInterval = setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 100 + '%';
            bar.style.height = height;
        });
    }, 200);
}

function stopWaveformAnimation() {
    clearInterval(waveformInterval);
}

// Frequency Bars Animation
function animateFrequencyBars() {
    const freqBars = document.querySelectorAll('.freq-bar');
    setInterval(() => {
        freqBars.forEach(bar => {
            const height = Math.random() * 25 + 5;
            bar.style.height = height + 'px';
        });
    }, 300);
}

// BPM Counter Animation
function animateBPMCounter() {
    const bpmDisplay = document.querySelector('.bpm-display');
    if (bpmDisplay) {
        const baseBPM = 128;
        setInterval(() => {
            const variation = Math.floor(Math.random() * 6) - 3; // -3 to +3
            bpmDisplay.textContent = baseBPM + variation;
        }, 2000);
    }
}

// Data Typing Animation
function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.cyber-typing');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    });
}

// Glitch Effect on Hover
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.nav-link, .cyber-btn, .event-btn');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        element.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Scan Line Effect
function initScanLines() {
    const scanElements = document.querySelectorAll('.avatar-scan, .scan-line');
    
    scanElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
}

// Audio Spectrum Visualizer (Simulated)
function initAudioSpectrum() {
    const spectrumBars = document.querySelectorAll('.freq-bar');
    
    function updateSpectrum() {
        spectrumBars.forEach((bar, index) => {
            const height = Math.sin(Date.now() * 0.005 + index) * 10 + 15;
            bar.style.height = Math.max(5, height) + 'px';
        });
        
        requestAnimationFrame(updateSpectrum);
    }
    
    updateSpectrum();
}

// Cyber Grid Animation
function animateCyberGrid() {
    const grid = document.querySelector('.cyber-grid');
    if (grid) {
        grid.style.animationPlayState = 'running';
    }
}

// Status Indicators
function initStatusIndicators() {
    const statusElements = document.querySelectorAll('.status-active, .protocol-status');
    
    statusElements.forEach(element => {
        if (element.textContent.includes('ONLINE') || element.textContent.includes('ACTIVE')) {
            element.style.animation = 'statusBlink 2s ease-in-out infinite';
        }
    });
}

// Parallax Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.cyber-particles, .matrix-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Terminal Cursor Effect
function initTerminalCursor() {
    const terminalElements = document.querySelectorAll('.terminal-title, .database-header, .console-title');
    
    terminalElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text + '<span class="cursor">_</span>';
    });
}

// Hover Sound Effect (Visual Feedback)
function initHoverEffects() {
    const interactiveElements = document.querySelectorAll('.cyber-btn, .nav-link, .social-link, .event-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 20px currentColor`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixDrop {
        0% {
            transform: translateY(-100px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
    
    @keyframes glitch {
        0%, 100% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
    }
    
    .cursor {
        animation: cursorBlink 1s infinite;
    }
    
    @keyframes cursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start matrix rain effect
    createMatrixRain();
    
    // Initialize particles
    createCyberParticles();
    
    // Initialize music player
    initMusicPlayer();
    
    // Start frequency bars animation
    animateFrequencyBars();
    
    // Start BPM counter animation
    animateBPMCounter();
    
    // Initialize typing animation
    setTimeout(initTypingAnimation, 1000);
    
    // Initialize glitch effects
    initGlitchEffects();
    
    // Initialize scan lines
    initScanLines();
    
    // Initialize audio spectrum
    initAudioSpectrum();
    
    // Animate cyber grid
    animateCyberGrid();
    
    // Initialize status indicators
    initStatusIndicators();
    
    // Initialize parallax effect
    initParallaxEffect();
    
    // Initialize terminal cursor
    initTerminalCursor();
    
    // Initialize hover effects
    initHoverEffects();
});

// Console welcome message
console.log(`
%c
╔═══════════════════════════════════════╗
║           CYBER DJ PORTFOLIO          ║
║              SYSTEM ONLINE            ║
║        🎧 DJ SHOU INITIALIZED 🎧      ║
╚═══════════════════════════════════════╝
`, 'color: #00ffff; font-family: monospace; font-size: 12px;');

console.log('%cWelcome to the cyberpunk experience!', 'color: #ff0080; font-size: 16px; font-weight: bold;');