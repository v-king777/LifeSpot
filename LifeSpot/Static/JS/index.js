let sessionHandler = function handleSession() {
    // создадим объект Map для хранения сессии
    let session = new Map();

    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Добро пожаловать на LifeSpot!\nТекущее время: " + startDate);
        session.set("startDate", startDate);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет.\nВы будете перенаправлены в гугл:)");
        window.location.href = "http://www.google.com";
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result);
    }
}

let contentFilter = function filterContent(userInput) {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; elements.length; i++) {
        let videoDescription = elements[i].getElementsByClassName('video-description')[0].innerText;

        if (!videoDescription.toLowerCase().includes(userInput.toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}
