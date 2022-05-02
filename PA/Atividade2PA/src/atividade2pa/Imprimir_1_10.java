
package atividade2pa;


public class Imprimir_1_10 {
    
    public int numero = 0;
    
    public void imprimirNumeros (){
        
        //laço de repetição for
        for (int contador = 1; contador <=10; contador++){
        
        //processamento
        numero = numero + contador;
        
        //saída
        System.out.println("Imprimindo: " + contador);
        
        }
                
    }
}
