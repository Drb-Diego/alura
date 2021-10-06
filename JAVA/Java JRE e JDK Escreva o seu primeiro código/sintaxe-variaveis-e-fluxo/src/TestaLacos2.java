public class TestaLacos2 {
   public static void main(String[] args) {
   
      for (int linhas = 0; linhas < 10; linhas++) {
         for (int colunas = 0; colunas < 10; colunas++) {
            
            if (colunas > linhas) {
               break;
            }
            System.out.print("*");
         }
         System.out.println();
      }
   }
}
