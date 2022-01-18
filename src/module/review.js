const review = () => {
    const commentsContainer = document.querySelector('.comments-container');
    console.log('commentsContainer: ', commentsContainer);

    let reviewData;

    const getReview = () => {
        return fetch('../comments.json')
        .then(response => {
            commentsContainer.insertAdjacentHTML('beforeend', `
            <img src="../images/users/sample.gif" alt="Загрузка отзывов">
            `)
            return response;
        })
        .then(response => response.json());
    };

    const renderReview = () => {
        commentsContainer.innerHTML = '';
        commentsContainer.insertAdjacentHTML('beforeend', `
            <div class="review-margin-bottom row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/face4.png" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-green review-arrow review-arrow-left">
                    <p class="text-normal">${reviewData[0].author}</p>
                    <p>Не люблю писать отзывы, но в данном случае решил помочь компании, потому что неоднократно обращался в другие организации со своими просьбами, но либо не было компетентного сотрудника, либо навязывали стандартные решения. У меня коттедж, и мне нужны были нестандартные цветные окна, чтобы не нарушать дизайн интерьера моего дома. Еще один момент, после обращения, ко мне загород бесплатно отправили мастера для обсуждения моего заказа. Парень отработал на отлично, помог с решением технических моментов!</p>
                </div>
            </div>
            </div>
            <div class="review-margin-bottom row comment-item">
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">Григорий и Вероника</p>
                        <p>Мы с супругом приобрели квартиру в ипотеку. Жильё было вторичное, соответственно было необходимо много что поменять, отремонтировать. В компании «Профремонт», нам предложили комплексную услугу на очень хороших условиях. Мы заменили окна, установили натяжные потолки, межкомнатные двери, а также заказали большой шкаф-купе в нашу комнату. За большой заказ нам предоставили очень хорошую скидку, и сделали всё в рассрочку без банка! Очень приятным было внимательное отношение сотрудников компании. Спасибо!</p>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/face5.png" alt="" class="img-responsive avatar">
                    </div>
                </div>
            </div>
            <div class="row comment-item">
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/face6.png" alt="" class="img-responsive avatar">
                    </div>
                </div>
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-orange review-arrow review-arrow-left">
                        <p class="text-normal">Семья Петровых</p>
                        <p>Давно планировали заменить старые окна на новые, но никак не предоставлялось возможности, потому что требовалась достаточно большая сумма сразу. Увидели рекламу компании «Профремонт», и решили принять участие в их программе. Нам предоставили хорошую рассрочку без банка и переплат. И нам удалось поменять окна во всей квартире сразу! Считаем, что нам очень повезло.</p>
                    </div>
                </div>
            </div>
        `);
    };

    getReview()
    .then(data => {
        reviewData = data.comments;
        console.log(reviewData);
        renderReview();
    });


};

export default review;