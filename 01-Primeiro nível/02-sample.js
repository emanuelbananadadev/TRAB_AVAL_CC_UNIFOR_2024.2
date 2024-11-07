let statusAcesso = true;

function verificarAcesso(objetoPessoa) {
    if (statusAcesso && objetoPessoa.admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let objetoPessoa = { nome: "João", admin: true };
verificarAcesso(objetoPessoa);
