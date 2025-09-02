// DDHH en Acción - Main JavaScript File

// Language Management
let currentLanguage = 'es'; // Default to Spanish

// Detect browser language and set initial language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        currentLanguage = 'en';
        document.documentElement.setAttribute('data-lang', 'en');
        updateLanguageContent();
    } else {
        document.documentElement.setAttribute('data-lang', 'es');
    }
}

// Toggle between Spanish and English
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.documentElement.setAttribute('data-lang', currentLanguage);
    updateLanguageContent();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Update content based on current language
function updateLanguageContent() {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        const content = currentLanguage === 'es' ? element.getAttribute('data-es') : element.getAttribute('data-en');
        if (content) {
            if (element.innerHTML.includes('&copy;')) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    });
    
    // Update document title
    const title = currentLanguage === 'es' 
        ? 'DDHH en Acción - Derechos Humanos para Personas Privadas de Libertad'
        : 'Human Rights in Action - Human Rights for Incarcerated Individuals';
    document.title = title;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Blog and Archive Functionality
const articles = {
    'enero-2024': [
        {
            id: 1,
            title: {
                es: "Taller de Apoyo a Familias",
                en: "Family Support Workshop"
            },
            description: {
                es: "Realizamos un taller especializado para brindar herramientas de apoyo emocional y legal a las familias de personas privadas de libertad.",
                en: "We conducted a specialized workshop to provide emotional and legal support tools for families of incarcerated individuals."
            },
            date: "15 Enero",
            image: "https://via.placeholder.com/400x250/007bff/ffffff?text=Taller+Familiar",
            month: "enero-2024"
        },
        {
            id: 2,
            title: {
                es: "Campaña de Sensibilización Universitaria",
                en: "University Awareness Campaign"
            },
            description: {
                es: "Llevamos nuestra campaña de concientización sobre los derechos humanos en prisiones a diferentes universidades de la ciudad.",
                en: "We brought our awareness campaign on human rights in prisons to different universities in the city."
            },
            date: "20 Enero",
            image: "https://via.placeholder.com/400x250/28a745/ffffff?text=Campaña+Sensibilización",
            month: "enero-2024"
        }
    ],
    'febrero-2024': [
        {
            id: 3,
            title: {
                es: "Visita de Supervisión a Centro Penitenciario",
                en: "Supervision Visit to Penitentiary Center"
            },
            description: {
                es: "Realizamos una visita de supervisión para verificar las condiciones de vida y el respeto a los derechos humanos fundamentales.",
                en: "We conducted a supervision visit to verify living conditions and respect for fundamental human rights."
            },
            date: "05 Febrero",
            image: "https://via.placeholder.com/400x250/dc3545/ffffff?text=Visita+Centro",
            month: "febrero-2024"
        },
        {
            id: 4,
            title: {
                es: "Jornada de Capacitación Legal",
                en: "Legal Training Day"
            },
            description: {
                es: "Organizamos una jornada de capacitación legal gratuita para familiares de personas en situación de privación de libertad.",
                en: "We organized a free legal training day for relatives of people in situations of deprivation of liberty."
            },
            date: "12 Febrero",
            image: "https://via.placeholder.com/400x250/ffc107/000000?text=Capacitación+Legal",
            month: "febrero-2024"
        },
        {
            id: 5,
            title: {
                es: "Encuentro Interinstitucional",
                en: "Inter-institutional Meeting"
            },
            description: {
                es: "Participamos en un encuentro con otras organizaciones de derechos humanos para fortalecer nuestras redes de trabajo.",
                en: "We participated in a meeting with other human rights organizations to strengthen our working networks."
            },
            date: "28 Febrero",
            image: "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Encuentro+Inter",
            month: "febrero-2024"
        }
    ],
    'diciembre-2023': [
        {
            id: 6,
            title: {
                es: "Celebración de Derechos Humanos",
                en: "Human Rights Celebration"
            },
            description: {
                es: "Conmemoramos el Día Internacional de los Derechos Humanos con una serie de actividades comunitarias.",
                en: "We commemorated International Human Rights Day with a series of community activities."
            },
            date: "10 Diciembre",
            image: "https://via.placeholder.com/400x250/6f42c1/ffffff?text=Día+DDHH",
            month: "diciembre-2023"
        },
        {
            id: 7,
            title: {
                es: "Taller de Reinserción Social",
                en: "Social Reintegration Workshop"
            },
            description: {
                es: "Desarrollamos un programa de talleres orientados a la reinserción social de personas que han recuperado su libertad.",
                en: "We developed a workshop program aimed at the social reintegration of people who have regained their freedom."
            },
            date: "15 Diciembre",
            image: "https://via.placeholder.com/400x250/e83e8c/ffffff?text=Reinserción",
            month: "diciembre-2023"
        },
        {
            id: 8,
            title: {
                es: "Campaña Navideña de Solidaridad",
                en: "Christmas Solidarity Campaign"
            },
            description: {
                es: "Organizamos una campaña navideña para llevar regalos y apoyo a las familias de personas privadas de libertad.",
                en: "We organized a Christmas campaign to bring gifts and support to families of incarcerated individuals."
            },
            date: "20 Diciembre",
            image: "https://via.placeholder.com/400x250/fd7e14/ffffff?text=Navidad+Solidaria",
            month: "diciembre-2023"
        },
        {
            id: 9,
            title: {
                es: "Balance Anual de Actividades",
                en: "Annual Activity Review"
            },
            description: {
                es: "Realizamos el balance de nuestras actividades durante el año y planificamos las acciones para el próximo período.",
                en: "We reviewed our activities during the year and planned actions for the next period."
            },
            date: "30 Diciembre",
            image: "https://via.placeholder.com/400x250/20c997/ffffff?text=Balance+Anual",
            month: "diciembre-2023"
        }
    ]
};

