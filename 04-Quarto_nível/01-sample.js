//testando em ingles
async function getPlanetById(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);

        if (!response.ok) {
            throw new Error(`Planeta com ID ${id} não encontrado.`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar planeta:", error.message);
        throw error;
    }
}

function displayPlanetName(planet) {
    console.log(planet.name);
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <strong>Nome do Planeta:</strong> ${planet.name}
        </div>
    `;
}

async function getPlanet() {
    const planetId = document.getElementById("planetId").value;  

    if (!planetId || planetId <= 0) {
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ID inválido. Por favor, insira um número positivo.
            </div>
        `;
        return;
    }

    try {
        const planet = await getPlanetById(planetId);
        displayPlanetName(planet);
    } catch (error) {
        console.log("Falha ao buscar planeta:", error.message);
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Falha ao buscar planeta: ${error.message}
            </div>
        `;
    }
}

// event listener do botão
document.getElementById("buscarBtn").addEventListener("click", getPlanet);
