import { animate } from "./helpers";
import { elementScrollIntoView } from "seamless-scroll-polyfill";

const menu = () => {
    const boxNav = document.getElementById('navigation');
    const navMenu = document.getElementById('navbar-collapse-fixed');
    
    boxNav.addEventListener('click', (e) => {
        let target = e.target;
        if(target.closest('.navbar-toggle')) {
            navMenu.classList.remove('collapse');
            navMenu.classList.remove('navbar-collapse');
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    navMenu.style.opacity = progress;
                }
            });
        }
    });
    navMenu.addEventListener('click', (e) => {
        let target = e.target;
        const menuItem = document.getElementById(target.attributes.href.value.substring(1));
        if(target.closest('li')) {
            navMenu.classList.add('collapse');
            navMenu.classList.add('navbar-collapse');
            elementScrollIntoView(menuItem, {
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

};

export default menu;