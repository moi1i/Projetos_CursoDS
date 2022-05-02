
package atividade3pa;

import java.util.Scanner;


public class lerNome {
    Scanner teclado = new Scanner(System.in);
    
     public void repetirNome(){
         String nome = "";

         
         do{
             System.out.println("Digite um nome ou 'Sair' para parar o programa " + nome);
             nome = teclado.nextLine();
             System.out.println("Você digitou: " + nome);

       
         }while(!nome.equalsIgnoreCase("Sair"));                 
    }    
}    

