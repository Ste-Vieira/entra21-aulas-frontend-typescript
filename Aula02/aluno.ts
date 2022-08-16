export class Aluno {

//Atributos
public nome:string
public idade:number
private notas:Array<number>

//Construtor

constructor(
    nome:string,
    idade:number,
    notas:Array<number>
){
this.nome=nome
this.idade=idade
this.notas=notas

}

//Metodos
public apresentar():string{
    return`Olá ,eu nome é ${this.nome} e tenho ${this.idade} anos`
}

public calcularMedia():number{
//  os dois funcionam
    let soma:number=0
    this.notas.forEach(nota => {
        soma+=nota
    });
    return soma/this.notas.length

    //faz a média em um código menor
    //return this.notas.reduce((anterior,posterior)=>anterior+posterior,0)/this.notas.length
}


}