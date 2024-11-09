async function buscarPersonagemPorId(id) {
    try {
        const url = `https://swapi.dev/api/people/${id}/`; //corrigindo url
        const resposta = await fetch(url);

        if (!resposta.ok) { 
            throw new Error(`Não foi possível encontrar o personagem com ID ${id}`);
        }

        const personagem = await resposta.json();
        console.log(personagem.name);
    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro); 
    }
}
const lukeId = 1;
buscarPersonagemPorId(lukeId);
