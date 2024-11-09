async function buscarEspeciePorId(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/species/${id}/`);

        if (!resposta.ok) {
            throw new Error("Não foi possível obter a espécie.");
        }

        const especie = await resposta.json();

        console.log(`Expectativa de vida média: ${especie.average_lifespan}`); //sem toUpperCase em um número
    } catch (erro) {
        console.error("Erro ao buscar a espécie:", erro);
    }
}

buscarEspeciePorId(1);
