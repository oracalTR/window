const timer = (deadLine) => {
    const timerDays = document.querySelectorAll('.count_1>span');
    const timerHours = document.querySelectorAll('.count_2>span');
    const timerMinutes = document.querySelectorAll('.count_3>span');
    const timerSeconds = document.querySelectorAll('.count_4>span');
    
    const countTimer = () => {
        let dateStop = new Date(deadLine).getTime();
        let daateNow = new Date().getTime();
        let timeRemaining = (dateStop - daateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24 % 24);
        let hours = Math.floor(timeRemaining / 60 / 60 % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if(timeRemaining > 0) {
            timerDays.forEach(elem => {
                elem.textContent = days < 10 ? '0' + days : days;
            });
            timerHours.forEach(elem => {
                elem.textContent = hours < 10 ? '0' + hours : hours;
            });
            timerMinutes.forEach(elem => {
                elem.textContent = minutes < 10 ? '0' + minutes : minutes;
            });
            timerSeconds.forEach(elem => {
                elem.textContent = seconds < 10 ? '0' + seconds : seconds;
            });
        } else {
            clearInterval(runTimer);
            timerDays.forEach(elem => {
                elem.textContent = '00';
            });
            timerHours.forEach(elem => {
                elem.textContent = '00';
            });
            timerMinutes.forEach(elem => {
                elem.textContent = '00';
            });
            timerSeconds.forEach(elem => {
                elem.textContent = '00';
            });
        }
    };
    const runTimer = setInterval(countTimer, 1000);

};

export default timer;