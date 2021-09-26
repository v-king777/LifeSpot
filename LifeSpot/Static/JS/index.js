let checker = function (newVisit) {
    if (window.sessionStorage.getItem('userAge') >= 18) {
        if (newVisit) {
            alert('Добро пожаловать на LifeSpot!\nТекущее время: ' + new Date().toLocaleString());
        }
    }
    else {
        alert('Наши трансляции не предназначены для лиц моложе 18 лет.\nВы будете перенаправлены в гугл:)');
        window.location.href = "http://www.google.com";
    }
}

let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem('startDate'));
    console.log('Даныне клиента: ' + window.sessionStorage.getItem('userAgent'));
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem('userAge'));
}

function handleSession(logger, checker) {
    if (window.sessionStorage.getItem('startDate') == null) {
        window.sessionStorage.setItem('startDate', new Date().toLocaleString());
    }

    if (window.sessionStorage.getItem('userAgent') == null) {
        window.sessionStorage.setItem('userAgent', window.navigator.userAgent);
    }

    if (window.sessionStorage.getItem('userAge') == null) {
        let input = prompt('Пожалуйста, введите ваш возраст');
        window.sessionStorage.setItem('userAge', input);

        checker(true);
    }
    else {
        checker(false);
    }

    logger(); // Колл-бэк
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; elements.length; i++) {
        let videoDescription = elements[i].getElementsByClassName('video-description')[0].innerText;

        if (!videoDescription.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}
