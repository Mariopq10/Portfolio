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
    
    //Animacion progress bar
    let animated = false;
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('progress');
        progressBars.forEach(progress => {
            const targetValue = progress.getAttribute('data-target');
            let currentValue = 0;
            const increment = targetValue / 100; // Ajusta el incremento para una animación más suave

            const interval = setInterval(() => {
                if (currentValue >= targetValue) {
                    clearInterval(interval);
                } else {
                    currentValue += increment;
                    progress.value = currentValue;
                }
            }, 20); // Ajusta el tiempo según la velocidad que desees
        });
    }

    const carouselImages = document.querySelectorAll('.profile-image-carousel img');
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 5000);

    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        const sectionTitleAbout = aboutSection.querySelector('#section-title');
        const sectionTitleProjects = projectsSection.querySelector('#section-title');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const projectsPosition = projectsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
    
        if (aboutPosition < screenPosition && !aboutSection.classList.contains('visible')) {
            aboutSection.classList.add('visible');
            sectionTitleAbout.classList.add('visible');
            animateProgressBars(); 
        }
    
        if (projectsPosition < screenPosition && !projectsSection.classList.contains('visible')) {
            projectsSection.classList.add('visible');
            sectionTitleProjects.classList.add('visible');
        }
    });


});