async function buscarDadosDoPersonagem() {
    try {
        const dadosDoPersonagem = '{ "name": "Luke", "idade": 23 }'; 
        const personagem = JSON.parse(dadosDoPersonagem); 
        console.log(personagem.name); 
    } catch (erro) {
        console.error("Erro ao processar os dados do personagem:", erro); 
    }
}

buscarDadosDoPersonagem();
