export class Professor {
    //Construtor
    constructor(nome, idade, disciplinas, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    //métodos
    apresentar() {
        return `Nome Professor: ${this.nome}- Idade ${this.idade} - Disciplinas ministradas: ${this.disciplinas.join(", ")}`;
    }
    calcularRendimento() {
        return this.valorHora * this.quantidadeHoras;
    }
}
