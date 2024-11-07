function pegarPar(lista) {
    const listaPar = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            listaPar.push(lista[i]);
        }
    }
    return listaPar;
}

const lista = [1, 2, 3, 4, 5, 6];
const listaPar = pegarPar(lista);
console.log(listaPar);
