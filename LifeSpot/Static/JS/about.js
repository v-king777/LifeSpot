function addComment() {
    let comment = new Comment(); // Прототип

    if (comment.empty) {
        return;
    }

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?');

    if (enableLikes) {
        let review = Object.create(comment); // Новый объект на базе прототипа
        review.rate = 0;
        writeReview(review);
    } else {
        writeReview(comment);
    }
}

const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {
        let commentId = Math.random();

        likeCounter = '<button class="like-button" id="' + commentId + '" onclick="addLike(this.id)">' +
            `❤️ ${review.rate}</button>`;
    }

    document.getElementsByClassName('reviews')[0].innerHTML +=
        '<div class="review-text">\n' +
        `<p><i><b>${review['author']}</b> - ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}

function Comment() {
    this.author = prompt('Как вас зовут?')
    if (this.author == null) {
        this.empty = true;
        return;
    }

    this.text = prompt('Оставьте отзыв')
    if (this.text == null) {
        this.empty = true
        return
    }

    this.date = new Date().toLocaleString()
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам,
    // так как счётчик лайков у нас отделен от символа ❤️ пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число,
    // так как при сложении любого значения со строкой в JS будет строка,
    // а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('.slider', {
        autoplay: false,
        interval: 10000
    });
});
