// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

function circun(d) {
    r = d / 2;

    let perimetro = () => {

        let p = (2 * r) * 3.14
        return console.log(`O perímetro dessa circunferência é de: ${p}`)
    }

    let area = () => {
        let a = 3.14 * Math.pow(r, 2);
        console.log(`A área da circunferência é: ${a}`);
    }

    return {
        area,
        perimetro
    }
}

circun(30).area();
circun(8).perimetro();