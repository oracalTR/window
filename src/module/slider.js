import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay, Navigation]);

const slider = () => {
    const sliderOne = new Swiper('.swiperone', {
        slidesPerView: 1,
        spaceBetween: 3,
        centeredSlides: true,
        slidesPerColumn: 1,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
        navigation: {
          nextEl: ".benefits__arrow--right",
          prevEl: ".benefits__arrow--left",
        },
    });
    const sliderTwo = new Swiper('.swipertwo', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2600,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: ".services__arrow--right",
          prevEl: ".services__arrow--left",
        },
    });
};

export default slider;