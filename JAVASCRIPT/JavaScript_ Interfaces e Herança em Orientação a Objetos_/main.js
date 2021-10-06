/*
    É necessario ter o arquivo json, para fazer a integração dos outros modulos com o "main.js"

    Para fazer essa integração basta digitar no terminal do repositorio do projeto "npm init"
*/

// Importanto Classes de diferentes arquivos
import {Cliente} from "./Cliente.js"; // OBS: Necessario especificar o tipo do arquivo tbm
import {ContaCorrente} from "./conta/ContaCorrente.js"; 
import {ContaPoupanca} from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";
import { Funcionario } from "./funcionarios/Funcionario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemasAutenticacao.js";


// Instanciando um novo cliente 
const cliente1 = new Cliente("Diego", "000.000.000-00");
cliente1.cadastrarSenha(123);

// Instanciando um novo cliente 
const cliente2 = new Cliente("Suzan","111.111.111-11");
cliente2.cadastrarSenha(123);

// Instanciando um novo cliente
const cliente3 = new Cliente ("Thiago", "222.222.222-22");
cliente3.cadastrarSenha(123);

//Instanciando a conta do cliente 1
const conta1 = new ContaCorrente (cliente1, 1111)
conta1.depositar(1000);

//Instanciando a conta  do cliente 2
const conta2 = new ContaPoupanca (cliente2, 2222);
conta2.depositar(2000);

//Instanciando a conta  do cliente 3
const conta3 = new ContaSalario(cliente3, 3333);
conta3.depositar(3000)

console.log(conta1);
console.log(conta2);
console.log(conta3);


const diretor = new Diretor ("Rodrigo", "000.000.000-25", 10000);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente ("Ricardo", "222.222.222-24",5000);
gerente.cadastrarSenha("123")

const cliente4 = new Cliente ("tatiana", "00000000");
cliente4.cadastrarSenha(123);

const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente4, 123);

console.log (diretorEstaLogado, gerenteEstaLogado,clienteEstaLogado);