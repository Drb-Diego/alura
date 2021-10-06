public class ContaPoupanca extends ContaBanco {
   
   private String tipoConta = "Conta Poupança";

   public ContaPoupanca(double saldo, int agencia, int numeroConta, String nomeTitular) {
      super(saldo, agencia, numeroConta, nomeTitular);
   }

   
   public String getTipoConta() {
      return tipoConta;
   }
   
   @Override
   public String getInfoConta(){

      return "\nTitular da conta: " + this.getNomeTitular() + " | " + "Saldo da conta: R$" + this.getSaldo() + " | " + " Agencia: " + this.getAgencia() + " | " + "Numero da conta: " + this.getNumeroConta() + " | " + "Tipo da conta: " + this.getTipoConta();
   }
}
