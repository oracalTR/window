const modal = () => {
    const callModal = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlayModal = document.querySelector('.overlay');

    
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
};

export default modal;