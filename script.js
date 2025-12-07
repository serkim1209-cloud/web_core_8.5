let swiper = null;

function checkSwiper() {
    if (window.innerWidth <= 768) {
        document.getElementById('media__button').style.display= 'none';
        if (!swiper) {
            // Присваиваем созданный экземпляр глобальной переменной swiper
            swiper = new Swiper('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                spaceBetween: 20,
                slidesPerView: 'auto',
                centeredSlides: false,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
               
            });
            
        }
    } else {
        // Если экран шире 768px, и Swiper инициализирован, уничтожаем его
        document.getElementById('media__button').style.display= 'flex';
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null; // Сбрасываем переменную в null
        }
    }
     const btn = document.getElementById('media__button');
const img = document.getElementById('media__img');

btn.addEventListener('click', () => {

    // Переворот картинки
    img.classList.toggle('flip');

    // Получаем текущий текст (картинку игнорирует)
    const text = btn.innerText.trim();

    // Меняем текст
    if (text === 'Показать все') {
        btn.innerHTML = '<img id="media__img" src="./img/expand.svg" class="' + (img.classList.contains('flip') ? 'flip' : '') + '">Скрыть';
    } else {
        btn.innerHTML = '<img id="media__img" src="./img/expand.svg">Показать все';
    }
});
const showMoreButton = document.getElementById('media__button');
const slides = document.querySelectorAll('.swiper-slide');

let isOpen = false;

showMoreButton.addEventListener('click', function() {
  const hiddenCount = getHiddenCount(); // сколько скрывать на этом экране

  if (!isOpen) {
    // Показать все
    slides.forEach(slide => {
      slide.style.display = 'flex';
    });
  } else {
    // Скрыть обратно нужное количество
    slides.forEach((slide, index) => {
      if (index >= slides.length - hiddenCount) {
        slide.style.display = 'none';
      }
    });
  }

  isOpen = !isOpen;
});

function getHiddenCount() {
  const width = window.innerWidth;
  if (width >= 1120) { return 3; // планшеты
 } 
else if (width >= 768) { return 5; // компютеры
 }
}
}
// Вызываем функцию при зaгрузке страницы
document.addEventListener('DOMContentLoaded', checkSwiper);

// Вызываем функцию при изменении размера окна (для адаптивности)
window.addEventListener('resize', checkSwiper);