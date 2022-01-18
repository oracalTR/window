import { animate } from "./helpers";

const modal = () => {
    const callModal = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlayModal = document.querySelector('.overlay');
    const servicesBtn = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');
    const imageModal = document.querySelector('.modal-image');

    
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

    servicesBtn.forEach(elem => {
        elem.addEventListener('click', (e) => {
            animate({
                duration: 500,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    servicesModal.style.opacity = progress;
                    servicesModal.style.display = 'flex';
                    overlayModal.style.display = 'flex';
                }
            });
            
        });
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
        }
    });
};

export default modal;