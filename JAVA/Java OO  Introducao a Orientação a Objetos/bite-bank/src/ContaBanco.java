class ContaBanco {
   
   private double saldo;
   private int agencia;
   private int numeroConta;
   private String nomeTitular;

   public ContaBanco(double saldo, int agencia, int numeroConta, String nomeTitular) {
      this.saldo = saldo;
      this.agencia = agencia;
      this.numeroConta = numeroConta;
      this.nomeTitular = nomeTitular;
   }


   public double getSaldo() {
      return saldo;
   }

   public int getAgencia() {
      return agencia;
   }

   public int getNumeroConta() {
      return numeroConta;
   }

   public String getNomeTitular() {
      return nomeTitular;
   }
   
   public void depositar(double saldo) {
      this.saldo += saldo;
   }

   public void sacar(double saldo) {
      this.saldo -= saldo;
   }
   
   public String getInfoConta(){

      return "\nTitular da conta: " + this.getNomeTitular() + " | " + "Saldo da conta: R$" + this.getSaldo() + " | " + " Agencia: " + this.getAgencia() + " | " + "Numero da conta: " + this.getNumeroConta();
   }
}
