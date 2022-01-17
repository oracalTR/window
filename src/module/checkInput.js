import calc from './calc';

const checkInput = () => {
    const form = document.querySelectorAll('form');
    console.log('form: ', form);

    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');

};

export default checkInput;