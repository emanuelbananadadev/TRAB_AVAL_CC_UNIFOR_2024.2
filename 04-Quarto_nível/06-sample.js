async function buscarNavePorId(idNave) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${idNave}/`);
        
        if (!resposta.ok) {
            throw new Error("Nave não encontrada. Verifique o ID e tente novamente.");
        }
        
        const dadosNave = await resposta.json();
        exibirNomeNave(dadosNave.name);
    } catch (error) {
        console.error("Erro ao buscar a nave:", error.message);
    }
}

function exibirNomeNave(nomeNave) {
    console.log("Nome da Nave:", nomeNave);
}

buscarNavePorId(10);
