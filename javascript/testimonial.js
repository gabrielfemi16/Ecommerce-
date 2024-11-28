let currentIndex = 0;

function scrollTestimonials(direction) {
    const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialWidth = testimonials[0].offsetWidth + 20;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    } else if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    container.scrollLeft = currentIndex * testimonialWidth;
}