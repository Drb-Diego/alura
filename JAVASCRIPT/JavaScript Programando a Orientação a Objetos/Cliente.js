// propriedade "export" exporta o modulo para outras classes utilizar

//Classe cliente
export class Cliente{
    nome;

    _cpf; //Private

    get cpf (){
        return this._cpf;
    }

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
