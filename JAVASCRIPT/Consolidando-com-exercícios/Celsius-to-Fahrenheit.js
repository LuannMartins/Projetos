/* ### Celsius em fahrenheit 

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = c * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo error
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo ideal, F -> C
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign

}

try {
    transformDegree('50F')
    transformDegree('50Z')
} catch (Error) {
    console.log(Error.message)
}