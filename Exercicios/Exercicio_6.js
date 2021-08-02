// Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

function divisao(a, b) {
    let quociente = a / b
    let resto = a % b

    return console.log(`Quociente: ${quociente} | Resto: ${resto}`);
}

divisao(37, 8)