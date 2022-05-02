
package atividade2pa;

import java.util.Scanner;


public class Origem_produto {
    Scanner teclado = new Scanner(System.in);
    
    public void origemProduto (){
        System.out.println("Informe o código: ");
        int codigo = teclado.nextInt();
        
        if(codigo == 1){
        System.out.println("Região de procedência: Sul");
        }
        else if (codigo == 2) {
        System.out.println("Região de procedência: Norte");
        }
        else if (codigo == 3){
        System.out.println("Região de procedência: Leste");
        }
        else if (codigo == 4) {
        System.out.println("Região de procedência: Oeste");
        }
        else {
        System.out.println("Região de procedência não identificada");
        }
    
    }
    
    public void origemProduto2 () {
     System.out.println("Informe o código: ");
        int codigo = teclado.nextInt();
        
        switch (codigo) {
            case 1:
            System.out.println("Região de procedência: Sul");
       break;
     case 2:
       System.out.println("Região de procedência: Norte");
       break;
     case 3:
       System.out.println("Região de procedência: Leste");
       break;
     case 4:
       System.out.println("Região de procedência: Oeste");
       break;
     default:
       System.out.println("Região de procedência não identificada");
  }
    }
}
