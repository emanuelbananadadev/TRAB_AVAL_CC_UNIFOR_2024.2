document.getElementById("buscarBtn").addEventListener("click", buscarPersonagem); // event listener para o botão

async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    limparMensagem(mensagemDiv);

    const personagemId = document.getElementById("personagemId").value;

    if (!isIdValido(personagemId)) {
        exibirMensagemErro("ID inválido. Insira um número positivo.", "danger", mensagemDiv);
        return;
    }

    try {
        const personagem = await obterPersonagemPorId(personagemId);
        exibirMensagemSucesso(personagem, mensagemDiv);
    } catch (erro) {
        exibirMensagemErro(erro.message, "danger", mensagemDiv);
    }
}

function isIdValido(id) {
    return id && id > 0;
}

function limparMensagem(container) {
    container.innerHTML = "";
}

async function obterPersonagemPorId(id) {
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    
    if (!resposta.ok) {
        throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
    }

    return await resposta.json();
}

function exibirMensagemErro(mensagem, tipo, container) {
    container.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirMensagemSucesso(personagem, container) {
    container.innerHTML = `  
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
      </div>`;
}
