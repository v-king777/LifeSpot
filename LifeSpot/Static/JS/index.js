let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет.\nВы будете перенаправлены в гугл:)");
    window.location.href = "http://www.google.com"
}
