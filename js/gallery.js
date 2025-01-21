document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.gallery-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1500, // Increase for a slower, smoother continuous scroll
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
        },
        // Ensures a large pool of slides for a smoother loop
        // Adjust this to the total number of slides you have
        loopedSlides: 10,

        // Breakpoints for responsive settings
        breakpoints: {
            // At >= 320px (small phones)
            320: {
                speed: 1000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 1,
                spaceBetween: 1
            },
            // At >= 360px (common Android and small iPhones)
            360: {
                speed: 1000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 1,
                spaceBetween: 1
            },
            // At >= 390px (newer iPhones, foldable covers)
            390: {
                speed: 1000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 1,
                spaceBetween: 1
            },
            // At >= 414px/428px (Plus/Max iPhones)
            414: {
                speed: 1000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 1,
                spaceBetween: 2
            },
            // At >= 600px (foldable main screens/small tablets)
            600: {
                speed: 1000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 2,
                spaceBetween: 2
            },
            // At >= 769px (tablets and above)
            769: {
                speed: 1250, // Increase for a slower, smoother continuous scroll
                slidesPerView: 3,
                spaceBetween: 3
            },
            // At >= 1025px (small desktop)
            1025: {
                speed: 1500, // Increase for a slower, smoother continuous scroll
                slidesPerView: 4,
                spaceBetween: 4
            },
            // At >= 1200px (larger desktops)
            1200: {
                speed: 2000, // Increase for a slower, smoother continuous scroll
                slidesPerView: 5,
                spaceBetween: 5
            }
        },
    });
});
