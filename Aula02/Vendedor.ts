export class Vendedor{
//    atributos

public nome: string
public idade:number
public comissao:number
public vendasRealizadas:number


// construtor

constructor(
    nome:string,
    idade:number,
    comissao:number,
    vendasRealizadas:number
    ){
        this.nome=nome
        this.idade=idade
        this.comissao=comissao
        this.vendasRealizadas=vendasRealizadas

}

// métodos

public apresentar():string{
    return `Sou o vendedor ${this.nome}, tenho ${this.idade} anos e minha comissão é ${this.comissao}%`
}

public calcularRendimento():number{
    return (this.comissao/100) * this.vendasRealizadas
}
}