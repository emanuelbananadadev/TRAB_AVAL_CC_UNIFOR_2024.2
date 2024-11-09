//english pls
async function getFilmById(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${id}/`);

        if (!response.ok) {
            throw new Error(`Filme com ID ${id} não encontrado.`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar filme:", error.message);
        throw error;
    }
}

function displayFilmTitle(film) {
    console.log(film.title.toUpperCase());
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <strong>Título do Filme:</strong> ${film.title.toUpperCase()}
        </div>
    `;
}

async function getFilm() {
    const filmId = document.getElementById("filmId").value;  

    if (!filmId || filmId <= 0) {
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ID inválido. Por favor, insira um número positivo.
            </div>
        `;
        return;
    }

    try {
        const film = await getFilmById(filmId);
        displayFilmTitle(film);
    } catch (error) {
        console.log("Falha ao buscar filme:", error.message);
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Falha ao buscar filme: ${error.message}
            </div>
        `;
    }
}

document.getElementById("buscarBtn").addEventListener("click", getFilm);

