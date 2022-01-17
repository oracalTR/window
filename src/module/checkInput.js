import calc from './calc';

const checkInput = () => {
    const form = document.querySelectorAll('form');
    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');

    let  checkName = (value) => {
        return !/([^а-я-\s]+)/gi.test(value);
    };
    let checkPhone = (value) => {
        return /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/g.test(value);
    };

    let checkCalc = /\D/g;

    let isErrorName = true;
    let isErrorPhone = true;

    form.forEach(elem => {
        const inputName = elem.querySelector('input[name="fio"]');
        const inputPhone = elem.querySelector('input[name="phone"]');
        inputName.setAttribute("required", true);
        inputPhone.setAttribute("required", true);
        inputName.addEventListener('input', (e) => {
            let inputName = '';
            if(/([^а-я-\s]+)/gi.test(e.target.value)) {
                inputName = e.target.value.replace(/([^а-я-\s]+)/gi, ($1) => {
                    let newName = '';
                    newName = ``;
                    return newName;
                });
                e.target.value = inputName;
            }

            let nameTest = checkName(e.target.value);
            if(nameTest) {
                isErrorName = false;
                e.target.style.backgroundColor = '#fff';
            } else {
                isErrorName = true;
                e.target.style.backgroundColor = 'rgb(255 180 56)';
                
            }
        });
        inputPhone.addEventListener('input', (e) => {
            let phone = '';
            if(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2}$)/g.test(e.target.value)) {
                phone = e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, ($1, $2, $3, $4, $5, $6) => {
                    let newPhone = '';
                    newPhone = `+${$2}(${$3})${$4}-${$5}-${$6}`;
                    return newPhone;
                });
                e.target.value = phone;
            }
            
            let phoneTest = checkPhone(e.target.value);
            if(phoneTest) {
                isErrorPhone = false;
                e.target.style.backgroundColor = '#fff';
            } else {
                isErrorPhone = true;
                e.target.style.backgroundColor = 'rgb(255 180 56)';
            }
        });

        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            if(!isErrorName && !isErrorPhone) {
                elem.reset();
                console.log('Отправка формы');
            }
        });
    });

};

export default checkInput;