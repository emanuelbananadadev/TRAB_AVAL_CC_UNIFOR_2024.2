class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
apresentar() {
    console.log(`Gestor: ${this.nome}, Idade: ${this.idade}`);
    }
}
new Gestor("Cauã", 20).apresentar();
