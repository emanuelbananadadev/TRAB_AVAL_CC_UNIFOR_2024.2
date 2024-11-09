async function buscarPersonagem() {
    const idPersonagem = 1000000000000;

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        
        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }
        
        const personagem = await resposta.json();
        exibirNomePersonagem(personagem);

    } catch (error) {
        exibirErro(error.message);
    }
}

function exibirNomePersonagem(personagem) {
    console.log(personagem.name);
}

function exibirErro(mensagem) {
    console.error("Erro ao buscar personagem:", mensagem);
}

buscarPersonagem();
