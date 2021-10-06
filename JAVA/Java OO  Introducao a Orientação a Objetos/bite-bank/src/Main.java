public class Main  {

    public static void main(String[] args) {

        //Instanciando o primeiro objeto
        ContaPoupanca conta1 = new ContaPoupanca(200, 4239, 3033352, "Diego Ramos Brito");

        //Instanciando o segundo objeto
        ContaCorrente conta2 = new ContaCorrente(4000, 4239, 3033350, "Suzan Ellen Batista Santos");

        System.out.println(conta1.getInfoConta());
        System.out.println();
        System.out.println(conta2.getInfoConta());
    }
}
