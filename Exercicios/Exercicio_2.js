// Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo. 

function quadrado(aresta) {
    let area = () => {
        let a = Math.pow(aresta, 2);

        return console.log(`Área do quadrado: ${a}`);
    }

    let perimetro = () => {
        let p = aresta * 4;
        return console.log(`O perímetro do quadrado é: ${p}`) 
    }

    return {
        area,
        perimetro
    }
}

quadrado(7).area();
quadrado(7).perimetro();