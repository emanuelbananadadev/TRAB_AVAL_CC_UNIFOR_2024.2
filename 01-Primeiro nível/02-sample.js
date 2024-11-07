<<<<<<< HEAD
const a = true;
=======
let statusAcesso = true;
>>>>>>> 1f495b95e2eceffa80a8c5bf417389cb36371fd7

function verificarAcesso(objetoPessoa) {
    if (statusAcesso && objetoPessoa.admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

<<<<<<< HEAD
const u = { nome: "João", admin: true };
verAc(u);
=======
let objetoPessoa = { nome: "João", admin: true };
verificarAcesso(objetoPessoa);
>>>>>>> 1f495b95e2eceffa80a8c5bf417389cb36371fd7
