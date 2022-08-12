let nome: string = "Stephanie"
let idade: number = 28

console.log(nome,idade);


$("<p>",{
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body")

//number é a variável que vou retornar, se colocar "0" o código quebra pois é string
function teste ():number{
    return 0
}

// boolean é a variável que eu quero retornar
function dados(nome: string, idade:number): boolean{
    if (nome=="Stephanie" && idade==28) {
        return true;
    } else {
        return false;
    }
}

function somar(numA:number,numB:number):string{
    return "A soma deu nisso"+numA+numB
}