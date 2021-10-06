public class TestaCondicional2 {
   public static void main(String[] args) {
      System.out.println("\nTestando condicionais\n");

      int idade = 16;
      int quantidadePessoas = 2;
      boolean estaAcompanhado = quantidadePessoas >= 2;

      if (idade >= 18 || estaAcompanhado) {
         System.out.println("seja bem-vindo");
      } else {
         
         System.out.println("Infelizmente você não pode entrar");
      }
   }
}
