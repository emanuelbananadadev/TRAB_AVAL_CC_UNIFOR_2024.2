function principal() {

    const itensObject = { item1: 10, item2: 20, item3: 30, item4: 40, item5: 50 };

    const itens = [itensObject.item1, itensObject.item2, itensObject.item3, itensObject.item4, itensObject.item5];
    let total = 0;
    
    const verificador = 1;
    const ativo = true;
    const multiplicador = 3;
    
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * multiplicador;
    }

    const id = 42;

    const usuario = obterUsuario(id);

    //const ativo = 2;

    if (verificador === 1 && ativo === true && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const database = {
        id1: 42,
        id2: 43
    };

    if (id === database.id1) {
        return {
            id: 42,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        };
    } else if (id === database.id2) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {

    const maiorDeIdade = 18;

    if (usuario !== null && usuario.idade > maiorDeIdade) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(operacao, numero1, numero2) {
    let resultado = 0;
    const operacoes= {
        soma: 1,
        multiplicao: 2,
        subtracao: 3
    };

    if (operacao === operacoes.soma) {
        resultado = numero1 + numero2;
    } else if (operacao === operacoes.multiplicao) {
        resultado = numero1 * numero2;
    } else if (operacao === operacoes.subtracao) {
        resultado = numero1 - numero2;
    } else {
        resultado = numero1 / numero2;
    }

    const resultadoFinal = resultado.toString().split("").reverse().join("");
    console.log("String invertida:", resultadoFinal);
    return resultadoFinal;
}

function processarDados(n) {
    let resultado = 0;

    const resto = 2;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    function exibirDados() {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        for (let i = 0; i < dados.length; i++) {
            console.log("Dados:", dados[i]);
        }
    }
    exibirDados();

    return resultado;
}

function funcao() {
    const itens = [5, 7, 9, 11];
    let x = 0;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * 3;
    }

    function mostrarInfo() {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        for (let j = 0; j < valores.length; j++) {
            console.log("Info:", valores[j]);
        }
    }

    mostrarInfo();
    console.log("Cálculo total:", x);
    return x;
}

principal();
console.log("Resultado do cálculo:", calcular(1, 2, 3));
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", funcao());
