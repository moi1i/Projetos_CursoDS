
package atividade2pa;

import java.util.Scanner;


public class Tabuada {
    
    public void calcularTabuada(){
        Scanner teclado = new Scanner(System.in);
    
    System.out.println("Digite um número para gerar a tabuada");
    int numero = teclado.nextInt();
    
    System.out.println("Tabuada do " + numero);

    for (int n = 1; n <= 10; n++){
        System.out.println(n + "." + numero + " = " + (n * numero));
      }
    
   }

}
