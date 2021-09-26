const saveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    alert('Последний ввод: ' + this.lastInput + '\nТекущий ввод: ' + currentInput);

    this.lastInput = currentInput;
}
