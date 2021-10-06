import { Conta } from "./Conta.js";

// propriedade "extends" aponta para qual classe ela irá herdar, no caso "Conta"
export class ContaPoupanca extends Conta{


    constructor(cliente, agencia){
        
        //Referencia o construtor da classe que está herdando
        super(cliente,agencia);
    }

  
}