document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const toggleCircle = document.querySelector('.toggle-circle');
    let currentLanguage = 'es';

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        switchLanguage(currentLanguage);
        toggleFlag();
    });

    function switchLanguage(language) {
        const elements = document.querySelectorAll('[data-en][data-es]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);
        });
    }

    function toggleFlag() {
        if (currentLanguage === 'es') {
            toggleCircle.classList.remove('flag-uk');
            toggleCircle.classList.add('flag-es');
            toggleCircle.style.left = '1px';
        } else {
            toggleCircle.classList.remove('flag-es');
            toggleCircle.classList.add('flag-uk');
            toggleCircle.style.left = '31px';
        }
    }

    // Inicializa con el idioma y la bandera por defecto
    switchLanguage(currentLanguage);
    toggleFlag();

   
    // Ocultar el header inicialmente
    const header = document.getElementById('header');
    const aboutSection = document.getElementById('about');
    let isNavSticky = false;

    function toggleNavSticky() {
        if (window.scrollY >= aboutSection.offsetTop && !isNavSticky) {
            header.style.display = 'flex'; // Mostrar el header
            header.classList.add('sticky'); // Agregar la clase sticky
            isNavSticky = true;
        } else if (window.scrollY < aboutSection.offsetTop && isNavSticky) {
            header.classList.remove('sticky'); // Quitar la clase sticky
            isNavSticky = false;
            header.style.display = 'none'; // Ocultar el header al volver al inicio
        }
    }

    // Mostrar el nav cuando se llegue al section "about"
    window.addEventListener('scroll', toggleNavSticky);

    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        const sectionTitle = document.getElementById('section-title');
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
            sectionTitle.classList.add('visible');
        }
    });


});