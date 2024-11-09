async function buscarPlanetaRecursivo(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
        
        if (!resposta.ok) {
            console.log(`Planeta com ID ${id} não encontrado ou erro na API.`);
            return; 
        }

        const planeta = await resposta.json();
        console.log(planeta.name);

        if (!planeta.next) {
            console.log("Fim da lista de planetas.");
            return;
        }

        const nextId = id + 1;
        buscarPlanetaRecursivo(nextId);

    } catch (erro) {
        console.error("Erro ao buscar planeta:", erro);
    }
}

buscarPlanetaRecursivo(1);
