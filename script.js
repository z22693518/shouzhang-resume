// ===== TIMER MANAGEMENT SYSTEM =====
class TimerManager {
    constructor() {
        this.timers = new Map();
        this.intervals = new Map();
    }
    
    setTimeout(callback, delay, id = `timer_${Date.now()}_${Math.random()}`) {
        this.clearTimer(id);
        const timer = setTimeout(() => {
            callback();
            this.timers.delete(id);
        }, delay);
        this.timers.set(id, timer);
        return { id, timer };
    }
    
    setInterval(callback, interval, id = `interval_${Date.now()}_${Math.random()}`) {
        this.clearInterval(id);
        const intervalTimer = setInterval(callback, interval);
        this.intervals.set(id, intervalTimer);
        return { id, timer: intervalTimer };
    }
    
    clearTimer(id) {
        const timer = this.timers.get(id);
        if (timer) {
            clearTimeout(timer);
            this.timers.delete(id);
        }
    }
    
    clearInterval(id) {
        const interval = this.intervals.get(id);
        if (interval) {
            clearInterval(interval);
            this.intervals.delete(id);
        }
    }
    
    clearAll() {
        this.timers.forEach(timer => clearTimeout(timer));
        this.intervals.forEach(interval => clearInterval(interval));
        this.timers.clear();
        this.intervals.clear();
    }
    
    getActiveTimers() {
        return {
            timers: this.timers.size,
            intervals: this.intervals.size,
            total: this.timers.size + this.intervals.size
        };
    }
}

// 全局定時器管理器
const timerManager = new TimerManager();

// 語言翻譯內容
const translations = {
    zh: {
        'nav-home': '首頁',
        'nav-about': '關於',
        'nav-music': '音樂',
        'nav-gallery': '相簿',
        'nav-contact': '聯絡',
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
        'camo-event': 'CAMO',
        'lil-pump-event': 'Lil Pump',
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
        'footer-about-link': '關於',
        // 聯絡表單翻譯
        'contact-booking-title': '📞 聯絡 & 預訂',
        'contact-booking-subtitle': 'DJ REDSHoU Booking Inquiry',
        'contact-booking-section-title': '演出預訂',
        'contact-performance-title': '演出類型',
        'contact-performance-desc': '夜店表演 • 私人派對<br>企業活動 • 音樂節',
        'contact-schedule-title': '檔期查詢',
        'contact-schedule-desc': '提前預訂享優惠<br>歡迎洽詢檔期',
        'contact-response-title': '快速回覆',
        'contact-response-desc': '24小時內回覆<br>專業服務保證',
        'booking-form-title': '預訂詢問表單',
        'client-name-label': '姓名 / 公司 *',
        'client-email-label': '聯絡信箱 *',
        'client-phone-label': '聯絡電話 *',
        'event-type-label': '演出類型 *',
        'event-type-placeholder': '請選擇演出類型',
        'event-type-nightclub': '夜店表演',
        'event-type-private': '私人派對',
        'event-type-corporate': '企業活動',
        'event-type-festival': '音樂節',
        'event-type-wedding': '婚禮派對',
        'event-type-other': '其他',
        'event-date-label': '預訂日期 *',
        'year-placeholder': '年份',
        'month-placeholder': '月份', 
        'day-placeholder': '日期',
        'event-location-label': '活動地點 *',
        'event-location-placeholder': '例：台北市信義區',
        'event-details-label': '活動詳情 *',
        'event-details-placeholder': '請描述活動規模、時間、特殊需求等...',
        'submit-button': '送出預訂詢問'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-music': 'Music',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
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
        'camo-event': 'CAMO',
        'lil-pump-event': 'Lil Pump',
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
        'footer-about-link': 'About',
        // 聯絡表單英文翻譯
        'contact-booking-title': '📞 Contact & Booking',
        'contact-booking-subtitle': 'DJ REDSHoU Booking Inquiry',
        'contact-booking-section-title': 'Performance Booking',
        'contact-performance-title': 'Performance Types',
        'contact-performance-desc': 'Nightclub Shows • Private Parties<br>Corporate Events • Music Festivals',
        'contact-schedule-title': 'Schedule Inquiry',
        'contact-schedule-desc': 'Early Booking Discounts<br>Availability Inquiry Welcome',
        'contact-response-title': 'Quick Response',
        'contact-response-desc': '24-Hour Response<br>Professional Service Guaranteed',
        'booking-form-title': 'Booking Inquiry Form',
        'client-name-label': 'Name / Company *',
        'client-email-label': 'Email Address *',
        'client-phone-label': 'Phone Number *',
        'event-type-label': 'Event Type *',
        'event-type-placeholder': 'Please select event type',
        'event-type-nightclub': 'Nightclub Performance',
        'event-type-private': 'Private Party',
        'event-type-corporate': 'Corporate Event',
        'event-type-festival': 'Music Festival',
        'event-type-wedding': 'Wedding Party',
        'event-type-other': 'Other',
        'event-date-label': 'Event Date *',
        'year-placeholder': 'Year',
        'month-placeholder': 'Month',
        'day-placeholder': 'Day',
        'event-location-label': 'Event Location *',
        'event-location-placeholder': 'e.g., Xinyi District, Taipei',
        'event-details-label': 'Event Details *',
        'event-details-placeholder': 'Please describe event scale, timing, special requirements...',
        'submit-button': 'Submit Booking Inquiry'
    }
};


// 圖片緩存管理
const imageCache = new Map();

