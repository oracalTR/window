import { animate } from "./helpers";

const modal = () => {
    const callModal = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlayModal = document.querySelector('.overlay');
    const services = document.getElementById('services');
    const servicesModal = document.querySelector('.services-modal');
    const imageModal = document.querySelector('.modal-image');
    const navMenu = document.getElementById('navbar-collapse-fixed');


    callModal.addEventListener('click', (e) => {
        animate({
            duration: 500,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                headerModal.style.opacity = progress;
                headerModal.style.display = 'block';
                overlayModal.style.display = 'flex';
            }
        });
    });
    
    headerModal.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('header-modal__close')) {
            headerModal.style.display = 'none';
            overlayModal.style.display = 'none';
        }
    });


    services.addEventListener('click', (e) => {
        let target = e.target;
        if(target.closest('.service-button')) {
            const subject = servicesModal.querySelector('input[name="subject"]');
            subject.value = target.dataset.subject;
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    servicesModal.style.opacity = progress;
                    servicesModal.style.display = 'flex';
                    overlayModal.style.display = 'flex';
                },
            });
        }
    });
    servicesModal.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('services-modal__close')) {
            servicesModal.style.display = 'none';
            overlayModal.style.display = 'none';
        }
    });
    overlayModal.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('overlay')) {
            headerModal.style.display = 'none';
            servicesModal.style.display = 'none';
            overlayModal.style.display = 'none';
            imageModal.style.display = 'none';
            navMenu.classList.add('collapse');
            navMenu.classList.add('navbar-collapse');
        }
    });
};

export default modal;