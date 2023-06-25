

function addCharacter(caracter) {
    const valueDisplay = document.querySelector('input.display').value

    document.querySelector('input.display').value = valueDisplay + caracter
}

function clearScreen() {
    document.querySelector('input.display').value = ''
}

function calculate() {
    const valueDisplay = document.querySelector('input.display').value

    document.querySelector('input.display').value = eval(valueDisplay)

}

function invertSignalNumber(){
    const valueDisplay = document.querySelector('input.display').value

    document.querySelector('input.display').value = (valueDisplay * -1)

}