// Filter articles by month
function filterByMonth(month) {
    const container = document.getElementById('articles-container');
    const monthArticles = articles[month] || [];
    
    if (monthArticles.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted" data-es="No hay artículos disponibles para este mes." data-en="No articles available for this month.">
                    ${currentLanguage === 'es' ? 'No hay artículos disponibles para este mes.' : 'No articles available for this month.'}
                </p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    monthArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        container.appendChild(articleCard);
    });
    
    // Scroll to articles section
    document.getElementById('actividades').scrollIntoView({ behavior: 'smooth' });
}

// Create article card element
function createArticleCard(article) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const title = article.title[currentLanguage];
    const description = article.description[currentLanguage];
    const monthText = getMonthText(article.month);
    
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${article.image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-primary">${monthText}</span>
                    <small class="text-muted">${article.date}</small>
                </div>
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-outline-primary btn-sm" data-es="Leer más" data-en="Read more">
                    ${currentLanguage === 'es' ? 'Leer más' : 'Read more'}
                </a>
            </div>
        </div>
    `;
    
    return col;
}

// Get month text in current language
function getMonthText(monthKey) {
    const months = {
        'enero-2024': { es: 'Enero 2024', en: 'January 2024' },
        'febrero-2024': { es: 'Febrero 2024', en: 'February 2024' },
        'diciembre-2023': { es: 'Diciembre 2023', en: 'December 2023' }
    };
    
    return months[monthKey] ? months[monthKey][currentLanguage] : monthKey;
}

// Show all articles (reset filter)
function showAllArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    
    // Show featured articles from different months
    const featuredArticles = [
        articles['enero-2024'][0],  // Family Support Workshop
        articles['enero-2024'][1],  // University Campaign
        articles['febrero-2024'][0] // Penitentiary Visit
    ];
    
    featuredArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        container.appendChild(articleCard);
    });
}

// Contact Form Handler
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert(currentLanguage === 'es' 
                ? 'Por favor, completa todos los campos.' 
                : 'Please fill in all fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(currentLanguage === 'es' 
                ? '¡Gracias por tu mensaje! Te contactaremos pronto.' 
                : 'Thank you for your message! We will contact you soon.');
            
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Initialize fade-in animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, section');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.documentElement.setAttribute('data-lang', currentLanguage);
        updateLanguageContent();
    } else {
        detectBrowserLanguage();
    }
    
    // Initialize features
    handleContactForm();
    initSmoothScrolling();
    initScrollAnimations();
    
    // Show initial articles
    showAllArticles();
    
    console.log('DDHH en Acción website initialized successfully!');
});

// Export functions for global access
window.toggleLanguage = toggleLanguage;
window.filterByMonth = filterByMonth;
window.showAllArticles = showAllArticles;
