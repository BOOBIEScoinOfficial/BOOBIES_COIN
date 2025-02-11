// --- Слайдер и видео ---
const slidesContainer = document.querySelector('.slides');
const slideData = [
  "<video src='8.mp4' muted></video>",
  "<video src='2.mp4' muted></video>",
  "<video src='5.mp4' muted></video>",
  "<video src='6.mp4' muted></video>",
  "<video src='08.mp4' muted></video>",
  "<video src='9.mp4' muted></video>",
  "<video src='10.mp4' muted></video>",
  "<video src='11.mp4' muted></video>",
  "<video src='12.mp4' muted></video>",
  "<video src='13.mp4' muted></video>"
];

let index = 0;

// Создание слайдов
slideData.forEach(html => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = html;
  slidesContainer.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');
const videos = document.querySelectorAll('video');
const slidesCount = slides.length;

// Функция обновления позиции слайдов
const updateSlidePosition = () => {
  slidesContainer.style.transition = 'transform 0.3s ease-in-out';
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  videos.forEach(video => video.pause());
  videos[index].play();
};

// Переключение слайда по окончанию видео
videos.forEach((video, i) => {
  video.addEventListener('ended', () => {
    index = (index + 1) % slidesCount;
    updateSlidePosition();
    videos[index].play();
  });
});

// Запуск первого видео после загрузки страницы
window.addEventListener('load', () => {
  videos[index].play();
  updateSlidePosition();
});

// --- Функциональность копирования ---
let canCopy = true;
function copyText() {
  if (!canCopy) return;
  canCopy = false;
  navigator.clipboard.writeText("2Sy14sB6JzD1zcXbZgSA2BMgFEXvN4HzUg24emCypump").then(() => {
    const notification = document.getElementById("copy-notification");
    notification.classList.add("show");
    notification.classList.remove("hide");
    setTimeout(() => {
      notification.classList.add("hide");
    }, 1000);
    setTimeout(() => {
      notification.classList.remove("show", "hide");
      canCopy = true;
    }, 3000);
  });
}
