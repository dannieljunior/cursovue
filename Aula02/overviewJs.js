var varString = "minha string";
var varNumeric = 123;
var varNumericFloat = 123.5;
var varBoolean = true;

console.log(varString);
console.log(varNumeric);
console.log(varNumericFloat);
console.log(varBoolean);

var nome = "José";
var sobreNome = "Silva";

console.log(nome + " " + sobreNome);

console.log(`${nome} 
${sobreNome}`);

var texto = 'Este texto é muito longo e preciso "cortar" ele';
console.log(texto.substring(0, 23).toUpperCase() + "...")

var preco = 105.8;
console.log(preco.toFixed(2))

var isVerdadeiro = false;
console.log(isVerdadeiro ? "é verdade" : "é mentira");

var x = 10;
var y = 15;

console.log(x + y);
console.log(y - x);
console.log(y * x);
console.log(y / x);

var isVerdadeiro = false;

if(isVerdadeiro){
    console.log("é verdade")
}
else{
    console.log("é mentira")
}

let numero = 0;

while(numero <= 10){
    console.log(numero);
    numero++;
}

const frutas = ["maça", "banana", "melancia", "laranja", "limão"]

console.log(frutas)

for (let indice = 0; indice < frutas.length; indice++) {
    const element = frutas[indice];
    console.log(element)
}

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matriz)

for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];   
    for (let j = 0; j < element.length; j++) {
         const element1 = element[j];
         console.log(element1)
    }
}

const superHeroi1 = {
    nome: "Tony Stark",
    idade: 45,
    isSuperHeroi: true,
    nomeSuperHeroi: "Homem de ferro",
    fortunaEstimada: 2000000000.99,
    relacionamentos: [
        {
            nome: "peper Pots",
            relacionamento: "Esposa"
        },
        {
            nome: "Morgan",
            relacionamento: "Filha"
        }
    ],
    equipes: ["Vingadores", "Campeoes"],
    empresa: {
        nome: "Stark Industries",
        sede: "Nova York"
    }
}

const superHeroi2 = {
    nome: "Steve Rogers",
    idade: 45,
    isSuperHeroi: true,
    nomeSuperHeroi: "Capitão America",
    fortunaEstimada: 0.00,
    relacionamentos: [],
    equipes: ["Vingadores"],
    empresa: null
}

let superHeroes = [];

superHeroes.push(superHeroi1);
superHeroes.push(superHeroi2);

console.log(superHeroes)




