function calcularDesconto(preco) {
    if(preco < 0){
        throw new Error('O número não pode ser negativo');
    }
    return preco - (preco * 0.15);
}

try {
    const precoFinal = calcularDesconto(150); 
    console.log(`Preço com desconto: ${precoFinal}`);
} catch (error) {
    console.error(error.message); 
}
try {
    const precoFinal = calcularDesconto(-1); // Esse número negativo vai lançar um erro
    console.log(`Preço com desconto: ${precoFinal}`);
} catch (error) {
    console.error(error.message); // Isso vai exibir a mensagem de erro
}