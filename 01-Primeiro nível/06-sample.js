const nome = "Pedro";
const idade = 25;
const ativo = true;

function mostrarAtivoInativo(nome, idade, ativo) {
    if (ativo) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

mostrarAtivoInativo(nome, idade, ativo);
