// Translations
const translations = {
    ar: {
        home: 'الرئيسية',
        services: 'الخدمات',
        about: 'من نحن',
        contact: 'تواصل معنا',
        heroTitle1: 'نحول أعمالك',
        heroTitle2: 'بقوة الذكاء الاصطناعي',
        heroSubtitle: 'حلول أتمتة متطورة ووكلاء ذكاء اصطناعي مخصصة لتحسين كفاءة عملك وزيادة إنتاجيتك',
        startNow: 'ابدأ الآن',
        discoverServices: 'اكتشف خدماتنا',
        servicesTitle: 'خدماتنا',
        servicesSubtitle: 'نقدم حلول شاملة للأتمتة والذكاء الاصطناعي',
        service1Title: 'أتمتة العمليات الذكية',
        service1Desc: 'نقوم بأتمتة العمليات التجارية المعقدة باستخدام أحدث تقنيات الذكاء الاصطناعي، مما يوفر الوقت ويقلل الأخطاء.',
        service2Title: 'وكلاء الذكاء الاصطناعي',
        service2Desc: 'نطور وكلاء ذكاء اصطناعي مخصصين لخدمة العملاء، التسويق، والمبيعات لتحسين تجربة عملائك.',
        service3Title: 'استشارات تحول رقمي',
        service3Desc: 'نساعدك في رسم خريطة طريق للتحول الرقمي وتبني تقنيات الذكاء الاصطناعي في مؤسستك.',
        service4Title: 'تطوير حلول مخصصة',
        service4Desc: 'نبني حلول برمجية مخصصة تتكامل مع أنظمتك الحالية وتلبي احتياجاتك الفريدة.',
        mostDemanded: 'الأكثر طلباً',
        stat1: 'عميل راضٍ',
        stat2: 'مشروع مكتمل',
        stat3: 'نسبة الرضا %',
        stat4: 'دعم 7/24',
        aboutTitle: 'من نحن',
        aboutDesc1: 'هي شركة رائدة في مجال الأتمتة الذكية وحلول الذكاء الاصطناعي. نؤمن بقوة التكنولوجيا في تحويل الأعمال وتحسين الكفاءة التشغيلية.',
        aboutDesc2: 'مع فريق من الخبراء المتخصصين في الذكاء الاصطناعي وعلوم البيانات، نقدم حلول مبتكرة تساعد الشركات على البقاء في المقدمة في عصر التحول الرقمي.',
        contactTitle: 'تواصل معنا',
        contactSubtitle: 'نحن هنا لمساعدتك في بدء رحلة التحول الرقمي',
        address: 'العنوان',
        addressValue: 'القاهرة، مصر',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        name: 'الاسم',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        footerText: 'نحول أعمالك بقوة الذكاء الاصطناعي',
        quickLinks: 'روابط سريعة',
        ourServices: 'خدماتنا',
        copyright: 'جميع الحقوق محفوظة.',
        vision: 'رؤيتنا',
        visionText: 'أن نكون الشريك الأول للشركات في رحلة التحول الرقمي والذكاء الاصطناعي في المنطقة',
        mission: 'مهمتنا',
        missionText: 'تمكين الشركات من تحقيق أقصى استفادة من تقنيات الذكاء الاصطناعي والأتمتة'
    },
    en: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        heroTitle1: 'Transform Your Business',
        heroTitle2: 'with AI Power',
        heroSubtitle: 'Advanced automation solutions and custom AI agents to enhance your business efficiency and boost productivity',
        startNow: 'Get Started',
        discoverServices: 'Discover Services',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Comprehensive automation and AI solutions',
        service1Title: 'Smart Process Automation',
        service1Desc: 'We automate complex business processes using cutting-edge AI technology, saving time and reducing errors.',
        service2Title: 'AI Agents',
        service2Desc: 'We develop custom AI agents for customer service, marketing, and sales to enhance your customer experience.',
        service3Title: 'Digital Transformation Consulting',
        service3Desc: 'We help you create a roadmap for digital transformation and AI adoption in your organization.',
        service4Title: 'Custom Solutions Development',
        service4Desc: 'We build custom software solutions that integrate with your existing systems and meet your unique needs.',
        mostDemanded: 'Most Popular',
        stat1: 'Happy Clients',
        stat2: 'Completed Projects',
        stat3: 'Satisfaction Rate %',
        stat4: '24/7 Support',
        aboutTitle: 'About Us',
        aboutDesc1: 'is a leading company in smart automation and AI solutions. We believe in the power of technology to transform businesses and improve operational efficiency.',
        aboutDesc2: 'With a team of experts specialized in artificial intelligence and data science, we provide innovative solutions that help companies stay ahead in the digital transformation era.',
        contactTitle: 'Contact Us',
        contactSubtitle: 'We are here to help you start your digital transformation journey',
        address: 'Address',
        addressValue: 'Cairo, Egypt',
        email: 'Email',
        phone: 'Phone',
        name: 'Name',
        message: 'Your Message',
        send: 'Send Message',
        footerText: 'Transform your business with AI power',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        copyright: 'All rights reserved.',
        vision: 'Our Vision',
        visionText: 'To be the first partner for companies in their digital transformation and AI journey in the region',
        mission: 'Our Mission',
        missionText: 'Empower companies to maximize the benefits of AI and automation technologies'
    }
};

