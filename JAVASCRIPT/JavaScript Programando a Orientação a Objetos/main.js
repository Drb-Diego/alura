/*
    É necessario ter o arquivo json, para fazer a integração dos outros modulos com o "main.js"

    Para fazer essa integração basta digitar no terminal do repositorio do projeto "npm init"
*/

// Importanto Classes de diferentes arquivos
import {Cliente} from "./Cliente.js"; // OBS: Necessario especificar o tipo do arquivo tbm
import {ContaCorrente} from "./ContaCorrente.js"; 

// Instanciando os novo cliente 
const cliente1 = new Cliente("Diego", 123456789);

// Instanciando os novo cliente 
const cliente2 = new Cliente("Suzan",123456789);

//Instanciando a conta corrente do cliente 1
const conta1  = new ContaCorrente (cliente1, 1111);

conta1.depositar(500);

//Instanciando a conta corrente do cliente 2
const conta2 = new ContaCorrente (cliente2, 2222);

// Chamando o metodo transferir 
conta1.transferir(100,conta2);

console.log(conta1.cliente,"Saldo: R$" + conta1.saldo);
console.log(conta2.cliente,"Saldo: R$" + conta2.saldo);
