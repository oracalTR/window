import scroll from './module/scroll';
import modal from './module/modal';
import timer from './module/timer';
import slider from './module/slider';
import checkInput from './module/checkinput';
import resizeImage from './module/resizeimage';
import menu from './module/menu';

document.addEventListener('DOMContentLoaded', () => {
    scroll();
    modal();
    timer('21 January 2022');
    slider();
    checkInput();
    resizeImage();
    menu();
});