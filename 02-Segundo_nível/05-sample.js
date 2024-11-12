function calcularSalarioFuncionario(horasTrabalhadas, valorHoras, cargo) {
    if(horasTrabalhadas < 0 && valorHoras < 0){
        throw new Error("As horas trabalhads e valor da hora não pode ser negativos");
    }
    const salarioBase = horasTrabalhadas * valorHoras;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + 1000;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + 500;
    } else {
        salarioComBonus = salarioBase + 200;
    }

    const salarioComDesconto = salarioComBonus - 300;

    let salarioFinal;
    if (salarioComDesconto > 5000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.27);
    } else if (salarioComDesconto > 3000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.18);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.11);
    }

    return salarioFinal;
}
const horasTrabalhadas = 160;
const valorHoras = 25;
const cargo = "gerente";

const salario = calcularSalarioFuncionario(horasTrabalhadas, valorHoras, cargo);
try {
console.log(`O salário final é: ${salario}`);
} catch (error){
    console.error(error.message);function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    if(horasTrabalhadas < 0 || valorHora < 0){
        throw new Error("As horas trabalhadas e valor da hora não podem ser negativos");
    }
    const salarioBase = horasTrabalhadas * valorHora;

    const bonusPorCargo = {
        "gerente": 1000,
        "supervisor": 500,
        "default": 200
    };

    const salarioComBonus = salarioBase + (bonusPorCargo[cargo] || bonusPorCargo["default"]);

    const salarioComDesconto = salarioComBonus - 300;

    const aliquotas = [
        { limite: 5000, desconto: 0.27 },
        { limite: 3000, desconto: 0.18 },
        { limite: Infinity, desconto: 0.11 }
    ];

    const aliquotaAplicada = aliquotas.find(aliquota => salarioComDesconto > aliquota.limite);
    const salarioFinal = salarioComDesconto - (salarioComDesconto * aliquotaAplicada.desconto);

    return salarioFinal;
}
const horasTrabalhadas = 160;
const valorHora = 25;
const cargo = "gerente";

const salario = calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo);
try {
    console.log(`O salário final é: ${salario}`);
} catch (error){
    console.error(error.message);
}
}
