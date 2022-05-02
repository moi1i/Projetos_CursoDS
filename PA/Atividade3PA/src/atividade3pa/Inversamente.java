
package atividade3pa;

import java.util.Scanner;

public class Inversamente {
    
    public void ordemInversa(){
    Scanner teclado = new Scanner(System.in);
    
    double[] vetorzin = new double [10];
    
    for(int repeticao = 0; repeticao < vetorzin.length; repeticao++){
        System.out.println("Digite um número: ");
        vetorzin [repeticao] = teclado.nextDouble();
    }
    
        System.out.println("Ordem Inversa do que foi digitado: ");
      for(int laco = vetorzin.length-1; laco >= 0; laco--){
          System.out.println(vetorzin[laco]);
          
      }
      
    
    }
}
    

    


