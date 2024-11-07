class Usuario {
    constructor(nome, idade, papel, criadoEm, ultimoLogin, ativo, tentativasLogin, id) {
        this.nome = nome;
        this.idade = idade;
        this.papel = papel;
        this.criadoEm = criadoEm;
        this.ultimoLogin = ultimoLogin;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.id = id;
    }

    VerificarStatusAtivo() {
        if (this.ativo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarAcesso() {
        if (this.papel === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function contarAdmins(usuarios) {
    let contador= 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].papel=== "admin") {
            contador++;
        }
    }
    return contador;
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function verificarTentativasLogin(usuarios, limite) {
    if (usuario.tentativasLogin > limite) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function obterUltimoLogin(usuario1, usuario2) {
    if (usuario1.ultimoLogin > usuario2.ultimoLogin) {
        return `${usuario1.nome  } logou mais recentemente.`;
    } else {
        return `${usuario2.nome  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function verificaUsuarioRecente(usuario) {
    const now = new Date();
    const umAnoEmMillis = 31536000000 // 1 ano em milissegundos :)
    if (now - usuario.criadoEm < umAnoEmMillis) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuario = [
    new Usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${  contarAdmins(usuarios)}`);

usuarios[0].verificarStatusAtivo();
usuarios[1].verificaAcesso();

verificarTentativasLogin(usuarios[2], 4);

console.log(obterUltimoLogin(usuarios[0], usuarios[3]));

verificaUsuariosRecentes(usuarios[3]);
