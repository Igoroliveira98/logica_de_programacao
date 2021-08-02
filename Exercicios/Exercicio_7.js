// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um
// valor de temperatura em Fahrenheit e exibi-lo em Celsius

// Formula de F: (10 °C × 9/5) + 32 = 50 °F
// Formula de C: (32 °F − 32) × 5/9 = 0 °C

function wheterConvert(F) {
    let C = (F - 32) * 5/9 
    
    return console.log(`${C}°C`)
}

wheterConvert(90);