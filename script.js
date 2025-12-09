// 語言翻譯內容
const translations = {
    zh: {
        'nav-home': '首頁',
        'nav-about': '關於',
        'nav-music': '音樂',
        'nav-gallery': '相簿',
        'hero-subtitle': 'EDM • Hip Hop • 電子音樂',
        'about-title': '關於 REDSHoU',
        'intro-p1': 'DJ REDSHoU 一股來自花蓮玉里阿美族血液中的原古之力，令人振奮、膽怯又瀰漫酒色薰陶，接踵而來一杯又一杯的醞釀，仍要保持清醒……。',
        'intro-p2': '當我清醒之時，沉浸在音樂的世界中，一步步教學影片讓我不斷湧出對於DJ熱愛，心想：要得更多…鑽研更多…要怎樣才能讓別人看見我！被千人、萬人矚目看見，沉醉在我的旋律裡：「這是我的夢。」',
        'intro-p3': '走過無數風格嘗試，從EDM 和 Hip Hop 文化中著墨，透過節奏、能量和創造性，在大多演出及作品中佔據了重要的位置。走遍百人、千人演出場所，合作過Jay Park、Lil Mosey、PSY.P、攬佬等知名歌手藝人，REDSHoU未來將無處不在。',
        'experience-title': '詳細經歷',
        'music-title': '🎵 最新作品',
        'music-subtitle': 'REDSHoU Mixtape Series',
        'gallery-title': '活動照片',
        'gallery-subtitle': '音樂現場的精彩時刻',
        'footer-links': '快速連結',
        'footer-social': '粉絲專頁',
        // 經歷區塊
        'intl-brand-title': '國際品牌合作與重點演出',
        'jay-park-event': 'Jay Park 台北慶功派對',
        'lil-mosey-event': 'Lil Mosey 演唱會',
        'psyp-event': 'PSY.P 2025 專輯試聽會',
        'redrum-event': 'Omni ALTA REDRUM SEASON',
        'az-event': 'AZ李孝組『有餒』台北演唱會',
        'lanlo-event': '攬佬 華饒之夜',
        'intl-performance-title': '國際演出經歷',
        'fukuoka-japan': '日本福岡',
        'fukuoka-caption': 'The Lively Fukuoka 演出現場',
        'cultural-events-title': '文化節慶與特別活動',
        'longtan-festival': '龍潭歸鄉文化節',
        'taoyuan-longtan': '桃園龍潭',
        'yilan-arts-event': '宜蘭傳藝 - 愛在夏天夜傳藝',
        'yilan-arts-center': '宜蘭傳統藝術中心',
        'revolver-event': 'Revolver - Outskirtsmafia (舊識新郊)',
        'next-level-event': 'Next Level (台美嘻哈之夜)',
        'multiple-venues': '多個場地巡演',
        // 相簿區塊
        'gallery-live-title': '現場表演',
        'gallery-live-desc': '熱情的現場氣氛',
        'gallery-pro-title': '專業演出',
        'gallery-pro-desc': 'DJ 台上的精彩時刻',
        'gallery-stage-title': '舞台風采',
        'gallery-stage-desc': '充滿能量的演出',
        'gallery-party-title': '派對現場',
        'gallery-party-desc': '與觀眾互動的熱烈時刻',
        'gallery-dj-title': 'DJ台風采',
        'gallery-dj-desc': '專注於音樂的瞬間',
        'gallery-club-title': '夜店演出',
        'gallery-club-desc': '營造氣氛的專業DJ',
        'gallery-music-title': '音樂現場',
        'gallery-music-desc': '電子音樂的魅力',
        'gallery-amazing-title': '精彩演出',
        'gallery-amazing-desc': '帶動全場的能量',
        // 新增的翻譯項目
        'taipei-nightlife-title': '台北夜生活場所駐場經歷',
        'nightclub-title': '夜店',
        'bar-title': '酒吧',
        'recent-works-title': '近期精選作品',
        'footer-about-link': '關於'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-music': 'Music',
        'nav-gallery': 'Gallery',
        'hero-subtitle': 'EDM • Hip Hop • Electronic Music',
        'about-title': 'About REDSHoU',
        'intro-p1': 'DJ REDSHoU - An ancient force from the Amis tribal blood of Yuli, Hualien, both invigorating and intimidating, permeated with the intoxication of alcohol, one cup after another brewing, yet still needing to stay awake...',
        'intro-p2': 'When I am awake, immersed in the world of music, step-by-step tutorial videos continuously ignite my passion for DJing. I thought: I want more... to explore more... How can I make others see me! To be watched by thousands, tens of thousands, intoxicated in my melody: "This is my dream."',
        'intro-p3': 'Through countless style experiments, drawing from EDM and Hip Hop culture, through rhythm, energy and creativity, occupying important positions in most performances and works. Spanning venues from hundreds to thousands of people, collaborating with renowned artists like Jay Park, Lil Mosey, PSY.P, and Lanlo, REDSHoU will be everywhere in the future.',
        'experience-title': 'Detailed Experience',
        'music-title': '🎵 Latest Works',
        'music-subtitle': 'REDSHoU Mixtape Series',
        'gallery-title': 'Event Photos',
        'gallery-subtitle': 'Exciting moments from live music scenes',
        'footer-links': 'Quick Links',
        'footer-social': 'Social Media',
        // 經歷區塊
        'intl-brand-title': 'International Brand Collaborations & Key Performances',
        'jay-park-event': 'Jay Park Taipei After Party',
        'lil-mosey-event': 'Lil Mosey Concert',
        'psyp-event': 'PSY.P 2025 Album Listening Party',
        'redrum-event': 'Omni ALTA REDRUM SEASON',
        'az-event': 'AZ Leo Ku Group "You Nai" Taipei Concert',
        'lanlo-event': 'Lanlo Chinese Rap Night',
        'intl-performance-title': 'International Performance Experience',
        'fukuoka-japan': 'Fukuoka, Japan',
        'fukuoka-caption': 'The Lively Fukuoka Performance Scene',
        'cultural-events-title': 'Cultural Festivals & Special Events',
        'longtan-festival': 'Longtan Homecoming Cultural Festival',
        'taoyuan-longtan': 'Taoyuan Longtan',
        'yilan-arts-event': 'Yilan Traditional Arts - Love in Summer Night Arts',
        'yilan-arts-center': 'Yilan Traditional Arts Center',
        'revolver-event': 'Revolver - Outskirtsmafia (Old Friends New Suburbs)',
        'next-level-event': 'Next Level (Taiwan-US Hip Hop Night)',
        'multiple-venues': 'Multiple Venue Tour',
        // 相簿區塊
        'gallery-live-title': 'Live Performance',
        'gallery-live-desc': 'Passionate live atmosphere',
        'gallery-pro-title': 'Professional Performance',
        'gallery-pro-desc': 'Exciting moments on the DJ booth',
        'gallery-stage-title': 'Stage Presence',
        'gallery-stage-desc': 'Energetic performance',
        'gallery-party-title': 'Party Scene',
        'gallery-party-desc': 'Intense moments of audience interaction',
        'gallery-dj-title': 'DJ Booth Style',
        'gallery-dj-desc': 'Moments focused on music',
        'gallery-club-title': 'Club Performance',
        'gallery-club-desc': 'Professional DJ creating atmosphere',
        'gallery-music-title': 'Music Scene',
        'gallery-music-desc': 'The charm of electronic music',
        'gallery-amazing-title': 'Amazing Performance',
        'gallery-amazing-desc': 'Energy that drives the whole crowd',
        // 新增的翻譯項目
        'taipei-nightlife-title': 'Taipei Nightlife Residency Experience',
        'nightclub-title': 'Nightclubs',
        'bar-title': 'Bars',
        'recent-works-title': 'Recent Featured Works',
        'footer-about-link': 'About'
    }
};


