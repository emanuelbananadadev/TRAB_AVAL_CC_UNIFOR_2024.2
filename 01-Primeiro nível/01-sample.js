<<<<<<< HEAD
function h(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
=======
function pegarPar(lista) {
    let listaPar = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            listaPar.push(lista[i]);
>>>>>>> 1f495b95e2eceffa80a8c5bf417389cb36371fd7
        }
    }
    return listaPar;
}

<<<<<<< HEAD
const x = [1, 2, 3, 4, 5, 6];
const y = h(x);
console.log(y);
=======
let lista = [1, 2, 3, 4, 5, 6];
let listaPar = pegarPar(lista);
console.log(listaPar);
>>>>>>> 1f495b95e2eceffa80a8c5bf417389cb36371fd7
