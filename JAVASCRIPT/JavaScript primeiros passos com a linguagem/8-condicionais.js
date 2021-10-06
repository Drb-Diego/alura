console.log(`Trabalhando com Condicionais`);

const listasDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 17;
const estaAcompanhado = true;
console.log(`\nDestinos possiveis \n${listasDeDestinos}\n`)


// Se a condicional for verdadeira faça
if (idadeComprador >= 18) {
    console.log(`comprador maior de idade`);
    listasDeDestinos.splice(1, 1); // Removendo o item da lista
    console.log(listasDeDestinos);
    console.log(`\nDestino: São Paulo Vendido !`);
} else if (estaAcompanhado) {
    console.log(`comprador está Acompanhado`);
    listasDeDestinos.splice(1, 1); // Removendo o item da lista
    console.log(listasDeDestinos);
    console.log(`\nDestino: São Paulo Vendido !`);
} else {
    console.log("Não é maior de idade e não está acompanhada");
}




// Operadores Lógicos 
// console.log(idadeComprador > 18); 
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);