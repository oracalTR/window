const calc = (type, material, square) => {
    const calcTotal = document.getElementById('calc-total');

    let totalPrice = 0;

    const calcTotalPrice = () => {
        totalPrice = (+square * +type * +material).toFixed(2);
        calcTotal.value = totalPrice;
    };

    if(type && material && square) {
        calcTotalPrice();
    } else {
        calcTotal.value = '';
    }
};

export default calc;