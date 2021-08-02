// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu 
// perímetro. 

function retangulo(base, altura) {
    let area = () => {
        let a = base * altura;
        return console.log(`A área desse retâmgulo é de: ${a}`)
    };

    let perimetro = () => {
        let p = (base + altura) + (base + altura);
        return console.log(`O perímetro desse retâmgulo é de: ${p}`) 
    };

    return {
        perimetro,
        area
    }
}

retangulo(17, 6).perimetro();
retangulo(20, 6).area();
