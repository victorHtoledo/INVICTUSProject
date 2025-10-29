// Projeto Invicto - JavaScript Principal

// Configurações globais
const CONFIG = {
    animationDuration: 600,
    scrollOffset: 80,
    debounceDelay: 100
};

// Utilitários
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    isElementInViewport: (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Mobile Toggle com animação melhorada
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animação do ícone hamburger
            const icon = this.querySelector('svg');
            if (mobileMenu.classList.contains('active')) {
                icon.style.transform = 'rotate(90deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Fechar menu ao clicar em link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuButton.querySelector('svg').style.transform = 'rotate(0deg)';
            });
        });
    }
    
    // Smooth Scroll melhorado para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Smooth scroll com callback
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Atualizar URL sem recarregar página
                history.pushState(null, null, targetId);
                
                // Adicionar classe ativa ao link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Efeito de fade-in nos elementos quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ter animação
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // Header background change on scroll com throttle
    const header = document.querySelector('header');
    
    const handleScroll = utils.throttle(() => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Mostrar/ocultar botão scroll to top
        const scrollTopBtn = document.querySelector('.scroll-to-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
        
        // Atualizar navegação ativa baseada na seção visível
        updateActiveNavigation();
    }, 16);
    
    window.addEventListener('scroll', handleScroll);
    
    // Formulário de contato melhorado
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        // Formatação automática do telefone
        const phoneInput = contactForm.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length >= 11) {
                    value = value.substring(0, 11);
                    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                } else if (value.length >= 7) {
                    value = value.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
                } else if (value.length >= 3) {
                    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
                } else if (value.length >= 1) {
                    value = value.replace(/(\d{0,2})/, '($1');
                }
                
                e.target.value = value;
            });
        }
        
        // Validação em tempo real
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validar todos os campos
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField.call(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) return;
            
            // Mostrar loading
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'ENVIANDO...';
            submitBtn.disabled = true;
            
            try {
                // Preparar dados do formulário
                const formData = {
                    name: this.querySelector('input[type="text"]').value,
                    email: this.querySelector('input[type="email"]').value,
                    phone: this.querySelector('input[type="tel"]').value,
                    message: this.querySelector('textarea')?.value || '',
                    plan: 'personalizado'
                };
                
                // Redirecionar para email com os dados
                const nome = formData.name;
                const email = formData.email;
                const telefone = formData.phone;
                
                const assunto = 'Consultoria Projeto Invicto';
                const corpo = `Olá!%0A%0AMeu nome é ${nome}.%0AGostaria de agendar uma consultoria do Projeto Invicto.%0A%0AContatos:%0AEmail: ${email}%0ATelefone: ${telefone}%0A%0AObrigado!`;
                
                window.open(`mailto:invicto.performance@gmail.com?subject=${assunto}&body=${corpo}`, '_blank');
                
                showSuccessMessage('Redirecionando para email...');
                this.reset();
                
            } catch (error) {
                console.error('Erro no formulário:', error);
                showErrorMessage(error.message || 'Erro ao enviar mensagem. Tente novamente.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Contador animado (se houver números para mostrar)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
    
    // Aplicar contador animado em elementos com classe 'counter'
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        });
        
        counterObserver.observe(counter);
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle atual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Botão Scroll to Top
    createScrollToTopButton();
    
    // Lazy loading para imagens
    implementLazyLoading();
    
    // Analytics tracking (se necessário)
    trackUserInteractions();
    
    // Performance monitoring
    monitorPerformance();
});

// Funções auxiliares
function validateField() {
    const value = this.value.trim();
    const type = this.type;
    let isValid = true;
    
    // Remover erros anteriores
    this.classList.remove('error');
    const errorMsg = this.parentNode.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
    
    // Validações
    if (this.required && !value) {
        showFieldError(this, 'Este campo é obrigatório');
        isValid = false;
    } else if (type === 'email' && value && !isValidEmail(value)) {
        showFieldError(this, 'Email inválido');
        isValid = false;
    } else if (type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(this, 'Telefone inválido');
        isValid = false;
    }
    
    return isValid;
}

function clearErrors() {
    this.classList.remove('error');
    const errorMsg = this.parentNode.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(phone);
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    setTimeout(() => successDiv.classList.add('show'), 100);
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => successDiv.remove(), 300);
    }, 4000);
}

function showErrorMessage(message) {
    // Similar ao success mas com estilo de erro
    showSuccessMessage(message);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Voltar ao topo');
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
}

function implementLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

function trackUserInteractions() {
    // Tracking de cliques em botões importantes
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Enviar evento para Google Analytics ou similar
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: button.textContent.trim()
                });
            }
        });
    });
}

function monitorPerformance() {
    // Monitor de performance básico
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Página carregada em ${loadTime.toFixed(2)}ms`);
        
        // Enviar métricas se necessário
        if (loadTime > 3000) {
            console.warn('Página demorou mais que 3s para carregar');
        }
    });
}

// Fechar menu mobile ao clicar fora
document.addEventListener('click', function(e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            if (mobileMenuButton.querySelector('svg')) {
                mobileMenuButton.querySelector('svg').style.transform = 'rotate(0deg)';
            }
        }
    }
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}