// Particle System
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 8 + 5) + 's';
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        // Random colors
        const colors = ['var(--primary-neon)', 'var(--secondary-neon)', 'var(--accent-neon)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        container.appendChild(particle);
    }
}

// Scroll Animations
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('.nav-item[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Certificate System
function showCertificates() {
    const certPage = document.getElementById('certPage');
    const certMatrix = document.getElementById('certMatrix');
    
    certPage.classList.add('active');
    
    const certificates = [
        {
            icon: '🏆',
            title: 'C++ PROGRAMMING',
            provider: 'Cisco Systems',
            year: '2024',
            description: 'Advanced programming certification covering object-oriented programming, data structures, and algorithmic problem solving using C++.',
            skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Memory Management']
        },
        {
            icon: '☕',
            title: 'Java Foundations',
            provider: 'Oracle Corporation',
            year: '2024',
            description: 'Comprehensive Java programming certification covering fundamentals, object-oriented programming, and enterprise application development.',
            skills: ['Java Fundamentals', 'OOP Concepts', 'Enterprise Development', 'JVM Architecture']
        },
        {
            icon: '🐍',
            title: 'Python Programming',
            provider: 'Cisco Systems',
            year: '2024',
            description: 'Professional Python certification covering programming fundamentals, data analysis, machine learning, and automation scripting.',
            skills: ['Python Core', 'Data Analysis', 'ML Libraries', 'Automation']
        },
        {
            icon: '🗄️',
            title: 'Basic SQL Mastery',
            provider: 'HackerRank',
            year: '2025',
            description: 'Foundational SQL certification covering database queries, joins, data manipulation, and relational database concepts.',
            skills: ['Database Queries', 'Join Operations', 'Data Manipulation', 'RDBMS Concepts']
        },
        {
            icon: '📊',
            title: 'Advanced SQL',
            provider: 'HackerRank',
            year: '2025',
            description: 'Advanced SQL certification covering complex queries, window functions, stored procedures, and database optimization techniques.',
            skills: ['Complex Queries', 'Window Functions', 'Stored Procedures', 'Query Optimization']
        },
        {
            icon: '☁️',
            title: 'AWS AI Practitioner',
            provider: 'Amazon Web Services',
            year: '2025',
            description: 'Cloud AI certification covering machine learning services, AI model deployment, AWS AI/ML tools, and cloud-based AI solutions.',
            skills: ['AWS ML Services', 'AI Model Deployment', 'Cloud Architecture', 'AI/ML Pipeline']
        }
    ];

    certMatrix.innerHTML = certificates.map(cert => `
        <div class="cert-card">
            <div class="cert-icon">${cert.icon}</div>
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-provider">${cert.provider}</p>
            <div class="cert-year">${cert.year}</div>
            <p class="cert-description">${cert.description}</p>
            <div class="cert-skills">
                ${cert.skills.map(skill => `<span class="cert-skill">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function closeCertificate() {
    const certPage = document.getElementById('certPage');
    certPage.style.animation = 'slideOutRight 0.6s ease forwards';
    setTimeout(() => {
        certPage.classList.remove('active');
        certPage.style.animation = 'slideInRight 0.6s ease';
    }, 600);
}

// Enhanced Mouse Effects
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelector('.cyber-bg').style.transform = 
        `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    
    document.querySelector('.grid-bg').style.transform = 
        `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
});

// Initialize System
window.addEventListener('load', () => {
    createParticles();
    handleScroll();
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 500);
});

window.addEventListener('scroll', handleScroll);

// Cyber Glitch Effect for Title
setInterval(() => {
    const title = document.querySelector('.hero-title');
    if (Math.random() < 0.1) {
        title.style.textShadow = `
            2px 0 var(--secondary-neon),
            -2px 0 var(--primary-neon),
            0 0 30px rgba(58, 134, 255, 0.5)
        `;
        setTimeout(() => {
            title.style.textShadow = '0 0 30px rgba(58, 134, 255, 0.5)';
        }, 100);
    }
}, 2000);