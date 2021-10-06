// propriedade "export" exporta o modulo para outras classes utilizar

//Classe cliente
export class Cliente{


    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        this._senha;
    }

    get cpf (){
        return this._cpf;
    }

    autenticar (senha){
       
        if (senha == this._senha){
            return true;
        }
        else {
          return false;
        }
   
    }
    cadastrarSenha (senha){
        this._senha = senha;
    }
}
