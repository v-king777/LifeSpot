const saveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value;

    alert('Последний ввод: ' + this.lastInput + '\nТекущий ввод: ' + currentInput);

    this.lastInput = currentInput;
}
