document.addEventListener('DOMContentLoaded', () => {
    // Función para enviar mensaje de WhatsApp
    function sendWhatsAppMessage() {
        const phoneNumber = '573043981607'; 
        const message = encodeURIComponent(
            "👋 ¡Hola Eileen! 😊\n\nVi tu hoja de vida en línea 📄 y me gustaría saber más sobre tu perfil como Auxiliar Contable 💼.\n\n¿Podemos conversar? 🤝"
        );
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    }

    // Lógica para el botón de "Volver Arriba" y el botón de WhatsApp flotante
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const whatsappFloatBtn = document.getElementById('whatsappFloatBtn');
    const scrollThreshold = 300; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.add('show');
            whatsappFloatBtn.classList.add('show'); 
        } else {
            scrollToTopBtn.classList.remove('show');
            whatsappFloatBtn.classList.remove('show'); 
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    window.sendWhatsAppMessage = sendWhatsAppMessage;

    // Lógica para el menú de navegación interactivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links .nav-item');

    if (menuToggle && navLinks) { 
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cierra el menú cuando se hace clic en un enlace
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
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'Eileen_Salas_CV.pdf';  
            link.download = 'Eileen_Salas_CV.pdf';  
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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

    // --- Configuración de Particles.js ---
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, 
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#4a82c4" 
            },
            shape: {
                type: "circle", 
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5, 
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3, 
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150, 
                color: "#8bbbe5", 
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2, 
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab" 
                },
                onclick: {
                    enable: true,
                    mode: "push" 
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
