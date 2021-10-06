import { Conta } from "./Conta.js";

// propriedade "extends" aponta para qual classe ela irá herdar, no caso "Conta"
export class ContaCorrente extends Conta{


    constructor (cliente, agencia){
       
        // O "super" referencia a algo da classe mãe

        super(cliente, agencia); //Referencia o construtor da classe que está herdando
    }

   
}