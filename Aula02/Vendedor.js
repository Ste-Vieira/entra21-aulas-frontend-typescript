export class Vendedor {
    // construtor
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    // métodos
    apresentar() {
        return `Sou o vendedor ${this.nome}, tenho ${this.idade} anos e minha comissão é ${this.comissao}%`;
    }
    calcularRendimento() {
        return (this.comissao / 100) * this.vendasRealizadas;
    }
}
