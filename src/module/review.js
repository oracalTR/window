const review = () => {
    const commentsContainer = document.querySelector('.comments-container');

    let reviewData;
    let inteval;

    const getReview = () => {
        return fetch('../comments.json')
        .then(response => {
            commentsContainer.insertAdjacentHTML('beforeend', `
            <div class="col-lg-12">
            <img src="../images/users/sample.gif" alt="Загрузка отзывов">
            </div
            `);
            return response;
        })
        .then(response => response.json());
    };

    const changeReviewData = () => {
        let arr = reviewData.splice(0, 1);
        reviewData.splice(reviewData.length, 0, arr[0]);
        renderReview();
    };

    const changeReviewPage = () => {
        inteval = setInterval(() => {
            changeReviewData();
        }, 20000);
    };

    const renderReview = () => {
        commentsContainer.innerHTML = '';
        commentsContainer.insertAdjacentHTML('beforeend', `
            <div class="review-margin-bottom row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${reviewData[0].image ? reviewData[0].image : 'unknown.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-green review-arrow review-arrow-left">
                    <p class="text-normal">${reviewData[0].author}</p>
                    <p>${reviewData[0].comment}</p>
                </div>
            </div>
            </div>
            <div class="review-margin-bottom row comment-item">
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">${reviewData[1].author}</p>
                        <p>${reviewData[1].comment}</p>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/${reviewData[1].image ? reviewData[1].image : 'unknown.png'}" alt="" class="img-responsive avatar">
                    </div>
                </div>
            </div>
            <div class="row comment-item">
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/${reviewData[2].image ? reviewData[2].image : 'unknown.png'}" alt="" class="img-responsive avatar">
                    </div>
                </div>
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-orange review-arrow review-arrow-left">
                        <p class="text-normal">${reviewData[2].author}</p>
                        <p>${reviewData[2].comment}</p>
                    </div>
                </div>
            </div>
        `);
    };

    getReview()
    .then(data => {
        reviewData = data.comments;
        renderReview();
        changeReviewPage();
    });

};

export default review;