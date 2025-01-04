const slideContainer = document.querySelector('.slide');
const slides = document.querySelectorAll('.slide img');
const totalSlides = slides.length;

let currentIndex = 0;

function slideToLeft() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    const slideWidth = slideContainer.offsetWidth; // Get the width of one slide
    slideContainer.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth', // Smooth scroll to the next slide
    });
}

// Set the interval to slide every 3 seconds
setInterval(slideToLeft, 5000);
