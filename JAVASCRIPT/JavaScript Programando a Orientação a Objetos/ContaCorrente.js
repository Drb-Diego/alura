// propriedade "export" exporta o modulo para outras classes utilizar

import { Cliente } from "./Cliente.js";

// Criando a classe de "conta corrente"
export class ContaCorrente{
    agencia;

    _cliente; // Private
    _saldo = 0; // Private


    constructor (cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(cliente){
        if (cliente instanceof Cliente){
            this._cliente = cliente;
        }
        
    }


    get saldo (){
        return this._saldo.toFixed(2);
    }


    // Metodo para saque 
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -=valor;
            // Retorna em string, para exibir é necessario ter uma variavel para receber o retorno
            return valor;
        }
        else {
            this._saldo = 0;
        }
    }


    // Metodo para depositar
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
    transferir (valor, conta) {
        
        //"valorSacado" irá receber o retorno do função "sacar"
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}