// ===== WEBP SUPPORT DETECTION =====
function supportsWebP() {
    return new Promise((resolve) => {
        const webp = new Image();
        webp.onload = webp.onerror = () => resolve(webp.height === 2);
        webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
}

// ===== SMART IMAGE OPTIMIZATION =====
class ImageOptimizer {
    constructor() {
        this.webpSupported = false;
        this.init();
    }
    
    async init() {
        this.webpSupported = await supportsWebP();
        console.log(`WebP support: ${this.webpSupported ? '✅' : '❌'}`);
    }
    
    optimizeImageSrc(originalSrc) {
        // 模擬WebP轉換 - 實際環境中會替換為真實的WebP URL
        if (this.webpSupported && originalSrc.includes('.jpg') || originalSrc.includes('.png')) {
            // 在實際應用中，這裡會替換為WebP版本的URL
            return {
                webp: originalSrc.replace(/\.(jpg|jpeg|png)$/, '.webp'),
                fallback: originalSrc,
                optimized: true
            };
        }
        return {
            webp: originalSrc,
            fallback: originalSrc,
            optimized: false
        };
    }
    
    createOptimizedPicture(imgElement) {
        const originalSrc = imgElement.src;
        const { webp, fallback } = this.optimizeImageSrc(originalSrc);
        
        if (!this.webpSupported || webp === fallback) {
            return imgElement; // No optimization needed
        }
        
        // 創建 picture 元素
        const picture = document.createElement('picture');
        
        // WebP source
        const webpSource = document.createElement('source');
        webpSource.srcset = webp;
        webpSource.type = 'image/webp';
        
        // Fallback source
        const fallbackSource = document.createElement('source');
        fallbackSource.srcset = fallback;
        fallbackSource.type = imgElement.src.includes('.png') ? 'image/png' : 'image/jpeg';
        
        // 保留原始img屬性
        const optimizedImg = imgElement.cloneNode(true);
        optimizedImg.src = fallback;
        
        picture.appendChild(webpSource);
        picture.appendChild(fallbackSource);
        picture.appendChild(optimizedImg);
        
        return picture;
    }
}

// 全局圖片優化器
const imageOptimizer = new ImageOptimizer();

// 資源預加載管理 - 優化版
function preloadCriticalResources() {
    const criticalImages = [
        'https://i.ibb.co/W4Yycq12/REDSHOU-logo.png',
        'https://i.ibb.co/NHBgVJS/IMG-9559-removebg-preview.png'
    ];
    
    criticalImages.forEach(src => {
        if (!imageCache.has(src)) {
            const img = new Image();
            const optimized = imageOptimizer.optimizeImageSrc(src);
            
            // 優先嘗試載入WebP格式
            img.src = optimized.webp;
            img.onerror = () => {
                // WebP載入失敗，回退到原始格式
                img.src = optimized.fallback;
            };
            
            imageCache.set(src, img);
        }
    });
}

// 優化後的載入序列 + 網路監控
function initializePageResources() {
    // 1. 檢查網路狀況
    monitorNetworkStatus();
    
    // 2. 預加載關鍵資源
    preloadCriticalResources();
    
    // 3. 初始化核心功能
    initializeVideoBackground();
    initializeLanguage();
    
    // 4. 延遲初始化非關鍵功能
    requestIdleCallback(() => {
        initializeSkillBars();
        addLazyLoadingToImages();
        optimizePagePerformance();
        monitorExternalResources();
    });
}

// 網路狀況監控
function monitorNetworkStatus() {
    // 檢測網路連線狀態
    function updateNetworkStatus() {
        if (!navigator.onLine) {
            showGothicNotification('網路連線中斷，部分功能可能受影響', 'error');
        }
    }
    
    // 監聽網路狀態變化
    window.addEventListener('online', () => {
        showGothicNotification('網路連線已恢復', 'success');
        // 重新載入失敗的資源
        retryFailedResources();
    });
    
    window.addEventListener('offline', updateNetworkStatus);
    
    // 初始檢查
    if (!navigator.onLine) {
        updateNetworkStatus();
    }
}

// 監控外部資源載入狀況
function monitorExternalResources() {
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Cinzel:wght@600&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        checkResourceLoading(resource);
    });
}

// 檢查資源載入狀況
function checkResourceLoading(resourceUrl) {
    const timeout = setTimeout(() => {
        console.warn(`外部資源載入超時: ${resourceUrl}`);
        handleResourceFailure(resourceUrl);
    }, 15000);
    
    // 嘗試載入資源
    fetch(resourceUrl, { method: 'HEAD' })
        .then(response => {
            clearTimeout(timeout);
            if (!response.ok) {
                handleResourceFailure(resourceUrl);
            }
        })
        .catch(error => {
            clearTimeout(timeout);
            handleResourceFailure(resourceUrl);
        });
}

// 處理資源載入失敗
function handleResourceFailure(resourceUrl) {
    console.error(`資源載入失敗: ${resourceUrl}`);
    
    // 根據資源類型提供降級方案
    if (resourceUrl.includes('font-awesome')) {
        provideFallbackIcons();
    } else if (resourceUrl.includes('emailjs')) {
        provideFallbackContactForm();
    } else if (resourceUrl.includes('fonts.googleapis')) {
        provideFallbackFonts();
    }
}

// 圖示降級方案
function provideFallbackIcons() {
    const style = document.createElement('style');
    style.textContent = `
        .fas::before, .fab::before, .fa::before {
            content: '●';
            font-family: system-ui, sans-serif;
        }
        .fa-play::before { content: '▶'; }
        .fa-pause::before { content: '⏸'; }
        .fa-music::before { content: '♪'; }
        .fa-envelope::before { content: '✉'; }
        .fa-instagram::before { content: 'IG'; }
        .fa-mixcloud::before { content: 'MC'; }
        .fa-soundcloud::before { content: 'SC'; }
        .fa-youtube::before { content: 'YT'; }
    `;
    document.head.appendChild(style);
}

// 聯絡表單降級方案
function provideFallbackContactForm() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showGothicNotification('EmailJS 服務暫時無法使用，請直接聯絡 Instagram @redshou_89', 'error');
        });
    }
}

