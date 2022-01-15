import { animate } from "./helpers";
import { elementScrollIntoView } from "seamless-scroll-polyfill";

const scroll = () => {
    const smoothScroll = document.querySelector('.smooth-scroll');
    const navbar = document.querySelector('body');

    smoothScroll.style.cursor = 'pointer';
    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset >= 664) {
            console.log("Идет прокрутка");
            console.log(smoothScroll.style.display);
            if(smoothScroll.style.display == '') {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        smoothScroll.style.opacity = progress;
                        smoothScroll.style.display = 'block';
                    }
                });
            }
        } else {
            smoothScroll.style.display = '';
        }
    });
    smoothScroll.addEventListener('click', (e) => {
        e.preventDefault();
        if(navbar) {
            elementScrollIntoView(navbar, {
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
};

export default scroll;