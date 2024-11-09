function calcularDesconto(preco) {
    const desconto = 0.15;
    if (preco < 0) {
        throw new Error("O número não pode ser negativo");
    }
    return preco - (preco * desconto);
}

const produtos = {
    celular: 800,
    fone: 150
};

try {
    const precoFinal = calcularDesconto(produtos.celular);
    console.log(`Preço com desconto: ${precoFinal}`);
} catch (error) {
    console.error(error.message);
};

try {
    const precoFinal = calcularDesconto(produtos.fone); // Esse número negativo vai lançar um erro
    console.log(`Preço com desconto: ${precoFinal}`);
} catch (error) {
    console.error(error.message); // Isso vai exibir a mensagem de erro
};