// 字體降級方案
function provideFallbackFonts() {
    const style = document.createElement('style');
    style.textContent = `
        body, * {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft YaHei", sans-serif !important;
        }
    `;
    document.head.appendChild(style);
}

// 重試失敗的資源
function retryFailedResources() {
    // 重試載入圖片
    document.querySelectorAll('.image-placeholder').forEach(placeholder => {
        const retryBtn = placeholder.querySelector('.retry-btn');
        if (retryBtn) {
            retryBtn.click();
        }
    });
    
    // 重新檢查外部資源
    setTimeout(() => {
        monitorExternalResources();
    }, 2000);
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

// 等待假動畫完成再隱藏 - 優化載入時間
function waitForAnimationComplete() {
    // 假動畫播放 1.5 秒，提升感知速度
    timerManager.setTimeout(() => {
        hideLoader();
    }, 1800, 'loader_animation');
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
timerManager.setTimeout(() => {
    if (!isLoaded) {
        hideLoader();
    }
}, 5000, 'emergency_loader_fallback');

// 極速懶加載系統 + 錯誤處理
function addLazyLoadingToImages() {
    // 處理所有圖片
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        // 為非關鍵圖片設定懶加載
        if (!img.src.includes('logo') && !img.closest('.hero-image') && !img.closest('.nav-brand')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // 添加錯誤處理
        addImageErrorHandling(img, index);
    });
}

// 圖片載入錯誤處理系統
function addImageErrorHandling(img, index) {
    // 設定載入超時
    const { id: timeoutId } = timerManager.setTimeout(() => {
        if (!img.complete) {
            handleImageError(img, '載入超時');
        }
    }, 10000, `image_timeout_${index}`); // 10秒超時
    
    // 載入成功處理
    img.addEventListener('load', () => {
        timerManager.clearTimer(timeoutId);
        img.style.opacity = '1';
    });
    
    // 載入錯誤處理
    img.addEventListener('error', (e) => {
        timerManager.clearTimer(timeoutId);
        handleImageError(img, '載入失敗');
    });
    
    // 初始設定
    img.style.transition = 'opacity 0.3s ease';
    img.style.opacity = '0.5';
}

// 處理圖片載入錯誤
function handleImageError(img, errorType) {
    const parent = img.parentElement;
    
    // 創建替代內容
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = `
        <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>圖片${errorType}</span>
            <button onclick="retryImageLoad(this)" class="retry-btn">重試</button>
        </div>
    `;
    
    placeholder.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${img.offsetWidth || 300}px;
        height: ${img.offsetHeight || 200}px;
        background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
        border: 2px dashed #666;
        color: #999;
        text-align: center;
        font-family: inherit;
    `;
    
    // 儲存原始圖片資訊
    placeholder.dataset.originalSrc = img.src;
    placeholder.dataset.originalAlt = img.alt;
    
    // 替換圖片
    parent.replaceChild(placeholder, img);
    
    // 記錄錯誤
    console.warn(`圖片載入${errorType}:`, img.src);
}

// 重試載入圖片
function retryImageLoad(button) {
    const placeholder = button.closest('.image-placeholder');
    const originalSrc = placeholder.dataset.originalSrc;
    const originalAlt = placeholder.dataset.originalAlt;
    
    // 創建新圖片元素
    const newImg = document.createElement('img');
    newImg.src = originalSrc;
    newImg.alt = originalAlt;
    
    // 添加重試標記
    newImg.src = originalSrc + (originalSrc.includes('?') ? '&' : '?') + 'retry=' + Date.now();
    
    // 顯示載入中狀態
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    
    // 重新添加錯誤處理
    addImageErrorHandling(newImg, 0);
    
    // 載入成功後替換
    newImg.addEventListener('load', () => {
        placeholder.parentNode.replaceChild(newImg, placeholder);
    });
    
    // 載入失敗則恢復按鈕
    newImg.addEventListener('error', () => {
        button.innerHTML = '重試';
        button.disabled = false;
    });
}


// Video Background Initialization - 大幅優化載入速度
function initializeVideoBackground() {
    const video = document.getElementById('bgVideo');
    const videoSource = document.getElementById('videoSource');
    const fallbackBg = document.getElementById('fallbackBg');
    
    // 先顯示備用背景，避免載入延遲
    if (fallbackBg) fallbackBg.style.display = 'block';
    
    // 檢查網路連接狀況和裝置類型
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 如果是慢速連接或行動裝置，跳過影片載入
    if (isSlowConnection || isMobile) {
        showFallbackBackground();
        return;
    }
    
    // 檢查影片來源
    if (!videoSource.src || videoSource.src === '' || !videoSource.src.includes('background-video.mp4')) {
        showFallbackBackground();
        return;
    }
    
    // 大幅延遲載入影片，優先載入關鍵內容
    setTimeout(() => {
        // 設定影片品質和載入優化
        video.preload = 'metadata'; // 只載入元數據，不預載影片
        video.poster = ''; // 移除poster減少請求
        
        // 處理影片載入成功
        video.addEventListener('canplay', () => {
            video.style.display = 'block';
            if (fallbackBg) fallbackBg.style.display = 'none';
        });
        
        // 處理影片載入失敗或超時
        video.addEventListener('error', () => {
            showFallbackBackground();
        });
        
        // 設定載入超時保護
        const loadTimeout = setTimeout(() => {
            showFallbackBackground();
        }, 8000); // 8秒後強制使用備用背景
        
        video.addEventListener('loadeddata', () => {
            clearTimeout(loadTimeout);
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
    }, 2000); // 延遲 2秒載入影片，讓頁面先完全載入
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
            if (element.innerHTML.includes('<br>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 更新 placeholder 翻譯
    const elementsWithPlaceholder = document.querySelectorAll('[data-translate-placeholder]');
    elementsWithPlaceholder.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // 更新 HTML lang 屬性
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    
    // 更新 meta 標籤
    updateMetaTags(lang);
    
    // 重新生成日期選項以反映語言變更
    generateDateOptions();
}

// ===== DYNAMIC SEO SYSTEM =====
class DynamicSEO {
    constructor() {
        this.sections = {
            'home': {
                zh: {
                    title: 'DJ REDSHoU | 專業EDM・Hip Hop DJ | 台北夜生活 | 國際演出',
                    description: 'DJ REDSHoU - 來自花蓮阿美族的專業DJ，專精EDM與Hip Hop音樂。合作過Jay Park、Lil Mosey等國際藝人。'
                },
                en: {
                    title: 'DJ REDSHoU | Professional EDM・Hip Hop DJ | Taipei Nightlife',
                    description: 'DJ REDSHoU - Professional DJ from Hualien, Taiwan, specializing in EDM and Hip Hop. Collaborated with Jay Park, Lil Mosey and other international artists.'
                }
            },
            'about': {
                zh: {
                    title: '關於 DJ REDSHoU | 阿美族DJ | 花蓮玉里 | 音樂之路',
                    description: '了解DJ REDSHoU的音樂歷程，從花蓮玉里阿美族血液中的原古之力，到台北夜生活的專業DJ。'
                },
                en: {
                    title: 'About DJ REDSHoU | Amis Tribe DJ | Hualien Taiwan | Music Journey',
                    description: 'Learn about DJ REDSHoU\'s musical journey from the ancient Amis tribal roots in Hualien to becoming a professional DJ in Taipei nightlife.'
                }
            },
            'music': {
                zh: {
                    title: 'DJ REDSHoU 最新作品 | Mixtape系列 | EDM Hip Hop音樂',
                    description: '聆聽DJ REDSHoU最新Mixtape作品，包含EDM、Hip Hop精選混音，展現專業DJ技巧與音樂創意。'
                },
                en: {
                    title: 'DJ REDSHoU Latest Works | Mixtape Series | EDM Hip Hop Music',
                    description: 'Listen to DJ REDSHoU\'s latest Mixtape works featuring EDM and Hip Hop selections, showcasing professional DJ skills and musical creativity.'
                }
            },
            'gallery': {
                zh: {
                    title: 'DJ REDSHoU 演出照片 | 現場表演 | 夜店活動紀錄',
                    description: '瀏覽DJ REDSHoU精彩演出照片，包含與國際藝人合作、夜店表演、音樂節活動等珍貴影像紀錄。'
                },
                en: {
                    title: 'DJ REDSHoU Performance Gallery | Live Shows | Club Events',
                    description: 'Browse DJ REDSHoU\'s performance photos including collaborations with international artists, club performances, and music festival events.'
                }
            },
            'contact': {
                zh: {
                    title: 'DJ REDSHoU 聯絡預訂 | 演出邀請 | 專業DJ服務',
                    description: 'DJ REDSHoU演出預訂，提供夜店表演、私人派對、企業活動等專業DJ服務。24小時內回覆，歡迎洽詢檔期。'
                },
                en: {
                    title: 'DJ REDSHoU Contact & Booking | Performance Inquiry | Professional DJ Services',
                    description: 'Book DJ REDSHoU for club performances, private parties, corporate events and more. Professional DJ services with 24-hour response guarantee.'
                }
            }
        };
        
        this.currentSection = 'home';
        this.currentLang = 'zh';
        
        this.initSectionObserver();
    }
    
    initSectionObserver() {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    this.updatePageMetadata(entry.target.id);
                }
            });
        }, {
            threshold: [0.3],
            rootMargin: '-10% 0px -10% 0px'
        });
        
        sections.forEach(section => observer.observe(section));
    }
    
    updatePageMetadata(sectionId) {
        if (this.currentSection === sectionId) return;
        
        this.currentSection = sectionId;
        const sectionData = this.sections[sectionId];
        
        if (!sectionData) return;
        
        const { title, description } = sectionData[this.currentLang];
        
        // 更新頁面標題
        document.title = title;
        
        // 更新Meta描述
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', description);
        
        // 更新OG標籤
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
        if (ogDesc) ogDesc.setAttribute('content', description);
        
        // 更新Twitter卡片
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);
        if (twitterDesc) twitterDesc.setAttribute('content', description);
        
        // Console log for debugging
        console.log(`📍 Section changed: ${sectionId} (${this.currentLang})`);
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        this.updatePageMetadata(this.currentSection);
    }
}

// 全局動態SEO管理器
const dynamicSEO = new DynamicSEO();

// ===== RESPONSIVE ENHANCEMENT SYSTEM =====
class ResponsiveManager {
    constructor() {
        this.breakpoints = {
            mobile: 768,
            tablet: 1024,
            desktop: 1440,
            ultrawide: 1920
        };
        
        this.currentBreakpoint = this.getCurrentBreakpoint();
        this.orientation = this.getOrientation();
        
        this.init();
    }
    
    init() {
        this.setupOrientationListener();
        this.setupViewportListener();
        this.optimizeForCurrentDevice();
        this.handleTouchDevices();
    }
    
    getCurrentBreakpoint() {
        const width = window.innerWidth;
        
        if (width <= this.breakpoints.mobile) return 'mobile';
        if (width <= this.breakpoints.tablet) return 'tablet';
        if (width <= this.breakpoints.desktop) return 'desktop';
        if (width <= this.breakpoints.ultrawide) return 'large';
        return 'ultrawide';
    }
    
    getOrientation() {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }
    
    setupOrientationListener() {
        const handleOrientationChange = () => {
            const newOrientation = this.getOrientation();
            const newBreakpoint = this.getCurrentBreakpoint();
            
            if (newOrientation !== this.orientation || newBreakpoint !== this.currentBreakpoint) {
                this.orientation = newOrientation;
                this.currentBreakpoint = newBreakpoint;
                
                // 延遲執行以等待螢幕旋轉完成
                timerManager.setTimeout(() => {
                    this.optimizeForCurrentDevice();
                    this.adjustLayoutForOrientation();
                }, 300, 'orientation_change');
            }
        };
        
        window.addEventListener('orientationchange', handleOrientationChange);
        window.addEventListener('resize', handleOrientationChange);
    }
    
    setupViewportListener() {
        // 處理移動端視窗高度變化（地址欄顯示/隱藏）
        let initialHeight = window.innerHeight;
        
        const handleViewportChange = () => {
            const currentHeight = window.innerHeight;
            const heightDiff = Math.abs(initialHeight - currentHeight);
            
            // 如果高度變化超過100px（可能是地址欄變化）
            if (heightDiff > 100) {
                this.adjustForAddressBar(currentHeight < initialHeight);
            }
        };
        
        window.addEventListener('resize', handleViewportChange);
        window.addEventListener('scroll', handleViewportChange);
    }
    
    optimizeForCurrentDevice() {
        document.body.classList.remove('mobile', 'tablet', 'desktop', 'large', 'ultrawide');
        document.body.classList.add(this.currentBreakpoint);
        
        // 根據設備類型調整
        switch (this.currentBreakpoint) {
            case 'mobile':
                this.optimizeMobile();
                break;
            case 'tablet':
                this.optimizeTablet();
                break;
            case 'ultrawide':
                this.optimizeUltrawide();
                break;
            default:
                this.optimizeDesktop();
        }
        
        console.log(`📱 Device optimized: ${this.currentBreakpoint} (${this.orientation})`);
    }
    
    optimizeMobile() {
        // 移動端特殊優化
        this.enableTouchOptimizations();
        this.adjustMobileNavigation();
        this.optimizeMobileImages();
    }
    
    optimizeTablet() {
        // 平板優化
        this.adjustTabletLayout();
        this.enableTouchOptimizations();
    }
    
    optimizeUltrawide() {
        // 超寬屏優化
        this.adjustUltrawideLayout();
        this.enableHighResolutionFeatures();
    }
    
    optimizeDesktop() {
        // 桌面優化
        this.enableDesktopFeatures();
    }
    
    adjustLayoutForOrientation() {
        if (this.orientation === 'landscape' && this.currentBreakpoint === 'tablet') {
            // 平板橫屏特殊處理
            this.enableTabletLandscapeMode();
        }
    }
    
    enableTouchOptimizations() {
        // 增大觸摸目標
        document.body.classList.add('touch-device');
        
        // 為小元素添加更大的觸摸區域
        const smallButtons = document.querySelectorAll('.lang-btn, .social-link');
        smallButtons.forEach(btn => {
            btn.style.minHeight = '44px';
            btn.style.minWidth = '44px';
        });
    }
    
    adjustMobileNavigation() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            // 移動端導航欄置頂固定
            navbar.classList.add('mobile-fixed');
        }
    }
    
    optimizeMobileImages() {
        // 為移動端提供較小的圖片（如果可用）
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src.includes('i.ibb.co')) {
                // 可以在這裡實現圖片尺寸調整邏輯
                img.loading = 'lazy';
            }
        });
    }
    
    enableTabletLandscapeMode() {
        document.body.classList.add('tablet-landscape');
        
        // 調整Hero區域佈局
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('landscape-layout');
        }
    }
    
    adjustUltrawideLayout() {
        // 超寬屏幕內容居中限制寬度
        const sections = document.querySelectorAll('.section-container');
        sections.forEach(section => {
            section.style.maxWidth = '1400px';
            section.style.margin = '0 auto';
        });
    }
    
    enableHighResolutionFeatures() {
        // 高分辨率螢幕特殊功能
        if (window.devicePixelRatio >= 2) {
            document.body.classList.add('high-dpi');
        }
    }
    
    adjustForAddressBar(isHidden) {
        const hero = document.querySelector('.hero');
        if (hero) {
            if (isHidden) {
                hero.style.minHeight = '100vh';
            } else {
                hero.style.minHeight = 'calc(100vh - 60px)';
            }
        }
    }
    
    handleTouchDevices() {
        // 檢測觸摸設備
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            document.body.classList.add('touch-device');
            this.enableTouchGestures();
        } else {
            document.body.classList.add('no-touch');
            this.enableMouseOptimizations();
        }
    }
    
    enableTouchGestures() {
        // 為相簿添加滑動手勢（簡單示例）
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid && this.currentBreakpoint === 'mobile') {
            let startX = 0;
            let scrollLeft = 0;
            
            galleryGrid.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX;
                scrollLeft = galleryGrid.scrollLeft;
            });
            
            galleryGrid.addEventListener('touchmove', (e) => {
                const x = e.touches[0].pageX;
                const walk = (x - startX) * 2;
                galleryGrid.scrollLeft = scrollLeft - walk;
            });
        }
    }
    
    enableMouseOptimizations() {
        // 桌面端滑鼠優化
        document.body.classList.add('mouse-device');
        
        // 為hover效果進行優化
        const cards = document.querySelectorAll('.contact-card, .stat-card, .gallery-item');
        cards.forEach(card => {
            card.classList.add('hover-enabled');
        });
    }
    
    enableDesktopFeatures() {
        // 桌面端特殊功能
        this.enableKeyboardShortcuts();
    }
    
    enableKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // 桌面端鍵盤快捷鍵
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '2':
                        e.preventDefault();
                        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '3':
                        e.preventDefault();
                        document.querySelector('#music').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '4':
                        e.preventDefault();
                        document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '5':
                        e.preventDefault();
                        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                        break;
                }
            }
        });
    }
}

// 全局響應式管理器
const responsiveManager = new ResponsiveManager();

// ===== MICROSOFT CLARITY ENHANCEMENTS =====
class ClarityAnalytics {
    constructor() {
        this.isInitialized = false;
        this.init();
    }
    
    init() {
        // 等待Clarity載入
        if (typeof clarity !== 'undefined') {
            this.isInitialized = true;
            this.setupCustomTags();
            this.setupUserInteractionTracking();
        } else {
            // 如果Clarity還沒載入，等待一下再嘗試
            timerManager.setTimeout(() => {
                this.init();
            }, 1000, 'clarity_init');
        }
    }
    
    setupCustomTags() {
        if (!this.isInitialized) return;
        
        try {
            // 設置自定義標籤
            clarity('set', 'page_type', 'dj_portfolio');
            clarity('set', 'site_section', 'main');
            clarity('set', 'user_type', 'visitor');
            clarity('set', 'device_type', responsiveManager.currentBreakpoint);
            clarity('set', 'language', localStorage.getItem('preferred-language') || 'zh');
            
            console.log('✅ Clarity custom tags set successfully');
        } catch (error) {
            console.warn('⚠️ Clarity custom tags failed:', error);
        }
    }
    
    setupUserInteractionTracking() {
        if (!this.isInitialized) return;
        
        // 追蹤重要的用戶互動
        this.trackNavigationClicks();
        this.trackLanguageSwitch();
        this.trackFormInteractions();
        this.trackMusicInteractions();
        this.trackSocialClicks();
    }
    
    trackNavigationClicks() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const section = link.getAttribute('href').replace('#', '');
                this.sendEvent('navigation_click', { section });
            });
        });
    }
    
    trackLanguageSwitch() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const language = btn.getAttribute('data-lang');
                this.sendEvent('language_switch', { language });
                clarity('set', 'language', language);
            });
        });
    }
    
    trackFormInteractions() {
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            // 表單開始填寫
            bookingForm.addEventListener('focusin', (e) => {
                this.sendEvent('form_start', { field: e.target.name });
            }, { once: true });
            
            // 表單提交
            bookingForm.addEventListener('submit', (e) => {
                const formData = new FormData(bookingForm);
                const eventType = formData.get('event-type');
                this.sendEvent('booking_submit', { event_type: eventType });
            });
        }
    }
    
    trackMusicInteractions() {
        // 追蹤音樂播放互動
        document.querySelectorAll('.play-btn, .mixcloud-link, .youtube-link').forEach(element => {
            element.addEventListener('click', (e) => {
                const musicType = element.classList.contains('mixcloud-link') ? 'mixcloud' : 
                                element.classList.contains('youtube-link') ? 'youtube' : 'play_button';
                this.sendEvent('music_interaction', { type: musicType });
            });
        });
    }
    
    trackSocialClicks() {
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = this.getSocialPlatform(link.href);
                this.sendEvent('social_click', { platform });
            });
        });
    }
    
    getSocialPlatform(url) {
        if (url.includes('instagram')) return 'instagram';
        if (url.includes('mixcloud')) return 'mixcloud';
        if (url.includes('soundcloud')) return 'soundcloud';
        return 'other';
    }
    
    sendEvent(eventName, properties = {}) {
        if (!this.isInitialized) return;
        
        try {
            // 使用Clarity的自定義事件
            clarity('event', eventName, properties);
            console.log(`📊 Clarity event: ${eventName}`, properties);
        } catch (error) {
            console.warn('⚠️ Clarity event failed:', error);
        }
    }
    
    // 追蹤頁面停留時間
    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            this.sendEvent('page_time', { seconds: timeOnPage });
        });
    }
    
    // 追蹤滾動深度
    trackScrollDepth() {
        let maxScrollDepth = 0;
        
        window.addEventListener('scroll', () => {
            const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
                
                // 每25%發送一次事件
                if (scrollDepth >= 25 && scrollDepth < 50 && maxScrollDepth >= 25) {
                    this.sendEvent('scroll_depth', { depth: 25 });
                } else if (scrollDepth >= 50 && scrollDepth < 75 && maxScrollDepth >= 50) {
                    this.sendEvent('scroll_depth', { depth: 50 });
                } else if (scrollDepth >= 75 && scrollDepth < 100 && maxScrollDepth >= 75) {
                    this.sendEvent('scroll_depth', { depth: 75 });
                } else if (scrollDepth >= 100 && maxScrollDepth >= 100) {
                    this.sendEvent('scroll_depth', { depth: 100 });
                }
            }
        });
    }
}

// 初始化Clarity分析
const clarityAnalytics = new ClarityAnalytics();

// 延遲啟動進階追蹤功能
timerManager.setTimeout(() => {
    if (clarityAnalytics.isInitialized) {
        clarityAnalytics.trackTimeOnPage();
        clarityAnalytics.trackScrollDepth();
        console.log('📊 Advanced Clarity tracking enabled');
    }
}, 2000, 'clarity_advanced_init');

function updateMetaTags(lang) {
    // 更新語言並觸發SEO更新
    dynamicSEO.updateLanguage(lang);
    
    // 更新HTML lang屬性
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
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




// Instagram 3D icon 功能已移除

// ===== Spline 3D 場景處理 =====
document.addEventListener('DOMContentLoaded', function() {
    const splineViewer = document.querySelector('spline-viewer');
    
    if (splineViewer) {
        // 確保 Spline viewer 有適當的樣式
        splineViewer.style.width = '100%';
        splineViewer.style.height = '100%';
        splineViewer.style.display = 'block';
    }
    
    // 初始化 EmailJS
    initializeEmailJS();
    
    // 初始化 Booking 表單功能
    initializeBookingForm();
    
    // 生成日期選項
    generateDateOptions();
});

// ===== EmailJS 初始化 =====
function initializeEmailJS() {
    // 檢查 EmailJS v4 是否已載入
    if (typeof emailjs !== 'undefined') {
        // 初始化 EmailJS v4
        emailjs.init({
            publicKey: 'nWjVZ2ZP-kQNz85AU'
        });
    }
}

// ===== Booking 表單處理 =====
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    // 表單提交處理
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 獲取表單數據
        const formData = new FormData(this);
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const phone = formData.get('phone')?.trim();
        const eventType = formData.get('event-type');
        const eventYear = formData.get('event-year');
        const eventMonth = formData.get('event-month');
        const eventDay = formData.get('event-day');
        const location = formData.get('location')?.trim();
        const details = formData.get('details')?.trim();

        // 驗證必填欄位
        if (!name || !email || !phone || !eventType || !eventYear || !eventMonth || !eventDay || !location || !details) {
            showGothicNotification('請填寫所有必填欄位以完成預約 ⚡', 'error');
            highlightEmptyFields();
            return;
        }

        // 驗證電子郵件格式
        if (!isValidEmail(email)) {
            showGothicNotification('請提供有效的電子郵件地址 📧', 'error');
            return;
        }

        // 驗證電話號碼
        if (!isValidPhone(phone)) {
            showGothicNotification('請提供有效的電話號碼 📱', 'error');
            return;
        }

        // 驗證日期（檢查選擇的日期是否為未來日期）
        const selectedDate = new Date(eventYear, eventMonth - 1, eventDay);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate <= today) {
            showGothicNotification('活動日期必須是未來的日期 📅', 'error');
            return;
        }

        // 顯示提交中狀態
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';

        // 使用 EmailJS 發送郵件
        sendBookingEmail({
            name,
            email,
            phone,
            eventType,
            eventYear,
            eventMonth,
            eventDay,
            location,
            details
        }).then(() => {
            // 成功提交
            showGothicNotification('🎉 預約申請已成功送出！我們將於24小時內回覆您', 'success');
            
            // 重置表單
            bookingForm.reset();
            generateDateOptions(); // 重新生成日期選項
            
            // 恢復按鈕狀態
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // 創建慶祝效果
            createBookingCelebration();
            
            // 滾動到頂部
            setTimeout(() => {
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 1000);
        }).catch((error) => {
            console.error('Email sending failed:', error);
            
            // 發送失敗處理
            showGothicNotification('❌ 發送失敗，請稍後再試或直接聯絡我們', 'error');
            
            // 恢復按鈕狀態
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    });

    // 實時表單驗證
    addRealTimeValidation();
}

// EmailJS v4 發送郵件函數
async function sendBookingEmail(formData) {
    // 檢查 EmailJS v4 是否可用
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
    }

    const eventDate = `${formData.eventYear}年${formData.eventMonth}月${formData.eventDay}日`;
    const eventTypeNames = {
        'nightclub': '夜店表演',
        'private': '私人派對', 
        'corporate': '企業活動',
        'festival': '音樂節',
        'wedding': '婚禮派對',
        'other': '其他'
    };
    
    const templateParams = {
        to_email: 'z22693518@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        event_type: eventTypeNames[formData.eventType] || formData.eventType,
        event_date: eventDate,
        location: formData.location,
        details: formData.details,
        message: `
🎵 DJ REDSHoU 演出預訂申請

👤 客戶資訊：
姓名/公司：${formData.name}
聯絡信箱：${formData.email}
聯絡電話：${formData.phone}

🎉 活動詳情：
演出類型：${eventTypeNames[formData.eventType] || formData.eventType}
活動日期：${eventDate}
活動地點：${formData.location}

📝 活動詳情：
${formData.details}

---
此訊息來自 DJ REDSHoU 官方網站
        `.trim()
    };

    // 使用 EmailJS v4 發送郵件到 z22693518@gmail.com
    return emailjs.send('service_g999a66', 'template_wm6bzkj', templateParams);
}

// 電話號碼驗證
function isValidPhone(phone) {
    const phoneRegex = /^(\+?886\s?)?[\-\s]?0?9\d{8}$|^(\+?886\s?)?[\-\s]?\d{2,3}[\-\s]?\d{3,4}[\-\s]?\d{3,4}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// 高亮空白欄位
function highlightEmptyFields() {
    const requiredFields = document.querySelectorAll('#bookingForm [required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.border = '2px solid #dc143c';
            field.style.boxShadow = '0 0 10px rgba(220, 20, 60, 0.3)';
            
            setTimeout(() => {
                field.style.border = '';
                field.style.boxShadow = '';
            }, 3000);
        }
    });
}

// 實時表單驗證
function addRealTimeValidation() {
    const emailField = document.querySelector('#bookingForm input[name="email"]');
    const phoneField = document.querySelector('#bookingForm input[name="phone"]');

    // 電子郵件驗證
    if (emailField) {
        emailField.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.border = '2px solid #dc143c';
                showFieldError(this, '請輸入有效的電子郵件地址');
            } else {
                this.style.border = '';
                hideFieldError(this);
            }
        });
    }

    // 電話號碼驗證
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            if (this.value && !isValidPhone(this.value)) {
                this.style.border = '2px solid #dc143c';
                showFieldError(this, '請輸入有效的電話號碼');
            } else {
                this.style.border = '';
                hideFieldError(this);
            }
        });
    }
}

// 顯示欄位錯誤
function showFieldError(field, message) {
    hideFieldError(field);
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #dc143c;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        opacity: 0.8;
    `;
    
    field.parentNode.appendChild(errorElement);
}

// 隱藏欄位錯誤
function hideFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// 預約成功慶祝效果
function createBookingCelebration() {
    const colors = ['#8b0000', '#dc143c', '#c0c0c0', '#ffd700'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = ['🎵', '🎧', '💫', '⚡', '🎉'][Math.floor(Math.random() * 5)];
            particle.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 10000;
                animation: bookingBurst 4s ease-out forwards;
                user-select: none;
            `;
            
            const angle = (i * 12) * (Math.PI / 180);
            const velocity = 200 + Math.random() * 150;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--vx', `${vx}px`);
            particle.style.setProperty('--vy', `${vy}px`);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 4000);
        }, i * 80);
    }
}

// 添加預約慶祝動畫樣式
const bookingAnimationStyle = document.createElement('style');
bookingAnimationStyle.textContent = `
    @keyframes bookingBurst {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        20% {
            transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--vx)), calc(-50% + var(--vy))) scale(0.3) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(bookingAnimationStyle);

// 全局變數來追蹤是否已經初始化
let dateOptionsInitialized = false;

// 生成日期選項
function generateDateOptions() {
    const yearSelect = document.querySelector('#eventYear');
    const monthSelect = document.querySelector('#eventMonth');
    const daySelect = document.querySelector('#eventDay');
    
    if (!yearSelect || !monthSelect || !daySelect) return;
    
    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // 生成年份選項 (今年和明年)
    generateYearOptions(yearSelect, currentYear);
    
    // 生成月份選項
    generateMonthOptions(monthSelect, currentLang);
    
    // 只在第一次初始化時添加事件監聽器
    if (!dateOptionsInitialized) {
        yearSelect.addEventListener('change', () => updateDayOptions());
        monthSelect.addEventListener('change', () => updateDayOptions());
        dateOptionsInitialized = true;
    }
    
    // 不設置預設值，讓用戶手動選擇
    // updateDayOptions(); // 不立即更新，等用戶選擇年份和月份後再更新
}

// 生成年份選項
function generateYearOptions(yearSelect, currentYear) {
    // 清空選項但保留 placeholder
    const placeholder = yearSelect.querySelector('option[value=""]');
    yearSelect.innerHTML = '';
    if (placeholder) yearSelect.appendChild(placeholder);
    
    // 添加今年和明年，保持value和textContent一致
    for (let year = currentYear; year <= currentYear + 1; year++) {
        const option = document.createElement('option');
        option.value = `${year}年`;
        option.textContent = `${year} 年`;
        yearSelect.appendChild(option);
    }
}

// 生成月份選項
function generateMonthOptions(monthSelect, currentLang) {
    // 清空選項但保留 placeholder
    const placeholder = monthSelect.querySelector('option[value=""]');
    monthSelect.innerHTML = '';
    if (placeholder) monthSelect.appendChild(placeholder);
    
    // 正確的月份對應
    const monthNames = {
        'zh': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        'en': ['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December']
    };
    
    // 確保使用正確的語言
    const names = monthNames[currentLang] || monthNames['zh'];
    
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = names[month - 1];
        option.textContent = names[month - 1];
        monthSelect.appendChild(option);
    }
}

// 更新日期選項
function updateDayOptions() {
    const yearSelect = document.querySelector('#eventYear');
    const monthSelect = document.querySelector('#eventMonth');
    const daySelect = document.querySelector('#eventDay');
    
    if (!yearSelect || !monthSelect || !daySelect) return;
    
    // 解析年份和月份值
    const selectedYear = parseInt(yearSelect.value.replace('年', ''));
    
    // 解析月份值（可能是中文或英文）
    let selectedMonth = 0;
    if (monthSelect.value) {
        if (monthSelect.value.includes('月')) {
            selectedMonth = parseInt(monthSelect.value.replace('月', ''));
        } else {
            // 處理英文月份
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                               'July', 'August', 'September', 'October', 'November', 'December'];
            selectedMonth = monthNames.indexOf(monthSelect.value) + 1;
        }
    }
    const today = new Date();
    
    // 保存用戶當前選擇的日期
    const currentSelectedDay = daySelect.value;
    
    // 保存原有的 placeholder
    const placeholder = daySelect.querySelector('option[value=""]');
    const placeholderText = placeholder ? placeholder.textContent : '日期';
    
    // 清空日期選項
    daySelect.innerHTML = '';
    
    // 重新添加 placeholder
    const newPlaceholder = document.createElement('option');
    newPlaceholder.value = '';
    newPlaceholder.textContent = placeholderText;
    newPlaceholder.setAttribute('data-translate', 'day-placeholder');
    daySelect.appendChild(newPlaceholder);
    
    // 如果沒有選擇年份和月份，不生成日期
    if (!selectedYear || !selectedMonth) {
        return;
    }
    
    // 獲取該月的天數
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    
    // 決定開始日期
    let startDay = 1;
    
    // 如果是當年當月，從明天開始
    if (selectedYear === today.getFullYear() && selectedMonth === (today.getMonth() + 1)) {
        startDay = today.getDate() + 1;
    }
    
    // 如果沒有可選日期（例如今天是月底），顯示所有日期但標記為未來預訂
    if (startDay > daysInMonth) {
        startDay = 1;
    }
    
    // 生成日期選項，確保至少有一個可選
    for (let day = startDay; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = `${day}日`;
        option.textContent = `${day} 日`;
        daySelect.appendChild(option);
    }
    
    // 如果沒有任何日期被添加，添加一個提示
    if (daySelect.children.length === 1) {
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = `${day}日`;
            option.textContent = `${day} 日`;
            daySelect.appendChild(option);
        }
    }
    
    // 如果之前有選擇的日期且該日期仍然有效，恢復選擇
    if (currentSelectedDay && currentSelectedDay !== '') {
        const dayExists = daySelect.querySelector(`option[value="${currentSelectedDay}"]`);
        if (dayExists) {
            daySelect.value = currentSelectedDay;
        }
    }
}
