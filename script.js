// Envuelve todo el código DOM en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Función para enviar mensaje de WhatsApp
    function sendWhatsAppMessage() {
        const phoneNumber = '573043981607';
        const message = encodeURIComponent('Hola Eileen, vi tu hoja de vida en línea y me gustaría saber más.');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    }

    // Lógica para el botón de "Volver Arriba"
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Asegúrate de que el botón exista antes de intentar añadirle eventos
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Lógica para el menú de navegación interactivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    if (menuToggle && navLinks) { // Verificar si los elementos existen
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cierra el menú cuando se hace clic en un enlace (útil en móvil)
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Función para descargar el CV
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    if (downloadCvBtn) { // Asegúrate de que el botón exista
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('Eileen_Salas_CV.pdf', '_blank');
        });
    }

    // Observador de Intersección para animaciones al hacer scroll
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('zoom-in')) {
                    entry.target.style.animation = 'zoomIn 0.8s ease-out forwards';
                } else if (entry.target.classList.contains('slide-up')) {
                    entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Asegúrate de que la función de WhatsApp esté globalmente disponible si se llama desde onclick en HTML
    window.sendWhatsAppMessage = sendWhatsAppMessage;

});