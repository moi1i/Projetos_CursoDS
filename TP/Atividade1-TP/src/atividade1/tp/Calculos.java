
package atividade1.tp;


public class Calculos {
    
   public float valor1; 
   public float valor2;
   public float resultado;

   
   public void realizarSoma (float valor1, float valor2) {
   
       this.valor1 = valor1;
       
       this.valor2 = valor2;
       
       resultado = valor1 + valor2;
       
       System.out.println ("180 + 40 =  " + resultado );
       
   }
  public void realizarSubtracao (float valor1, float valor2) {
   
       this.valor1 = valor1;
       
       this.valor2 = valor2;
       
       resultado = valor1 - valor2;
       
       System.out.println ("2000 - 678 =  " + resultado );
       
   } 
  
  public void realizarMultiplicacao (float valor1, float valor2) {
   
       this.valor1 = valor1;
       
       this.valor2 = valor2;
       
       resultado = valor1 * valor2;
       
       System.out.println ("1000 * 150 = " + resultado );
       
   }
  
  public void realizarDivisao (float valor1, float valor2) {
   
       this.valor1 = valor1;
       
       this.valor2 = valor2;
       
       resultado = valor1 / valor2;
       
       System.out.println ("6500 / 6 =  " + resultado );
       
   }
}
