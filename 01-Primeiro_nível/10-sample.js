const usuarioObjeto = {
    nome: "João",
    idade: 25
};

function exibirUsuario(usuario) {
    console.log(`${usuario.nome} tem ${ usuario.idade } anos.`);
}

exibirUsuario(usuarioObjeto);
