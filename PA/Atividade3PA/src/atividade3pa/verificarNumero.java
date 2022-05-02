
package atividade3pa;

import java.util.Scanner;


public class verificarNumero {
    
    public void verificarN(){
    Scanner teclado = new Scanner(System.in);
  
        System.out.println("Digite um número: ");
        double numero = teclado.nextDouble();
        
        if(numero > 100){
            System.out.println("O número digitado é maior que 100");
        }
        else{
        System.out.println("O número digitado é menor que 100");  
    }
        
   }
}
