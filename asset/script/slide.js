const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
const slides = document.querySelectorAll('.slide-item');
const totalSlides = slides.length;
let currentSlideIndex = 0;

// botões de navegação direta
const indicatorButtons = document.querySelectorAll('.indicator-item');


//auto player com loop
let autoplayInterval;


function showPreviousSlide () {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' para mostrar o slide
        } else {
            slide.classList.remove('active'); // Remove a classe 'active' para ocultar o slide
        }
    });
}

indicatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const slideIndex = parseInt(button.dataset.slide);
        currentSlideIndex = slideIndex;
        showSlide(currentSlideIndex);
    });
});

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        showNextSlide();
    }, 4000); // Intervalo de 4000 milissegundos (3 segundos)
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Inicie o autoplay quando a página carregar
window.addEventListener('load', () => {
    startAutoplay();
});

const sliderContainer = document.querySelector('.slider');
sliderContainer.addEventListener('mouseenter', stopAutoplay);
sliderContainer.addEventListener('mouseleave', startAutoplay);


previousButton.addEventListener ('click' , showPreviousSlide);
nextButton.addEventListener ('click' , showNextSlide);

