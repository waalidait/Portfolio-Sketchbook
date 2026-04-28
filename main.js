 window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const paperSheet = document.querySelector('.paper-sheet'); // Container ديالك
    const emojiWrapper = document.querySelector('.emoji-wrapper');

    setTimeout(() => {
        // 1. خبي الـ Loader
        if (loader) loader.style.display = 'none';
        
        // 2. بَيّن الصفحة (إيلا كنتي داير ليها display: none ف الأول)
        if (paperSheet) paperSheet.style.display = 'block'; 
        
        // 3. طلق الـ Animation ديال الـ Emojis
        if (emojiWrapper) emojiWrapper.classList.add('start-anim');
        
    }, 1000); // هاد 2000ms هي 2 ثواني ديال الـ Loader
});

// هاد الكود زيدو وسط الـ setTimeout لي عندك فـ main.js أو براه
const btn = document.querySelector('.icon');

if (btn) {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // غير كتوصل ليها كيزيد الكلاس
        }
    });
}, { threshold: 0.2 }); // 0.2 كتعني غير تبان منها 20% تبدا الأنميشن

observer.observe(document.querySelector('.about'));

  const observerOptions = {
    threshold: 0.8 // كيتسنى حتى تبان 80% من الكارط عاد يبدا
};

 const observerOptionse = {
    threshold: 0.2 // خليناها 0.2 باش غير تخرج شوية من الشاشة يبدا يمسح
};

const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const spans = entry.target.querySelectorAll('span');

        if (entry.isIntersecting) {
            // فاش كتدخل للكادر: كيبدا يلون
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, index * 600); 
            });
        } else {
            // فاش كتخرج من الكادر (طلعتي لفوق أو هبطتي بزاف): 
            // كنمسحو الكلاس باش يرجع الـ background-size لـ 0
            spans.forEach((span) => {
                span.classList.remove('active');
            });
        }
    });
}, observerOptions);

observers.observe(document.querySelector('.text-box'));




 
     
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // فاش توصل ليها كتحل
                entry.target.classList.add('is-open');
            } else {
                // فاش تفوتها (ترجع لـ اللور أو تهبط بزاف) كتسد
                entry.target.classList.remove('is-open');
            }
        });
    }, {
        // threshold 0.2 كتعني غير يبان منها 20% تبدا تحل، باش ما تبقاش معطلة
        threshold: 0.2 
    });

    const paper = document.querySelector('.folding-paper');
    observer2.observe(paper);


     
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const paper = container.querySelector('.folding-paper');

            if (entry.isIntersecting) {
                // 1. طلع الخريطة كاملة من التحت
                container.classList.add('show-up');
                // 2. حل الورقة
                paper.classList.add('is-open');
            } 
        });
    }, {
        threshold: 0.3 // يبدا يبان 30% منها عاد تخدم الحركة
    });

    // كنعلمو الـ JS يعس على الـ container الكبير
    const container = document.querySelector('.main-container');
    observer3.observe(container);
 
 

     
    const stripObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // فاش توصل ليه كيطلع
                entry.target.classList.add('show-strip');
            }  
        });
    }, {
        threshold: 0.5 // ما يبدا يطلع حتى يبان نصو ف الشاشة
    });

    // كنعلمو الـ JS يعس على الـ Strip
    const journeyStrip = document.querySelector('.journey-full-strip');
    stripObserver.observe(journeyStrip);
 

    const journeyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-strip');
        }
    });
}, { threshold: 0.2 });

journeyObserver.observe(document.querySelector('.journey-full-strip'));



let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // فاش تكون هابط كيتخبا لفوق
        header.classList.add('header-hidden');
    } else {
        // فاش تبدا تطلع كيبان
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});


document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault(); // كنحبسو السلوك العادي
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // السكرول السلس
    });
});


  
 const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let lastMouseX = 0;
let lastMouseY = 0;

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // تحريك العناصر (خفيف بـ transform)
    dot.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
    outline.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;

    // "القالب": كنحسبو شحال تحركت الماوس، إيلا تحركت كتر من 5px عاد نكريو الدخان
    const distance = Math.hypot(posX - lastMouseX, posY - lastMouseY);

    if (distance > 5) {
        const trail = document.createElement("div");
        trail.className = "trail";
        
        // كنحطوه فـ موقع الماوس (أو استعمل rect إيلا بغيتي يتبع الدائرة بالظبط)
        trail.style.left = `${posX}px`;
        trail.style.top = `${posY}px`;

        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);

        lastMouseX = posX;
        lastMouseY = posY;
    }
});


const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // ملي كتوصل ليها، زيد الكلاس
            entry.target.classList.add('show');
        }  
    });
}, {
    threshold: 0.1 // كيبدا Animation غير كيبان 10% من الصندوق
});

// قُل للمراقب يحضي الـ wrapper
const wrapper = document.querySelector('.skills-wrapper');
observer7.observe(wrapper);



const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 }); // غادي تبدا الحركة ملي تبان نص الكلمة

// كنعلمو الـ JS يراقب الـ badge
const badge = document.querySelector('.skill-badge');
if (badge) {
    skillObserver.observe(badge);
}


const bottomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // كيبدا الـ animation غير يبان الطرف الأول ديال السيكشن
});

// قُل للمراقب يحضي الـ container التحتاني
const bottomSection = document.querySelector('.bottom-container');
if (bottomSection) {
    bottomObserver.observe(bottomSection);
}

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const contactSection = document.querySelector('.contact-section');
if (contactSection) {
    contactObserver.observe(contactSection);
}


// ── Mobile Menu Toggle ──
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        menuToggle.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when a link is tapped
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            menuToggle.textContent = '☰';
        });
    });
}


window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // كنتسناو واحد شوية باش اليوزر يشوف الأنميشن (مثلا 1.5 ثانية)
    setTimeout(() => {
        loader.classList.add('fade-out'); // كيبدا يغبر
        
        // من بعد نص ثانية (وقت الـ transition) كنحيدوه كاع من الصفحة
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 1000); 
});


/* ================================================================
   ADD THIS JS at the bottom of main.js
   Handles: auto-flip after 3s on mobile + tap to flip manually
   ================================================================ */

// ── Mobile Flip Card ──
// Only runs on screens ≤ 768px
if (window.matchMedia('(max-width: 768px)').matches) {
    const paper = document.querySelector('.folding-paper');

    if (paper) {
        // AUTO-FLIP after 3 seconds
        const autoFlipTimer = setTimeout(() => {
            paper.classList.add('mobile-flipped');
        }, 3000);

        // TAP to toggle flip manually
        paper.addEventListener('click', () => {
            // If user taps before auto-flip fires, cancel the timer
            clearTimeout(autoFlipTimer);
            paper.classList.toggle('mobile-flipped');
        });
    }
}

/*
  NOTE: The existing desktop observer code that adds `.is-open`
  will still fire on mobile because it watches .folding-paper.
  The CSS rule:
      .folding-paper.is-open { transform: rotateY(0deg) !important; }
  neutralises it, so the desktop fold won't override our flip.
*/