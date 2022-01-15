const modal = () => {
    const callModal = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlayModal = document.querySelector('.overlay');
    const servicesBtn = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');

    
    callModal.addEventListener('click', (e) => {
        e.preventDefault();
        headerModal.style.display = 'flex';
        overlayModal.style.display = 'flex';
    });
    
    headerModal.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(target.classList.contains('header-modal__close')) {
            headerModal.style.display = 'none';
            overlayModal.style.display = 'none';
        }
    });

    servicesBtn.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            servicesModal.style.display = 'flex';
            overlayModal.style.display = 'flex';
        });
    });
    servicesModal.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(target.classList.contains('services-modal__close')) {
            servicesModal.style.display = 'none';
            overlayModal.style.display = 'none';
        }
    });
};

export default modal;