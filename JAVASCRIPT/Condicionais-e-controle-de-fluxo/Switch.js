// swich

function calculate(number1, operador, number2) {
    let result = 0;

    switch (operador) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        default:
            console.log("não implementado")
            break
    }

    return result
}