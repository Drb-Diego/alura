export class Funcionario{
    
    constructor (nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;

        this._senha;
    }

    autenticar (senha){
    if (senha == this._senha){
           return true;
    }
    else{
           return false
       }
    }

    cadastrarSenha (senha){
        this._senha = senha;
    }
}