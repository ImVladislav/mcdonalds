window.addEventListener("scroll", () => {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Show after 300px of scrolling
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }
});

// Scroll smoothly to the top when clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Завантаження музики
const audio = new Audio('./McDonalds Rich.mp3');

// Відображення модального вікна при завантаженні
window.onload = () => {
    const modal = document.getElementById('modal');
    const enterButton = document.getElementById('enter-button');

    modal.style.display = 'flex';

    enterButton.addEventListener('click', () => {
        modal.style.display = 'none';
        audio.play();
    });
};

// Кнопка для вмикання/вимикання музики
const musicButton = document.getElementById('music-button');
let isPlaying = false;

musicButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        isPlaying = true;
        musicButton.innerHTML = "🔊"; // Змінити іконку, якщо потрібно
    } else {
        audio.pause();
        isPlaying = false;
        musicButton.innerHTML = "🔇"; // Змінити іконку, якщо потрібно
    }
});

