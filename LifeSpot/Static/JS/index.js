let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString());
    session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    if (session.get("age") >= 18) {
        alert("Добро пожаловать на LifeSpot!\nТекущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет.\nВы будете перенаправлены в гугл:)");
        window.location.href = "http://www.google.com";
    }
}

let sessionLog = function logSession() {

    for (let result of session) {
        console.log(result);
    }
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


