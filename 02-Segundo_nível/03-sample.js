function calcularFrete(distancia) {
    const precoPorKm = 10;
    return distancia * precoPorKm;
}

const carro = {
    corrida: 50
};

const frete = calcularFrete(carro.corrida);
console.log(`O valor do frete é: ${frete}`);
