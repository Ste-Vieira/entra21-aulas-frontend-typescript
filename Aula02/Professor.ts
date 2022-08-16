export class Professor {

    // atributos
    public nome: string
    public idade: number
    public disciplinas: Array<string>
    public valorHora: number
    public quantidadeHoras: number

    //Construtor
    constructor(
        nome: string,
        idade: number,
        disciplinas: Array<string>,
        valorHora: number,
        quantidadeHoras: number
    ) {
        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras
    }

    //métodos

    public apresentar(): string {
        return `Nome Professor: ${this.nome}- Idade ${this.idade} - Disciplinas ministradas: ${this.disciplinas.join(", ")}`
    }

    public calcularRendimento(): number {
        return this.valorHora * this.quantidadeHoras
    }



}