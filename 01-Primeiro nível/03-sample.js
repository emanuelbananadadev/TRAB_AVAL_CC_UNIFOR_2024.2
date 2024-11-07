let data1 = "2024-01-01";
let data2 = "2024-12-31";

function calcularDiferenca(data1, data2) {
    return (new Date(data2) - new Date(data1)) 
}

let res = calcularDiferenca(data1, data2);
console.log(res);
