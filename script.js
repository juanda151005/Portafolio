// ==================== NAVEGACIÓN MOBILE ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ANIMACIÓN DE BARRAS DE PROGRESO ====================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.parentElement.getBoundingClientRect();
        
        if (rect.top < window.innerHeight - 100) {
            bar.style.width = progress + '%';
        }
    });
};

// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ==================== ANIMACIÓN FADE-IN AL SCROLL ====================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos con animación
document.querySelectorAll('.skill-card, .soft-skill-item, .project-card, .contact-card, .about-text').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==================== TYPING EFFECT (OPCIONAL) ====================
// Si quieres agregar un efecto de escritura en el título, descomenta este código:

/*
const typingText = document.querySelector('.hero-greeting');
const text = '¡Hola! Soy';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar efecto
typingText.textContent = '';
typeWriter();
*/

// ==================== CONSOLE MESSAGE ====================
console.log('%c¡Bienvenido a mi portafolio! 🚀', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cSi estás viendo esto, probablemente también te gusta el código. ¡Conectemos!', 'font-size: 14px; color: #475569;');
