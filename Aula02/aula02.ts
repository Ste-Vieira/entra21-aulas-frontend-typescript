import { Aluno } from "./aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";
import { Vendedor } from "./Vendedor.js";


let animal1: Animal = new Animal("drodofila", "mosca", 0.5, ["ar", "lixo", "comida"])
console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);


animal1.nome = "Cachorro"
animal1.peso = 4.6
animal1.habitat[0] = "jardim"
animal1.setEspecie = "lupuscaninos"


console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

console.log("===================================");


let animal2: Animal = new Animal("Felis silvestris catus", "gato", 3.4, ["cama", "sofá"])
console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);


animal2.nome = "Rinoceronte"
animal2.peso = 400
animal2.habitat = ["água", "terra"]
animal2.setEspecie = "Ceratotherium simum"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);

console.log("=========================");

let stephanie: Aluno = new Aluno("Stephanie", 28, [8, 9, 7.8])
console.log(stephanie);
console.log(stephanie.nome);
console.log(stephanie.idade);
console.log(stephanie.calcularMedia());
console.log(stephanie.apresentar());

let fulano: Aluno = new Aluno("Jorge", 44, [7, 3.4, 6.7])
console.log(fulano);
console.log(fulano.nome);
console.log(fulano.idade);
console.log(fulano.calcularMedia());
console.log(fulano.apresentar());

console.log("========================");

let professor1: Professor = new Professor ("Marta",48,["Matématica","Estatistica","Lógica"],80,12)
console.log(professor1);
console.log(professor1.nome);
console.log(professor1.idade);
console.log(professor1.disciplinas);
console.log(professor1.valorHora);
console.log(professor1.apresentar());
console.log(professor1.calcularRendimento());

console.log("===========================");

let vendedor1: Vendedor=new Vendedor("Luciano",31,15,8000)
console.log((vendedor1));
console.log((vendedor1.nome));
console.log((vendedor1.idade));
console.log((vendedor1.comissao));
console.log((vendedor1.vendasRealizadas));
console.log((vendedor1.apresentar()));
console.log("Meu rendimento foi de R$"+(vendedor1.calcularRendimento()));













