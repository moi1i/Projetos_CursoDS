
package atividade3pa;

import java.util.Arrays;
import java.util.Scanner;

public class Crescente {
     Scanner teclado = new Scanner(System.in);
     
     public void lerNumber(){
     
         double[] numero = new double[10];
         
         for(int repeticao = 0; repeticao < numero.length; repeticao++){
             System.out.print("Digite um número: ");
             numero [repeticao] = teclado.nextDouble();
         }
         //colocando em ordem crescente
         Arrays.sort(numero);
         System.out.println("Ordem crescente:");
         for (int laco = 0; laco < numero.length; laco++){
             System.out.println(numero[laco]);
         }
     }

} 
   

