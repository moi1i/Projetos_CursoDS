
package caixaeletronico;

import java.util.Scanner;


public class While {
    Scanner teclado = new Scanner(System.in);
    /*PRIMEIRA DEMONSTRAÇÃO DE ESTRUTURA DE REPEtIÇÃO WHILE*/
    public void executarMenu(){
        
    
    /*int cont = 0;
    while(cont < 10)*/
        
        /*cont++;
        System.out.println("O valor de cont é: " + cont);
  
        }*/
    
    /*SEGUNDA DEMONSTRAÇÃO DE ESTRUTURA DE REPEtIÇÃO WHILE*/

        System.out.println("DIGITE UM VALOR NUMÉRICO INTEIRO PARA A QUANTIDADE DE LOOPS: ");   
    int loops = teclado.nextInt();
    int cont = 0;
    
    
    while(cont < loops){
    cont++;
        System.out.println("O valor de cont é: " + cont + " WHILE " );
    }
    
    
    /*TERCEIRA DEMONSTRAÇÃO DE ESTRUTURA DE REPEtIÇÃO WHILE*/
        System.out.println("DIGITE UM VALOR NUMÉRICO INTEIRO PARA CONTINUAR OU ZERO PARA SAIR");
      int flag = teclado.nextInt();
      
      while(flag != 0){
      
          System.out.println("VOCÊ DIGITOU: " + flag);
          
          System.out.println("DIGITE UM VALOR NUMÉRICO INTEIRO PARA CONTINUAR OU ZERO PARA SAIR");
          flag = teclado.nextInt();
      }
      
          System.out.println("VOCÊ DIGITOU 0 ENCERROU  ");
  }
    
    
}
