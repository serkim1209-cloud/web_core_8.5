let swiper = null;

function checkSwiper() {
    if (window.innerWidth <= 768) {
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
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null; // Сбрасываем переменную в null
        }
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', checkSwiper);

// Вызываем функцию при изменении размера окна (для адаптивности)
window.addEventListener('resize', checkSwiper);
