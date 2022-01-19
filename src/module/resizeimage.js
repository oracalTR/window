import { animate } from "./helpers";

const resizeImage = () => {
    const boxSertificate = document.getElementById('documents');
    const overlay = document.querySelector('.overlay');
    const imageModal = document.querySelector('.modal-image');
    
    boxSertificate.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        imageModal.textContent = '';
        if(target.closest('.sertificate-document')) {
            imageModal.insertAdjacentHTML('beforeend', `
                <img class="image-modal--img" src="${target.closest('.sertificate-document').pathname}" alt="Сефтификаты">
                <span title="Close" class="image-modal__close">x</span>
            `);
            animate({
                duration: 500,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    imageModal.style.opacity = progress;
                    imageModal.style.display = 'block';
                    overlay.style.display = 'flex';
                }
            });
        }
        imageModal.addEventListener('click', (e) => {
            let target = e.target;
            if(target.classList.contains('image-modal__close')) {
                imageModal.style.display = 'none';
                overlay.style.display = 'none';
            }
        });
    });

};

export default resizeImage;