// 圖片緩存管理
const imageCache = new Map();

// 資源預加載管理
function preloadCriticalResources() {
    const criticalImages = [
        'https://i.ibb.co/W4Yycq12/REDSHOU-logo.png',
        'https://i.ibb.co/NHBgVJS/IMG-9559-removebg-preview.png'
    ];
    
    criticalImages.forEach(src => {
        if (!imageCache.has(src)) {
            const img = new Image();
            img.src = src;
            imageCache.set(src, img);
        }
    });
}

// 優化後的載入序列
function initializePageResources() {
    // 1. 預加載關鍵資源
    preloadCriticalResources();
    
    // 2. 初始化核心功能
    initializeVideoBackground();
    initializeLanguage();
    
    // 3. 延遲初始化非關鍵功能
    requestIdleCallback(() => {
        initializeSkillBars();
        addLazyLoadingToImages();
        optimizePagePerformance();
    });
}

// 頁面性能優化
function optimizePagePerformance() {
    // 移除未使用的 CSS 動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // 暫停不在視野內的動畫
                entry.target.style.animationPlayState = 'paused';
            } else {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });
    
    // 觀察動畫元素
    document.querySelectorAll('.floating-elements, .gothic-particles').forEach(el => {
        observer.observe(el);
    });
    
    // 優化字體載入
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
    
}

// 假動畫載入系統 - 背景準備頁面，前台播放動畫
let isLoaded = false;
let pageReady = false;

// 隱藏載入畫面
function hideLoader() {
    if (isLoaded) return;
    isLoaded = true;
    
    const loader = document.getElementById('gothicLoader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}

// 背景準備頁面功能
function preparePageInBackground() {
    try {
        // 立即初始化關鍵功能
        initializeLanguage();
        
        // 快速初始化圖片懶加載
        setTimeout(() => {
            try {
                addLazyLoadingToImages();
                initializeVideoBackground();
                initializeSkillBars();
                pageReady = true;
            } catch (e) {
                pageReady = true;
            }
        }, 200);
        
    } catch (e) {
        pageReady = true;
    }
}

// 等待假動畫完成再隱藏
function waitForAnimationComplete() {
    // 假動畫播放 2.5 秒，再等 0.8 秒讓使用者看到完成
    setTimeout(() => {
        hideLoader();
    }, 3300);
}

// DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    // 背景準備頁面
    preparePageInBackground();
    
    // 開始假動畫計時
    waitForAnimationComplete();
});

