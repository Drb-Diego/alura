public class TestaCondicional {

   public static void main(String[] args) {

      System.out.println("\nTestando condicionais\n");

      int idade = 16;
      boolean quantidadePessoas = true;

      if (idade >= 18) {
         System.out.println("Você tem mais de 18 anos");
         System.out.println("seja bem-vindo");
      } else {
         if (quantidadePessoas) {
            System.out.println("Você não tem 18 anos, mas pode entrar, pois está          acompanhado");
         } else {
            System.out.println("Infelizmente você não pode entrar");
         }
      }
   }
}