let currentLang = 'ar';

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const html = document.documentElement;
    const langBtn = document.querySelector('.lang-toggle');

    if (currentLang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.textContent = 'ع';
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.textContent = 'EN';
    }

    updateContent();
}

// Update Content Based on Language
function updateContent() {
    const t = translations[currentLang];

    // Update navigation
    document.querySelectorAll('.nav-link')[0].textContent = t.home;
    document.querySelectorAll('.nav-link')[1].textContent = t.services;
    document.querySelectorAll('.nav-link')[2].textContent = t.about;
    document.querySelectorAll('.nav-link')[3].textContent = t.contact;

    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.innerHTML = `<span class="gradient-text">${t.heroTitle1}</span><br>${t.heroTitle2}`;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelectorAll('.hero-buttons .btn')[0].textContent = t.startNow;
    document.querySelectorAll('.hero-buttons .btn')[1].textContent = t.discoverServices;

    // Update sections
    document.querySelectorAll('.section-title')[0].textContent = t.servicesTitle;
    document.querySelectorAll('.section-subtitle')[0].textContent = t.servicesSubtitle;

    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = t.service1Title;
    serviceCards[0].querySelector('p').textContent = t.service1Desc;
    serviceCards[1].querySelector('h3').textContent = t.service2Title;
    serviceCards[1].querySelector('p').textContent = t.service2Desc;
    serviceCards[2].querySelector('h3').textContent = t.service3Title;
    serviceCards[2].querySelector('p').textContent = t.service3Desc;
    serviceCards[3].querySelector('h3').textContent = t.service4Title;
    serviceCards[3].querySelector('p').textContent = t.service4Desc;

    document.querySelector('.featured-badge').textContent = t.mostDemanded;

    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.stat1;
    statLabels[1].textContent = t.stat2;
    statLabels[2].textContent = t.stat3;
    statLabels[3].textContent = t.stat4;

    // Update about section
    document.querySelectorAll('.section-title')[1].textContent = t.aboutTitle;

    // Update contact section
    document.querySelectorAll('.section-title')[2].textContent = t.contactTitle;
    document.querySelectorAll('.section-subtitle')[1].textContent = t.contactSubtitle;

    // Update form placeholders
    document.getElementById('name').placeholder = t.name;
    document.getElementById('email').placeholder = t.email;
    document.getElementById('phone').placeholder = t.phone;
    document.getElementById('message').placeholder = t.message;
    document.querySelector('.contact-form .btn').textContent = t.send;
}

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
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start);
        }
    }, 16);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate stats
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                observer.unobserve(entry.target);
            }

            // Fade in service cards
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    const serviceCards = document.querySelectorAll('.service-card');

    if (statsSection) observer.observe(statsSection);
    serviceCards.forEach(card => observer.observe(card));
});

// Form Submission
function handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, phone, message });

    // Show success message
    const form = e.target;
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
    `;
    successMessage.textContent = currentLang === 'ar'
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
        : 'Your message has been sent successfully! We will contact you soon.';

    form.appendChild(successMessage);
    form.reset();

    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
