console.log(`Trabalhando com listas`);

// const salvador = "Salvador";
// const saoPaulo = "São paulo";
// const rioDeJaneiro = "Rio De Janeiro";

const listasDeDestinos = new Array(
    "Salvador", 
    "São Paulo", 
    "Rio de Janeiro"
);

// Metodo "push" adiciona um item no ultimo indice do array
listasDeDestinos.push("curitiba");  

// OBS: É possivel adicionar um item no array, mas não é possivel sobrescrever
// Exemplo: listasDeDestinos = 2;

console.log(listasDeDestinos);

// Metodo "splice" Retira o item da lista de acordo com o indice
listasDeDestinos.splice(1,1); // Retirar o item do indice 1 e retirar apenas um item, "São Paulo" irá sair do array
console.log(listasDeDestinos);

// Exibe o item de acordo com o indice 
console.log(listasDeDestinos[1]);