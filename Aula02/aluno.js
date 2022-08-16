export class Aluno {
    //Construtor
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    //Metodos
    apresentar() {
        return `Olá ,eu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    calcularMedia() {
        //  os dois funcionam
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
        //faz a média em um código menor
        //return this.notas.reduce((anterior,posterior)=>anterior+posterior,0)/this.notas.length
    }
}
