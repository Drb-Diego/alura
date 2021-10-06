console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Jacobina`
    
    
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Jacobina";


console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar  = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<4){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log ("\nDestino existe: ", destinoExiste);


if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
    
}else{
    console.log("Desculpe, Houve algum erro...");
}

destinoExiste = false;

for(let i = 0; i<4; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
    
}
