function verificarSePodeDirigir(idade) {
    const maiorDeIdade = 18;
    if (idade < 0) {
        throw new Error("O número não pode ser negativo");
    }
    if (idade >= maiorDeIdade) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

const Pessoa = {
    nome: "Pedro",
    idade: 18
};

try {
    console.log(verificarSePodeDirigir(Pessoa.idade));
} catch (error) {
    console.error(error.message);
}
