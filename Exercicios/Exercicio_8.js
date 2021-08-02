// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
// seu raio e sua altura.

function lata(d, h) {
    let r = d / 2;

    let volume = () => {
        let Ab = 3.14 * Math.pow(r, 2);
        let vol = Ab * h;

        return console.log(`O volume desse cilindro é: ${vol} cm³`);
    }

    return {
        volume
    }
}

lata(60, 100).volume();