// window.load 備用機制
window.addEventListener('load', () => {
    if (!pageReady) {
        preparePageInBackground();
    }
});

// 緊急回退 - 5秒後強制完成
setTimeout(() => {
    if (!isLoaded) {
        hideLoader();
    }
}, 5000);

// 極速懶加載系統
function addLazyLoadingToImages() {
    // 只處理非關鍵圖片
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // 跳過關鍵圖片
        if (!img.src.includes('logo') && !img.closest('.hero-image') && !img.closest('.nav-brand')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}


// Video Background Initialization - 優化載入速度
function initializeVideoBackground() {
    const video = document.getElementById('bgVideo');
    const videoSource = document.getElementById('videoSource');
    const fallbackBg = document.getElementById('fallbackBg');
    
    // 先顯示備用背景，避免載入延遲
    if (fallbackBg) fallbackBg.style.display = 'block';
    
    // 檢查影片來源
    if (!videoSource.src || videoSource.src === '' || !videoSource.src.includes('background-video.mp4')) {
        showFallbackBackground();
        return;
    }
    
    // 延遲載入影片，不阻塞初始載入
    setTimeout(() => {
        // 處理影片載入成功
        video.addEventListener('loadeddata', () => {
            video.style.display = 'block';
            if (fallbackBg) fallbackBg.style.display = 'none';
        });
        
        // 處理影片載入失敗
        video.addEventListener('error', () => {
            showFallbackBackground();
        });
        
        // 確保影片循環播放
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });
        
        // 嘗試播放影片
        video.play().catch(e => {
            showFallbackBackground();
        });
    }, 500); // 延遲 500ms 載入影片
}

function showFallbackBackground() {
    const video = document.getElementById('bgVideo');
    const fallbackBg = document.getElementById('fallbackBg');
    
    if (video) video.style.display = 'none';
    if (fallbackBg) fallbackBg.style.display = 'block';
}

// 更新影片 URL 的函數
function setVideoBackground(videoUrl) {
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('bgVideo');
    
    if (videoSource && video) {
        videoSource.src = videoUrl;
        video.load();
        initializeVideoBackground();
    }
}

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

// Create gothic particles periodically - 優化效能
// 減少粒子生成頻率，並只在可見區域創建
let particleInterval;
function startParticleAnimation() {
    // 只在首頁區塊可見時啟動
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!particleInterval) {
                        particleInterval = setInterval(createGothicParticle, 4000); // 增加間隔
                    }
                } else {
                    if (particleInterval) {
                        clearInterval(particleInterval);
                        particleInterval = null;
                    }
                }
            });
        });
        observer.observe(heroSection);
    }
}

// 延遲啟動粒子動畫
setTimeout(startParticleAnimation, 2000);

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

// 語言系統功能
function initializeLanguage() {
    // 從 localStorage 讀取儲存的語言設定，預設為中文
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    setLanguage(savedLang);
    
    // 設置語言按鈕事件監聽器
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('preferred-language', lang);
        });
    });
}

function setLanguage(lang) {
    // 更新按鈕狀態
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 更新頁面內容
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新 HTML lang 屬性
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    
    // 更新 meta 標籤
    updateMetaTags(lang);
}

function updateMetaTags(lang) {
    const title = document.querySelector('title');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const description = document.querySelector('meta[property="og:description"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (lang === 'en') {
        if (title) title.textContent = 'DJ REDSHOU';
        if (ogTitle) ogTitle.setAttribute('content', 'DJ REDSHOU - EDM • Hip Hop • Electronic Music');
        if (twitterTitle) twitterTitle.setAttribute('content', 'DJ REDSHOU - EDM • Hip Hop • Electronic Music');
        if (description) description.setAttribute('content', 'Professional DJ from Taiwan specializing in EDM, Hip Hop, and Electronic Music');
        if (twitterDescription) twitterDescription.setAttribute('content', 'Professional DJ from Taiwan specializing in EDM, Hip Hop, and Electronic Music');
    } else {
        if (title) title.textContent = 'DJ REDSHOU';
        if (ogTitle) ogTitle.setAttribute('content', 'DJ REDSHOU');
        if (twitterTitle) twitterTitle.setAttribute('content', 'DJ REDSHOU');
        if (description) description.setAttribute('content', 'EDM • Hip Hop • 電子音樂');
        if (twitterDescription) twitterDescription.setAttribute('content', 'EDM • Hip Hop • 電子音樂');
    }
}

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


