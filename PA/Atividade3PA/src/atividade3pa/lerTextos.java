
package atividade3pa;

import java.util.Scanner;


public class lerTextos {
   Scanner teclado = new Scanner(System.in);
   
    public void lerTexto(){
        System.out.println("Digite o texto para repetir o mesmo 20 vezes: ");
    String texto = teclado.nextLine();
   
    for(int repeticao = 0; repeticao <= 20; repeticao++) {
        System.out.println(repeticao + " " + texto);
    
    }
  }
}
