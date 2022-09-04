const slides = document.querySelectorAll('.slide');

function closeAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}

for (const slide of slides) {
    slide.addEventListener('click', () => {
        closeAllSlides();

        slide.classList.add('active');
})
};