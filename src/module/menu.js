const menu = () => {
    const boxNav = document.getElementById('navigation');
    
    boxNav.addEventListener('click', (e) => {
        let target = e.target;
        if(target.closest('.navbar-toggle')) {
        }
    });
};

export default menu;