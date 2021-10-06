public class TestaLacos {
   public static void main(String[] args) {

      int numero = 0;
      int numeroMultiplicado = 0;

      for (int index = 1; index <= 10; index++) {
         numero = index;

         for (int index2 = 1; index2 <= 10; index2++) {
            
            numeroMultiplicado = numero * index2;
            System.out.println(numero + " X " + index2 + " = " + numeroMultiplicado);
         }
         System.out.println("\n");
      }
   }
}
